
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

| __index.html__  | html | functions | data |
| --- | --- | --- | --- |
| home page | a project h1 and some greetings, script tag | none | none |
| print project details | a button with onclick attribute | print_deets: takes in an object and prints it | project object with 3 properties: name (string), link (string), description (string) |
| team page | relative link to team.html | none | none |
| calc page | relative link to calc.html | none | none |

| __team.html__ | html | functions | data |
| --- | --- | --- | --- |
| team page | relative link to index.html, script tag | none | none |
| print team name | button with onclick attribute | print_team_name: take a string as an argument and logs it in a greeting | team_name variable, string. |
| print team members | button with onclick attribute | print_team_members: takes an array, prints something like "your team members:", then prints the array | an array of team member names (strings) |
| complete introduction | button with onclick attribute | introduce: takes a string and an array, calls the team name function with the string, and the team members function with the array | none |

| __calc.html__ | html | functions | data |
| --- | --- | --- | --- |
| calc page | relative link to index.html, script tag | none | array of numbers |
| print numbers | button with onclick | print_numbers: takes in an array and logs it | none |



**Week2**

* **Landing page**: Call a function that **Loops** the *project* object with name, link & description of the website the team is going to recreate
* **Team page**: Call a function that **Loops** the array of team members and logs every name
* **Calculator page**: Call a function that **Loops** the array of numbers and calculates the total sum

**Week3**

* **Team page**: Create a function called `addTeamMember` that takes a name, age and profession, creates an object of that team member and adds the team member object to an array.
* **Calculator page**: Create different functions called `sum`, `subtract`, `multiply` & `divide` that each loop every number in the array and perform their operation
