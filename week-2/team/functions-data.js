// data (variables)
var team_name = "COLORS";
var team_members = ["blue","green","pink","purple","yellow"];

// functions
function print_team_name(teamName) {
    console.log("Team name is "+teamName);
}
function print_team_members(teamMembers){
    console.log("Team members are ");
    for(let i=0; i<teamMembers.length ;i++){
        console.log(teamMembers[i]);
    }
}
function introduce(teamName, teamMembers){
    print_team_name(teamName);
    print_team_members(teamMembers);
}
