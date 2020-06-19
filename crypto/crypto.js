$(document).ready(function() {
    console.log('crypto.js loaded');
});


$('#clear-txt-btn').click(function (){
    var clearTxt = $('#clear-txt').val();
    console.log(clearTxt);
    console.log(encrypt(clearTxt));
})

function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}