/*   handlers  */

function set_new_member_handler() {
  var newMemberInput = document.getElementById('new-member-input');
  var newMember = newMemberInput.value;
  team_members.push(newMember);
}



function team_name_handler() {
  print_team_name(team_name);
}

function team_members_handler() {
  print_team_members(team_members);
}

function intro_handler(){
  introduce(team_name, team_members);
}

/*   event listeners  */

var set_new_member_button = document.getElementById('set-new-member');
set_new_member_button.addEventListener('click', set_new_member_handler);

var printTeamName = document.getElementById("print-team-name");
printTeamName.addEventListener('click',team_name_handler );

var printTeamMembers = document.getElementById("print-team-members");
printTeamMembers.addEventListener('click',team_members_handler );

var printIntroduction = document.getElementById("print-introduction");
printIntroduction.addEventListener('click', intro_handler);