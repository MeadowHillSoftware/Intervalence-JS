//Copyright 2018 Meadow Hill Software. Some rights reserved.
//Affero GPL 3 or Later

"use strict";
var oIntervalence = {};

oIntervalence.addMainEventListeners = function() {
    $('#all-2nds')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-3rds')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-4ths')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-5ths')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-6ths')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-7ths')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-9ths')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-compound')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-intervals')
        .on('click', oIntervalence.handleCheckbox);
    $('#all-simple')
        .on('click', oIntervalence.handleCheckbox);
    $('#augmented-4th')
        .on('click', oIntervalence.handleCheckbox);
    $('#augmented-5th')
        .on('click', oIntervalence.handleCheckbox);
    $('#augmented-9th')
        .on('click', oIntervalence.handleCheckbox);
    $('#clear-button')
        .on('click', oIntervalence.handleClearButton);
    $('#diminished-5th')
        .on('click', oIntervalence.handleCheckbox);
    $('#diminished-7th')
        .on('click', oIntervalence.handleCheckbox);
    $('#enter-button')
        .on('click', oIntervalence.handleEnterButton);
    $('#major-2nd')
        .on('click', oIntervalence.handleCheckbox);
    $('#major-3rd')
        .on('click', oIntervalence.handleCheckbox);
    $('#major-6th')
        .on('click', oIntervalence.handleCheckbox);
    $('#major-7th')
        .on('click', oIntervalence.handleCheckbox);
    $('#major-9th')
        .on('click', oIntervalence.handleCheckbox);
    $('#major-13th')
        .on('click', oIntervalence.handleCheckbox);
    $('#minor-2nd')
        .on('click', oIntervalence.handleCheckbox);
    $('#minor-3rd')
        .on('click', oIntervalence.handleCheckbox);
    $('#minor-6th')
        .on('click', oIntervalence.handleCheckbox);
    $('#minor-7th')
        .on('click', oIntervalence.handleCheckbox);
    $('#minor-9th')
        .on('click', oIntervalence.handleCheckbox);
    $('#perfect-4th')
        .on('click', oIntervalence.handleCheckbox);
    $('#perfect-5th')
        .on('click', oIntervalence.handleCheckbox);
    $('#perfect-11th')
        .on('click', oIntervalence.handleCheckbox);
};

oIntervalence.aAll2ndBoxes = ['#major-2nd', '#minor-2nd'];

oIntervalence.aAll3rdBoxes = ['#major-3rd', '#minor-3rd'];

oIntervalence.aAll4thBoxes = ['#augmented-4th', '#perfect-4th'];

oIntervalence.aAll5thBoxes = [
    '#augmented-5th',
    '#diminished-5th',
    '#perfect-5th'
];

oIntervalence.aAll6thBoxes = ['#major-6th', '#minor-6th'];

oIntervalence.aAll7thBoxes = [
    '#diminished-7th',
    '#major-7th',
    '#minor-7th'
];

oIntervalence.aAll9thBoxes = [
    '#augmented-9th',
    '#major-9th',
    '#minor-9th'
];

oIntervalence.checkGroupBoxes = function() {
    var aAllSimple = [
        '#all-2nds',
        '#all-3rds',
        '#all-4ths',
        '#all-5ths',
        '#all-6ths',
        '#all-7ths'
    ];
    for(var b = 0; b < aAllSimple.length; b++) {
        var sId = aAllSimple[b];
        $(sId).prop('checked', true);
    }
};

