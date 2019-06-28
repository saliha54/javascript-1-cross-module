
var printTeamName = document.getElementById("print-team-name");
printTeamName.onclick = function() {print_team_name(team_name);}

var printTeamMembers = document.getElementById("print-team-members");
printTeamMembers.onclick = function() {
                            print_team_members(team_members);
                          }

var printIntroduction = document.getElementById("print-introduction");
printIntroduction.onclick = function() {
                            introduce(team_name, team_members);
                          }
