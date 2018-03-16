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

oIntervalence.uncheckSimple = function() {
    $('#all-simple').prop('checked', false);
    $('#all-intervals').prop('checked', false);
};

oIntervalence.handleCheckbox = function(event) {
    event.stopPropagation;
    var target = $(event.target);
    var sId = target.attr('id');
    if (sId === "all-2nds") {
        if (target.is(':checked')) {
            $('#major-2nd').prop('checked', true);
            $('#minor-2nd').prop('checked', true);
        } else {
            oIntervalence.uncheckSimple();
        }
    } else if (sId === "all-3rds") {
        if (target.is(':checked')) {
            $('#major-3rd').prop('checked', true);
            $('#minor-3rd').prop('checked', true);
        }
    } else if (sId === "all-4ths") {
        if (target.is(':checked')) {
            $('#augmented-4th').prop('checked', true);
            $('#perfect-4th').prop('checked', true);
        }
    } else if (sId === "all-5ths") {
        if (target.is(':checked')) {
            $('#augmented-5th').prop('checked', true);
            $('#diminished-5th').prop('checked', true);
            $('#perfect-5th').prop('checked', true);
        }
    } else if (sId === "all-6ths") {
        if (target.is(':checked')) {
            $('#major-6th').prop('checked', true);
            $('#minor-6th').prop('checked', true);
        }
    } else if (sId === "all-7ths") {
        if (target.is(':checked')) {
            $('#diminished-7th').prop('checked', true);
            $('#major-7th').prop('checked', true);
            $('#minor-7th').prop('checked', true);
        }
    } else if (sId === "all-9ths") {
        if (target.is(':checked')) {
            $('#augmented-9th').prop('checked', true);
            $('#major-9th').prop('checked', true);
            $('#minor-9th').prop('checked', true);
        }
    } else if (sId === "all-simple") {
        if (target.is(':checked')) {
            $('#major-2nd').prop('checked', true);
            $('#minor-2nd').prop('checked', true);
            $('#major-3rd').prop('checked', true);
            $('#minor-3rd').prop('checked', true);
            $('#augmented-4th').prop('checked', true);
            $('#perfect-4th').prop('checked', true);
            $('#augmented-5th').prop('checked', true);
            $('#diminished-5th').prop('checked', true);
            $('#perfect-5th').prop('checked', true);
            $('#major-6th').prop('checked', true);
            $('#minor-6th').prop('checked', true);
            $('#diminished-7th').prop('checked', true);
            $('#major-7th').prop('checked', true);
            $('#minor-7th').prop('checked', true);
        }
    }
    console.log(sId);
};

oIntervalence.addMainEventListeners();
