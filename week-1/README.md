# Week 1


* **Home page**:
    * _data_: **project** object with `"name"`, `"link"` & `"description"` of website the team is going to recreate
    * _functions_: `console.log` the project object
* **Team page**: 
    * _data_: team name, array of members
    * _functions_: print team name, print team members array, function that does both
* **Calculator page**: 
    * _data_: var a, var b
    * _functions_: add, subtract, multiply, divide


---

## Home Page (index.html):

| __a user can ...__ | _html_ | _functions_ | _data_ |
| --- | --- | --- | --- |
| _visit the home page_ | a project h1, some greetings, script tag | none | none |
| _print project details to the console_ | a button with onclick attribute that calls *print\_deets* with the project object | print_deets: takes in an object and prints it | project object with 3 properties: name (string), link (string), description (string) |
| _navigate to the team page_ | relative link to team.html | none | none |
| _navigate to the calculator_ | relative link to calc.html | none | none |

[TOP](#week-1)

---

## Team Page (team.html):

| __a user can ...__ | _html_ | _functions_ | _data_ |
| --- | --- | --- | --- |
| _visit the team page_ | h1, greeting | none | none |
| _navigate back to home_ | relative link to index.html | none | none |
| _print team name to the console_ | button with onclick attribute | print_team_name: take a string as an argument and logs it in a greeting | team_name variable, string. |
| _print team members to the console_ | button with onclick attribute | print_team_members: takes an array, prints something like "your team members:", then prints the array | an array of team member names (strings) |
| _print a complete introduction to the console_ | button with onclick attribute | introduce: takes a string and an array, calls the team name function with the string, and the team members function with the array | none |

[TOP](#week-1)

---

## Calculator Page (calc.html):

| __a user can ...__ | _html_ | _functions_ | _data_ |
| --- | --- | --- | --- |
| _visit the calculator_ | script tag, h1, greeting | none | none |
| _navigate to home page_ | relative link to index.html | none | none |
| _log `a` and `b`_ | button with onclick | print_vals: takes in `a` and `b`, logs them to the console | var a, var b.  both hardcoded numbers, you'll learn to change the values later |
| _add_ | button with onclick -> ```console.log(add(a, b));``` | add: takes in a & b, adds them, returns the result | none |
| _subtract_ | button with onclick -> ```console.log(subtract(a, b));``` | subtract: takes in a & b, subtracts them, returns the result | none |
| _multiply_ | button with onclick -> ```console.log(multiply(a, b));``` | multiply: takes in a & b, multiplies them, returns the result | none |
| _divide_ | button with onclick -> ```console.log(divide(a, b));``` | divide: takes in a & b, divides them, returns the result | none |

[TOP](#week-1)

___
___
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg" width="100" height="100"></img></a>
