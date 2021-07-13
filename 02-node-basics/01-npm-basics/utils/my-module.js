function add (num1, num2){
    return num1 + num2;
}

function mul (num1, num2){
    return num1 * num2;
}

const MAGIC_NUMBER = Math.round(Math.random() * 100)

const getMyLuckyNumber = () => MAGIC_NUMBER ;

module.exports = {
    // Short-hand property syntax
    add,
    getMyLuckyNumber
}