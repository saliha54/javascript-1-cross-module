/*   event listeners  */
function a_button_callback() {
  print_thing(a);
}
var a_button = document.getElementById('call-with-a');
a_button.addEventListener('click', a_button_callback);


function b_button_callback() {
  print_thing(b);
}
var b_button = document.getElementById('call-with-b');
b_button.addEventListener('click', b_button_callback);


function friendly_button_callback() {
  console.log('hi!');
}
var friendly_button = document.getElementById('friendly-one');
friendly_button.addEventListener('click', friendly_button_callback);