oIntervalence.handleCheckbox = function(event) {
    event.stopPropagation();
    var target = $(event.target);
    var sId = target.attr('id');
    var oGlobal = oIntervalence;
    var oIntervals = oGlobal.oIntervals;
    var bValue = target.is(':checked');
    if (sId === "all-2nds") {
        oGlobal.setCheckedProperty(oGlobal.aAll2ndBoxes, bValue);
    } else if (sId === "all-3rds") {
        oGlobal.setCheckedProperty(oGlobal.aAll3rdBoxes, bValue);
    } else if (sId === "all-4ths") {
        oGlobal.setCheckedProperty(oGlobal.aAll4thBoxes, bValue);
    } else if (sId === "all-5ths") {
        oGlobal.setCheckedProperty(oGlobal.aAll5thBoxes, bValue);
    } else if (sId === "all-6ths") {
        oGlobal.setCheckedProperty(oGlobal.aAll6thBoxes, bValue);
    } else if (sId === "all-7ths") {
        oGlobal.setCheckedProperty(oGlobal.aAll7thBoxes, bValue);
    } else if (sId === "all-9ths") {
        oGlobal.setCheckedProperty(oGlobal.aAll9thBoxes, bValue);
    } else if (sId === "all-simple") {
        oGlobal.setCheckedProperty(oGlobal.aAll2ndBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll3rdBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll4thBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll5thBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll6thBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll7thBoxes, bValue);
        if (bValue === true) {
            oGlobal.checkGroupBoxes();
        }
    } else if (sId === "all-compound") {
        oGlobal.setCheckedProperty(oGlobal.aAll9thBoxes, bValue);
        $('#perfect-11th').prop('checked', bValue);
        oIntervals.bPerfect11th = bValue;
        $('#major-13th').prop('checked', bValue);
        oIntervals.bMajor13th = bValue;
        if (bValue === true) {
            $('#all-9ths').prop('checked', true);
        }
    } else if (sId === "all-intervals") {
        oGlobal.setCheckedProperty(oGlobal.aAll2ndBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll3rdBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll4thBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll5thBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll6thBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll7thBoxes, bValue);
        oGlobal.setCheckedProperty(oGlobal.aAll9thBoxes, bValue);
        $('#perfect-11th').prop('checked', bValue);
        oIntervals.bPerfect11th = bValue;
        $('#major-13th').prop('checked', bValue);
        oIntervals.bMajor13th = bValue;
        if (bValue === true) {
            $('#all-simple').prop('checked', true);
            $('#all-9ths').prop('checked', true);
            $('#all-compound').prop('checked', true);
            oGlobal.checkGroupBoxes();
        }
    } else {
        oGlobal.setCheckedProperty([sId], bValue);
    }
};

oIntervalence.handleClearButton = function(event) {
    event.stopPropagation();
    oIntervalence.uncheckAllBoxes();
};

oIntervalence.handleEnterButton = function(event) {
    event.stopPropagation();
    var sInterval = oIntervalence.selectInterval();
    var sFirst = sInterval.substr(0, 1);
    var sArticle = "a";
    var sQuality = "";
    var sQuantity = sInterval.substr(1);
    var sModifier = "th";
    if (sQuantity === "2") {
        sModifier = "nd";
    } else if (sQuantity === "3") {
        sModifier = "rd";
    }
    if (sFirst === "A") {
        sArticle = "an";
        sQuality = "Augmented";
    } else if (sFirst === "d") {
        sQuality = "diminished";
    } else if (sFirst === "m") {
        sQuality = "minor";
    } else if (sFirst === "M") {
        sQuality = "Major";
    } else if (sFirst === "P") {
        sQuality = "Perfect";
    }
    var sDirection = oIntervalence.selectDirection();
    var sQuestion = "What is " + sArticle + " " + sQuality + " ";
    sQuestion += sQuantity + sModifier + " " + sDirection;
    sQuestion += " from letter accidental?";
    $('#question')
        .empty()
        .text(sQuestion);
};

oIntervalence.oIntervals = {
    bMinor2nd: false,
    bMajor2nd: false,
    bMinor3rd: false,
    bMajor3rd: false,
    bPerfect4th: false,
    bAugmented4th: false,
    bDiminished5th: false,
    bPerfect5th: false,
    bAugmented5th: false,
    bMinor6th: false,
    bMajor6th: false,
    bDiminished7th: false,
    bMinor7th: false,
    bMajor7th: false,
    bMinor9th: false,
    bMajor9th: false,
    bAugmented9th: false,
    bPerfect11th: false,
    bMajor13th: false
};

oIntervalence.generateRandomNumber = function(iLength) {
    return Math.round(Math.random() * (iLength - 1));
};

