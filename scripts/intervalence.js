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
        $('#major-13th').prop('checked', bValue);
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
        $('#major-13th').prop('checked', bValue);
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
