# Hack Your Future cross module project

> During student feedback sessions the need for a project arose to be able to relate more to a realistic use case of the curriculum that is being learned.
 
#### Students often ask “Why do we learn / use this?”

This document aims to be a first draft into defining a **cross-module project** for Hack Your Future Belgium. This does not relate to the 6 week project at the end of the curriculum. Students will begin building this project starting the first week of the first module (HTML & CSS).


## Project goals


* Implement learned programming skills in a more realistic use case
* Learn about a project life cycle
* GIT related management
* Team work
* Better feeling with split between front-end and back-end

## Technology

* GIT (this project should have its own repo per team of students)
* HTML, CSS & Javascript
* React
* NodeJS & Express
* SQL


## Project description

* Small teams of 3 to 4 students
* Minimum 5 different web pages
* Landing page should have a header with images that change automatically
* "Team" page should have images of the team members with some information about that team member
* One of the web pages should be a contact form with proper validation, error handling & user feedback
* 2 web pages should fetch data from a remote server and perform basic CRUD operations
* One of the web pages can be a calculator
* Proper custom styling with CSS (no css framework allowed)
* All code must be properly formatted & commented
* All features / bugfixes must be developed on separate branches and merged into master by pull request.
* A pull request must be reviewed by the coach and 2 other team members

## Detailed checklist per module
### HTML & CSS

Website layout / design can be based on an existing website that the team will recreate. Students can also design their own website layout with a free wireframing tool.

* Pick existing website to recreate layout
* Setup clear folder structure
* Properly indent & space code
* Use HTML5 semantic elements
* Consistent naming CSS classes & IDs
* Re-use CSS classes
* Flexbox layout
* Responsive web pages
* Relative measurements (%, (r)em, vw, vh)

##### Project webpages to build during HTML & CSS module:

* **Landing page**
  * Menu to navigate to the "Team" page
  * Header with images that change automatically
  * Rebuild the landing page of the chosen website the team is going to recreate
* **Team page** 
  * Images of the team members 
  * Each team member should have some information about him/her
  * Each team member should have a link to their Github account
* **Calculator page**
  * 10 buttons with every number
  * 2 Input boxes
  * Result output

<br>
___
<br>

*The main guideline for writing proper Javascript is the 
[AirBnB styleguide](https://github.com/airbnb/javascript)*

### Javascript 1

**Week 1**

* **Landing page**: `console.log` *project* object with `"name"`, `"link"` & `"description"` of website the team is going to recreate
* **Team page**: `console.log` array of team members (`strings`)
* **Calculator page**: `console.log` array of numbers (`strings`)


**Week2**

* **Landing page**: Call a function that **Loops** the *project* object with name, link & description of the website the team is going to recreate
* **Team page**: Call a function that **Loops** the array of team members and logs every name
* **Calculator page**: Call a function that **Loops** the array of numbers and calculates the total sum

**Week3**

* **Team page**: Create a function called `addTeamMember` that takes a name, age and profession, creates an object of that team member and adds the team member object to an array.
* **Calculator page**: Create different functions called `sum`, `subtract`, `multiply` & `divide` that each loop every number in the array and perform their operation


<br>
___
<br>

### Javascript 2

**Week 1**

* **Landing page**: Change the image of the header when a user clicks on the image
* **Team page**: Rebuild the entire team page to render all HTML based on a list (array) of team members (objects). Split this into separate, clearly named, functions.
* **Calculator page**: 
  * Add sum, subtract, multiply & divide buttons
  * Make the calculator work by clicking the operation buttons

**Week2**

* **Team page**: 
  * Create a new array that contains all team members. Each team member (object) has a list of tasks and a total amount of hours studied. The tasks list is an array of objects that each have a description and a duration.
  * Calculate how much each team member has earned by multiplying the tasks with €20 (`map` / `reduce`)
  * Create a new list of `largeTasks` that consists of tasks that took longer than 2 hours.

**Week3**

* **Team page**: 
  * Create a function that takes a team member object, a callback to call if team member worked > 10 hours and a callback to call if team member worked =< 10 hours
  * Put a star next to team member name on the team page if that team member has worked > 10 hours

<br>
___
<br>

### Javascript 3

**Week 1**

* **Landing page**: Change the image of the header when a user clicks on the image
* **Team page**: Rebuild the entire team page to render all HTML based on a list (array) of team members (objects). Split this into separate, clearly named, functions.
* **Calculator page**: 
  * Add sum, subtract, multiply & divide buttons
  * Make the calculator work by clicking the operation buttons

**Week2**

* **Team page**: 
  * Create a new array that contains all team members. Each team member (object) has a list of tasks and a total amount of hours studied. The tasks list is an array of objects that each have a description and a duration.
  * Calculate how much each team member has earned by multiplying the tasks with €20 (`map` / `reduce`)
  * Create a new list of `largeTasks` that consists of tasks that took longer than 2 hours.

**Week3**

* **Team page**: List the number of contributions per team member by using the [Github API](https://developer.github.com/v3/guides/getting-started/)
* Create 2 other web pages that fetch data from an API your team finds interesting and render the data dynamically on their web pages

<br><br>

*The HackYourFuture curriculum is subject to CC BY copyright. This means you can freely use our materials, but just make sure to give us credit for it :)*