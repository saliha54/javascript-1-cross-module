/*   handlers  */

function print_val_handler() {
  print_vals(A,B);
}

function set_a_handler() {
  var new_a_input = document.getElementById('new-a-input');
  var new_a = new_a_input.value;
  A = Number(new_a);
}


function set_b_handler() {
  var new_b_input = document.getElementById('new-b-input');
  var new_b = new_b_input.value;
  B = Number(new_b);
}

function add_handler(){
  do_math(A, B, add);
}

function sub_handler(){
  do_math(A, B, subtract);
}

function mult_handler(){
  do_math(A, B, multiply);
}

function div_handler(){
  do_math(A, B, divide);
}
/*   event listeners  */

var printVal = document.getElementById("print_val");
printVal.addEventListener('click', print_val_handler);

var set_a_button = document.getElementById('set-a');
set_a_button.addEventListener('click', set_a_handler);

var set_b_button = document.getElementById('set-b');
set_b_button.addEventListener('click', set_b_handler);

var addVal = document.getElementById("add_val");
addVal.addEventListener('click', add_handler);

var subVal = document.getElementById("sub_val");
subVal.addEventListener('click', sub_handler);

var multVal = document.getElementById("mult_val");
multVal.addEventListener('click', mult_handler);

var divVal = document.getElementById("div_val");
divVal.addEventListener('click', div_handler );

