// custom JS
var custom = {};

custom.getMessage = function () {
    return 'Hello Webpack';
}

custom.csrfToken = (csrftoken) => {
    console.log('test');
    return console.log('The function dealing with CSRF Tokens..')
}

custom.addNum = (num1, num2) => {
    total = num1 + num2;
    return total
}

custom.prop1 = 'something'


function test() {
    console.log('This is a test');
}

module.exports = custom;
