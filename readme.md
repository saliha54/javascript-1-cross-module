
### Javascript 1


3 pages
* a main landing page that links to the other two
* a team page
* a calculator

---

**Week 1**

* **Landing page**: `console.log` *project* object with `"name"`, `"link"` & `"description"` of website the team is going to recreate
* **Team page**: 
  * data: team name, array of members
  * print team name, print team members array, function that does both
* **Calculator page**: `console.log` array of numbers (`strings`)
  * data: var a, var b
  * button to call add, subtract, multiply, divide

### index.html:

| __a user can ...__ | _html_ | _functions_ | _data_ |
| --- | --- | --- | --- |
| _visit the home page_ | a project h1 and some greetings, script tag | none | none |
| _print project details to the console_ | a button with onclick attribute | print_deets: takes in an object and prints it | project object with 3 properties: name (string), link (string), description (string) |
| _navigate to the team page_ | relative link to team.html | none | none |
| _navigate to the calculator_ | relative link to calc.html | none | none |

### team.html:

| __a user can ...__ | _html_ | _functions_ | _data_ |
| --- | --- | --- | --- |
| _visit the team page_ | script tag, h1, greeting | none | none |
| _navigate back to home_ | relative link to index.html | none | none |
| _print team name to the console_ | button with onclick attribute | print_team_name: take a string as an argument and logs it in a greeting | team_name variable, string. |
| _print team members to the console_ | button with onclick attribute | print_team_members: takes an array, prints something like "your team members:", then prints the array | an array of team member names (strings) |
| _print a complete introduction to the console_ | button with onclick attribute | introduce: takes a string and an array, calls the team name function with the string, and the team members function with the array | none |

### calc.html:

| __a user can ...__ | _html_ | _functions_ | _data_ |
| --- | --- | --- | --- |
| _visit the calculator_ | script tag, h1, greeting | none | none |
| _navigate to home page_ | relative link to index.html | none | none |
| _print array of numbers to console_ | button with onclick | print_numbers: takes in an array and logs it | array of numbers |

---

**Week2**

* **Landing page**: Call a function that **Loops** the *project* object with name, link & description of the website the team is going to recreate
* **Team page**: Call a function that **Loops** the array of team members and logs every name
* **Calculator page**: Call a function that **Loops** the array of numbers and calculates the total sum

---

**Week3**

* **Team page**: Create a function called `addTeamMember` that takes a name, age and profession, creates an object of that team member and adds the team member object to an array.
* **Calculator page**: Create different functions called `sum`, `subtract`, `multiply` & `divide` that each loop every number in the array and perform their operation
