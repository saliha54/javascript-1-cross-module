var printVal = document.getElementById("print_val");
var addVal = document.getElementById("add_val");
var subVal = document.getElementById("sub_val");
var multVal = document.getElementById("mult_val");
var divVal = document.getElementById("div_val");

printVal.onclick = function() {print_vals(num_1, num_2);}
addVal.onclick = function() {do_math(num_1, num_2, add);}
subVal.onclick = function() {do_math(num_1, num_2, subtract);}
multVal.onclick = function() {do_math(num_1, num_2, multiply);}
divVal.onclick = function() {do_math(num_1, num_2, divide);}
