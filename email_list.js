"use strict";

var $ = function(id) {
    return document.getElementById(id);
};
 

const joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";

    // validate the entries
    if (emailAddress1 == "") {
    	errorMessage = "First email address entry required";
        $("email_address1").focus();
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";
    	$("email_address2").focus();
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
    	$("email_address2").focus();
    } else if (firstName == "") {
    	errorMessage = "First name entry required";
    	$("first_name").focus();
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    console.log('erroMessage' + errorMessage); 
    if (errorMessage == "") {
        $("email_form").submit(); 
    } else {
    	    alert(errorMessage);
    }
};

const clearForm = () => {
    // clear text boxes
    $("email_address1").value = "";
    $("email_address2").value = "";
    $("first_name").value = "";
/*
    // clear span elements
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*"; 
*/ 
    // set focus on first text box after resetting the form
    $("email_address1").focus();

};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("join_list").addEventListener("click", joinList);
    $("clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("email_address1").focus();
});
/* 
window.onload = function() {
    $("join_list").onclick = joinList;
 //   $("#clear_form").addEventListener("click", clearForm);
    $("email_address1").focus();
};
*/ 
