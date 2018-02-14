// Created by kjjanak on 9.13.16

// Main Page Visual Javascript [JQERY]

$( document ).ready(function() {
    //Open Main Menu and activate dimmer
    // $('#navMenu').click('click', function (){
    //     $('#mainMenu').toggleClass("active");
    //     $('#overlay').toggleClass("active");
    //     $('#body').toggleClass("hideOverFlow");
    // });
    // $('#menuCloseButton').click('click', function (){
    //     $('#mainMenu').toggleClass("active");
    //     $('#overlay').toggleClass("active");
    //     $('#body').toggleClass("hideOverFlow")
    // });
    // //Click off Menu to close
    // $('#overlay').click('click', function (){
    //     $('#mainMenu').toggleClass("active");
    //     $('#overlay').toggleClass("active");
    //     $('#body').toggleClass("hideOverFlow");
    // });
    // $('#settingsMenuButton').click('click', function (){
    //     $('#defaultSettings').slideToggle("fast");
    //     $('#settingsMenuButton').toggleClass("active");
    // });
    // $('#aboutMenuButton').click('click', function (){
    //     $('#aboutText').slideToggle("fast");
    //     $('#aboutMenuButton').toggleClass("active");
    // });

    // // Show/Hide Sections using slideToggle
    // $('#showHideBattle').click('click', function (){
    //     $('#battle').slideToggle("fast");
    // });
    // $('#showHideToWin').click('click', function (){
    //     $('#toWin').slideToggle("fast");
    // });
    // $('#showHideToDefend').click('click', function (){
    //     $('#toDefend').slideToggle("fast");
    // });
    // $('#showHideToVisible').click('click', function (){
    //     $('#toVisible').slideToggle("fast");
    // });
    // $('#showHideToTech').click('click', function (){
    //     $('#toTech').slideToggle("fast");
    // });
});

// Math and Variable Javascript
var defaultWT = 1;

function showhidebuttons() {
    var eleBtns = document.getElementsByClassName("smallbtn");
    for (var i = 0; i < eleBtns.length; i++) {
        if (eleBtns[i].style.display == 'none') {
            eleBtns[i].style.display = 'inline';
        } else {
            eleBtns[i].style.display = 'none';
        }
    }
}

/* REMOVING JS TEST - Replacing with smoother looking JS
function showhidesecs() {
    showhidesec('battle');
    showhidesec('toWin');
    showhidesec('toDefend');
    showhidesec('toVisible');
    showhidesec('toTech');
}

function showhidesec(secname) {
    var sec = document.getElementById(secname);
    if (sec.style.display == 'none') {
        if (sec.tagName == 'TR') {
            sec.style.display = '';
        } else {
            sec.style.display = 'inline';
        }
    } else {
        sec.style.display = 'none';
    }
}
 REMOVING JS TEST - Replacing with smoother looking JS */
function setdefault() {
    defaultWT = parseInt(document.getElementById('default').value);
    document.getElementById('attws').value = defaultWT;
    document.getElementById('defws').value = defaultWT;
    document.getElementById('attws2').value = defaultWT;
    document.getElementById('defws2').value = defaultWT;
    document.getElementById('attws3').value = defaultWT;
    document.getElementById('defws3').value = defaultWT;
}

function battle() {
    var aws = parseInt(document.getElementById('attws').value);
    var aships = parseInt(document.getElementById('attships').value);
    var dws = parseInt(document.getElementById('defws').value) + 1;
    var dships = parseInt(document.getElementById('defships').value);
    var results = '<div class="resultsText clearFix"><span style="font-weight: bold;">Results:</span> ';

    while (dships > 0 && aships > 0) {
        aships -= dws;
        if (aships > 0) {
            dships -= aws;
        }
    }

    if (dships > 0) {
        dws -= 1;
        results += 'Defender wins with ' + dships + ' ships remaining.</div>';
        results += ' <button type="button" class="btn-s" onclick="newdef(' + dships +
            ');">Battle for this star</button>';
        results +=
            '<button type="button" class="btn-s" onclick="xferwin(' + dws + ',' + dships +
            ');">Ships to Win</button>';
        results += ' <button type="button" class="btn-s" onclick="xferdefend(' + dws + ',' + dships + ');">Ships to Defend</button>';
    } else {
        results += 'Attacker wins with ' + aships + ' ships remaining.</div>';
        results += ' <button type="button" class="btn-s" onclick="newatt(' + aws + ',' + aships +
            ');">Battle at this star</button>';
        results += ' <button type="button" class="btn-s" onclick="newbattle(' + aships +
            ');">Battle for this fleet</button>';
        results += '<br>' +
            '<button type="button" class="btn-s" onclick="xferwin(' + aws + ',' + aships +
            ');">Ships to Win</button>';
        results += ' <button type="button" class="btn-s" onclick="xferdefend(' + aws + ',' + aships + ');">Ships to Defend</button>';
    }
    document.getElementById('battle_results').innerHTML = results;
}

function newdef(dships) {
    document.getElementById('defships').value = dships;
    // document.getElementById('attws').value = '1';
    document.getElementById('attws').value = defaultWT;
    document.getElementById('attships').value = '1';
    document.getElementById('attws').focus();
    document.getElementById('attws').select();
}

