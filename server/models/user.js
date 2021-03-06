//Users model
const mongoose = require('mongoose');
//validator lib.
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcryptjs = require('bcryptjs');

//defining model schema
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            // validator: (value) => {
            //     return validator.isEmail(value);
            // },
            // or
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

//defining schema instinct method, here fun is defined not as ES6 bcause it can't access "this" variable
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'lohithcb').toString();

    user.tokens.push({access, token});
    //here retuning the promise to use the token in server.js and to chain a promise to it
    return user.save().then(() => {
        return token;
        });
};

//instinct method
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

//model method
UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decode;

    try {
        decode = jwt.verify(token, 'lohithcb');
    }catch (e){
        return Promise.reject();
    }

    return User.findOne({
        '_id': decode._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });

};

UserSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        var password = user.password;
        bcryptjs.genSalt(16, (err, salt) => {
            bcryptjs.hash(password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    }else {
        next();
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = { User };