/*   handlers  */

function details_button_handler() {
  print_deets(project);
}


/*   event listeners  */

var details_button = document.getElementById('print-details');
details_button.addEventListener('click', details_button_handler);

