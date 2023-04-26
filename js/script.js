// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function generates a response which indicates what discounts the user is eligible for, given age and day of the week.
 */

function DiscountCheck () {
  // initializing variables userAge(age), day (day of the week), and displayAns (what will be displayed based on age and day)
  let userAge = parseInt(document.getElementById('age').value);
  let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;

  let displayAns = "";


  

  // response for when the age is less than 5 or greater than 95
  if ((userAge < 5) || (userAge > 95)) {
    displayAns = "You get in for free! Thank you for using this tool!"
  }
    
  // response for when the user does not enter a day
  else if (day == "") {
    displayAns = "Please enter the day."
  }
    
  // response for when user age is between 12 and 21 or it is Tuesday or Thursday
  else if (((userAge > 12) && (userAge < 21)) || ((day == "Tuesday") || (day == "Thursday"))) {
    displayAns = "You get a student discount! Thank you for using this tool!"
  }
    
  // response for when user age does not qualify for any discounts and it is not Tuesday or Thursday
  else if ((userAge > 0) && ((day != "Tuesday") || (day != "Thursday"))) {
    displayAns = "You must pay the regular price. Thank you for using this tool!"
  }

  // response for when user does not enter an age
  else {
    displayAns = "Please enter your age."
  }

  // display response to user
  document.getElementById('response').innerHTML = displayAns
}