function newatt(aws, aships) {
    document.getElementById('defws').value = aws;
    document.getElementById('defships').value = aships;
    // document.getElementById('attws').value = '1';
    document.getElementById('attws').value = defaultWT;
    document.getElementById('attships').value = '1';
    document.getElementById('attws').focus();
    document.getElementById('attws').select();
}

function newbattle(aships) {
    // document.getElementById('defws').value = '1';
    document.getElementById('defws').value = defaultWT;
    document.getElementById('defships').value = '0';
    document.getElementById('attships').value = aships;
    document.getElementById('defws').focus();
    document.getElementById('defws').select();
}

function xferwin(ws, ships) {
    document.getElementById('defws2').value = ws;
    document.getElementById('defships2').value = ships;
    // document.getElementById('attws2').value = '1';
    document.getElementById('attws2').value = defaultWT;
    document.getElementById('attws2').focus();
    document.getElementById('attws2').select();
}

function xferdefend(ws, ships) {
    // document.getElementById('defws3').value = '1';
    document.getElementById('defws3').value = defaultWT;
    document.getElementById('attws3').value = ws;
    document.getElementById('attships3').value = ships;
    document.getElementById('defws3').focus();
    document.getElementById('defws3').select();
}

function increment(field, amt) {
    var val = parseInt(document.getElementById(field).value);
    if (!isNaN(val) && val + amt >= 0) {
        document.getElementById(field).value = val + amt;
    }
}

function sciinc(field, amt) {
    var val = parseInt(document.getElementById(field).value);
    if (!isNaN(val)) {
        if (val < 145 && amt == -1) {
            document.getElementById(field).value = 144;
        } else if (val < 144 && amt == 1) {
            document.getElementById(field).value = 144;
        } else if (amt == 1) {
            // Round down to even divisor, then add one and multiply by 144.
            //alert(val + ' ' + Math.floor(val/144) + ' ' + (Math.floor(val/144) + 1) * 144);
            document.getElementById(field).value = (Math.floor(val / 144) + 1) * 144;
        } else if (val % 144 != 0 && amt == -1) {
            //alert(val + ' ' + Math.floor(val/144) + ' ' + (Math.floor(val/144) - 1) * 144);
            document.getElementById(field).value = (Math.floor(val / 144)) * 144;
        } else if (amt == -1) {
            document.getElementById(field).value = (Math.floor(val / 144) - 1) * 144;
        }
    }
}

function toAttack() {
    var aws = parseInt(document.getElementById('attws2').value);
    var dws = parseInt(document.getElementById('defws2').value) + 1;
    var dships = parseInt(document.getElementById('defships2').value);
    var results = '<div class="resultsText clearFix"><span style="font-weight: bold;">Results:</span> ';

    //Thought this was working, but it doesn't.
    //(Try DWS 10, DS 14, AWS 11.  It gives 12, but the correct answer is 23.
    //var aships = (dws * Math.round(dships / aws)) + 1;

    var aships = 1;
    while (dships > 0) {
        aships += dws;
        dships -= aws;
    }

    results += 'Attacker needs ' + aships + ' ships to win.</div>';
    document.getElementById('attack_results').innerHTML = results;
}

function toDefend() {
    var aws = parseInt(document.getElementById('attws3').value);
    var dws = parseInt(document.getElementById('defws3').value) + 1;
    var aships = parseInt(document.getElementById('attships3').value);
    var results = '<div class="resultsText clearFix"><span style="font-weight: bold;">Results:</span> ';

    var dships = 1;
    while (aships > 0) {
        aships -= dws;
        if (aships > 0) {
            dships += aws;
        }
    }

    results += 'Defender needs ' + dships + ' ships to win.</div>';
    document.getElementById('defend_results').innerHTML = results;
}

function toVisible() {
    var d = parseFloat(document.getElementById('dist').value);
    var sr = parseInt(document.getElementById('defscan').value) + 2;
    var results = '<div class="resultsText clearFix"><span style="font-weight: bold;">Results:</span> ';

    var t = 0;
    while (d > sr) {
        d -= 0.33;
        t += 1;
        /* alert(t + ': ' + d + ' ?= ' + sr); */
    }

    results += 'Defender will see attacker in approximately ' + t + ' ticks.</div>';
    document.getElementById('visible_results').innerHTML = results;
}

function toTech() {
    var ct = parseInt(document.getElementById('currtech').value);
    var gt = parseInt(document.getElementById('goaltech').value);
    var p = parseInt(document.getElementById('prog').value);
    var sci = parseInt(document.getElementById('science').value);
    var results = '<div class="resultsText clearFix"><span style="font-weight: bold;">Results:</span> ';

    var g = 0;
    while (ct < gt) {
        g += ct++ * 144;
    }

    var t = 0;
    while (p < g) {
        p += sci;
        t += 1;
    }

    results += 'Goal tech level will be obtained in ' + t + ' ticks</div>';
    if (t > 24) {
        var d = (t / 24);
        results += ' (' + d.toFixed(2) + ' cycles)'
    }
    if (p > g) {
        p = p - g;
        results += ' with ' + p + ' extra units.';
    } else {
        results += '.';
    }
    document.getElementById('tech_results').innerHTML = results;
}

