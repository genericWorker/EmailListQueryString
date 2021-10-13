"use strict";

const $ = function(id) {
    return document.getElementById(id);
};
 
// Get value of a queryString parameter using the parameter key
const getQueryStringParmValue = (parmKey) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get(parmKey);
    console.log('parmKey/value' + parmKey + ':' + paramValue); 
    return paramValue; 
};

const confirmData = function() {
    $("confirm_form").submit(); 
}; 

window.onload = function() {
    $("firstName").innerHTML = 'First Name: ' + 
    getQueryStringParmValue("first_name"); 
    $("emailAddress").innerHTML = 'Email Address: ' + 
        getQueryStringParmValue("email_address1"); 
    $("confirmBtn").onclick = confirmData;   
};