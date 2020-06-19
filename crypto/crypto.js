$(document).ready(function() {
    console.log('crypto.js loaded');
});


function eButton(){
    var dTxt = $('#clear-txt').val();
    $('#clear-txt').val('');
    var eTxt = (encrypt(dTxt));
    $('#enc-txt').val(eTxt);
}

function dButton(){
    var eTxt = $('#enc-txt').val();
    $('#enc-txt').val('');
    var dTxt = (decrypt(eTxt));
    $('#clear-txt').val(dTxt);
}

function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}