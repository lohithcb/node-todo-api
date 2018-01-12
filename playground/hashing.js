//Old method of authentication
/*
const {SHA256} = require('crypto-js');

var msg = "this is msg";
var hash = SHA256(msg);

console.log(`Message: ${msg}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var tokens = {
    data,
    hash: SHA256(JSON.stringify(data) + 'saltString').toString()
};

var resultHash = SHA256(JSON.stringify(tokens.data) + 'saltString').toString();
if (resultHash === tokens.hash){
    console.log('Data was not changed');
}else {
    console.log('Data was changed');
}
*/

//JSON Web Token JWT - standard method for authentication
/*
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};
//generates token
var token = jwt.sign(data, 'saltString');
console.log('Token:', token);

//decode generated string
var decode = jwt.verify(token, 'saltString');
console.log('Decode:', decode);
*/

//bcryptjs
const bcryptjs = require('bcryptjs');
var password = 'lohithcb';

// bcryptjs.genSalt(16, password, (err, res) => {
//     bcryptjs.hash(password, res, (err, res) => {
//         console.log('hashedPasswordh:', res);
//     });
// });

var hashPassword = '$2a$16$2i0LcQyMrzOl0zYGEYVzVeRs2bruqrmqIrvsxKNDomgJV726oYJBa';
bcryptjs.compare(password, hashPassword, (err, res) => {
    console.log(res);
});
