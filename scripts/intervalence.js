//Copyright 2018 Meadow Hill Software. Some rights reserved.
//Affero GPL 3 or Later

"use strict";
var oIntervalence = {};

oIntervalence.addMainEventListeners = function() {
    $('#all-2nds')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-3rds')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-4ths')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-5ths')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-6ths')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-7ths')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-9ths')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-compound')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-intervals')
        .on('click', oIntervalence.handleButtonClick);
    $('#all-simple')
        .on('click', oIntervalence.handleButtonClick);
    $('#augmented-4th')
        .on('click', oIntervalence.handleButtonClick);
    $('#augmented-5th')
        .on('click', oIntervalence.handleButtonClick);
    $('#augmented-9th')
        .on('click', oIntervalence.handleButtonClick);
    $('#clear-button')
        .on('click', oIntervalence.handleButtonClick);
    $('#diminished-5th')
        .on('click', oIntervalence.handleButtonClick);
    $('#diminished-7th')
        .on('click', oIntervalence.handleButtonClick);
    $('#enter-button')
        .on('click', oIntervalence.handleButtonClick);
    $('#major-2nd')
        .on('click', oIntervalence.handleButtonClick);
    $('#major-3rd')
        .on('click', oIntervalence.handleButtonClick);
    $('#major-6th')
        .on('click', oIntervalence.handleButtonClick);
    $('#major-7th')
        .on('click', oIntervalence.handleButtonClick);
    $('#major-9th')
        .on('click', oIntervalence.handleButtonClick);
    $('#major-13th')
        .on('click', oIntervalence.handleButtonClick);
    $('#minor-2nd')
        .on('click', oIntervalence.handleButtonClick);
    $('#minor-3rd')
        .on('click', oIntervalence.handleButtonClick);
    $('#minor-6th')
        .on('click', oIntervalence.handleButtonClick);
    $('#minor-7th')
        .on('click', oIntervalence.handleButtonClick);
    $('#minor-9th')
        .on('click', oIntervalence.handleButtonClick);
    $('#perfect-4th')
        .on('click', oIntervalence.handleButtonClick);
    $('#perfect-5th')
        .on('click', oIntervalence.handleButtonClick);
    $('#perfect-11th')
        .on('click', oIntervalence.handleButtonClick);
};

oIntervalence.handleButtonClick = function(event) {
    event.stopPropagation;
    var target = $(event.target);
    var sId = target.attr('id');
    console.log(sId);
};

oIntervalence.addMainEventListeners();
