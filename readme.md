
### Javascript 1

ui is dom, output is console, reading sources

3 pages
* a main landing page that links to the other two
* a team page
* a calculator

**Week 1**

* **Landing page**: `console.log` *project* object with `"name"`, `"link"` & `"description"` of website the team is going to recreate
* **Team page**: 
  * data: team name, array of members
  * print team name, print team members array, function that does both
* **Calculator page**: `console.log` array of numbers (`strings`)
  * data: var a, var b
  * button to call add, subtract, multiply, divide

|   | html | functions | data |
| --- | --- | --- | --- |
| home page | index.html with some greetings | none | none |

|   | html | functions | data |
| team page | team.html.  relative links ind<->team, script tag | none | none |
| print team name | team.html. button with print_team_name onclick | print_team_name: name -> undefined. prints a string and name | var team_name; |
| print team members | button with print_team_members onclick | print_team_members: arr -> undefined. prints the members with forEach | var team_members; |
| complete introduction | button with introduce onclick | introduce: str, arr -> undefined. calls both previous functions | none |

|   | html | functions | data |
| calc page | calc.html.  relative links ind<->calc | none | none |



**Week2**

* **Landing page**: Call a function that **Loops** the *project* object with name, link & description of the website the team is going to recreate
* **Team page**: Call a function that **Loops** the array of team members and logs every name
* **Calculator page**: Call a function that **Loops** the array of numbers and calculates the total sum

**Week3**

* **Team page**: Create a function called `addTeamMember` that takes a name, age and profession, creates an object of that team member and adds the team member object to an array.
* **Calculator page**: Create different functions called `sum`, `subtract`, `multiply` & `divide` that each loop every number in the array and perform their operation