oIntervalence.selectDirection = function() {
    var aDirections = ["down", "up"];
    var iIndex = oIntervalence.generateRandomNumber(2);
    return aDirections[iIndex];
};

oIntervalence.selectInterval = function() {
    var oIntervals = oIntervalence.oIntervals;
    var aIntervals = Object.keys(oIntervals);
    var aSelected = [];
    var aWords = [];
    var sQuantity = "";
    var sInterval = "";
    for (var i = 0; i < aIntervals.length; i++) {
        var sInterval = aIntervals[i];
        if (oIntervals[sInterval]) {
            sInterval = sInterval.substring(1);
            sInterval = sInterval.slice(0, -2)
            var sTwo = sInterval.substring(0, 2);
            if (sTwo === "Mi") {
                aWords = sInterval.split("Minor");
                sQuantity = aWords[1];
                sInterval = "m" + sQuantity;
            } else if (sTwo === "Ma") {
                aWords = sInterval.split("Major");
                sQuantity = aWords[1];
                sInterval = "M" + sQuantity;
            } else if (sTwo === "Pe") {
                aWords = sInterval.split("Perfect");
                sQuantity = aWords[1];
                sInterval = "P" + sQuantity;
            } else if (sTwo === "Au") {
                aWords = sInterval.split("Augmented");
                sQuantity = aWords[1];
                sInterval = "A" + sQuantity;
            } else if (sTwo === "Di") {
                aWords = sInterval.split("Diminished");
                sQuantity = aWords[1];
                sInterval = "d" + sQuantity;
            }
            aSelected.push(sInterval);
        }
    }
    var iIndex = oIntervalence.generateRandomNumber(aSelected.length);
    return aSelected[iIndex];
};

oIntervalence.setCheckedProperty = function(aBoxes, bValue) {
    for(var b = 0; b < aBoxes.length; b++) {
        var sId = aBoxes[b];
        $(sId).prop('checked', bValue);
        var sBoolean = sId.replace(/-/g, "");
        var sFirst = sBoolean.substring(1, 2);
        if (sFirst === "m") {
            sBoolean = sBoolean.replace(/#m/g, "bM");
        } else if (sFirst === "p") {
            sBoolean = sBoolean.replace(/#p/g, "bP");
        } else if (sFirst === "a") {
            sBoolean = sBoolean.replace(/#a/g, "bA");
        } else {
            sBoolean = sBoolean.replace(/#d/g, "bD");
        }
        oIntervalence.oIntervals[sBoolean] = bValue;
        if (bValue === false) {
            $('#all-intervals').prop('checked', false);
            var aWords = sId.split("-");
            var sInterval = aWords[1];
            var sAll = "#all-" + sInterval + "s";
            $(sAll).prop('checked', false);
            if (sInterval.length === 3) {
                var sQuantity = sInterval.substr(0, 1);
            } else {
                var sQuantity = sInterval.substr(0, 2);
            }
            var iQuantity = Number(sQuantity);
            if (iQuantity < 9) {
                $('#all-simple').prop('checked', false);
            } else {
                $('#all-compound').prop('checked', false);
            }
        }
    }
};

oIntervalence.uncheckAllBoxes = function() {
    var oGlobal = oIntervalence;
    oGlobal.setCheckedProperty(oGlobal.aAll2ndBoxes, false);
    oGlobal.setCheckedProperty(oGlobal.aAll3rdBoxes, false);
    oGlobal.setCheckedProperty(oGlobal.aAll4thBoxes, false);
    oGlobal.setCheckedProperty(oGlobal.aAll5thBoxes, false);
    oGlobal.setCheckedProperty(oGlobal.aAll6thBoxes, false);
    oGlobal.setCheckedProperty(oGlobal.aAll7thBoxes, false);
    oGlobal.setCheckedProperty(oGlobal.aAll9thBoxes, false);
    $('#perfect-11th').prop('checked', false);
    $('#major-13th').prop('checked', false);
};

oIntervalence.uncheckAllBoxes();
oIntervalence.addMainEventListeners();
