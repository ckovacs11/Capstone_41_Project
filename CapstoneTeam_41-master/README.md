ASU SER 401-402: Fall 2020- Spring 2021 
Capstone Team 41: HR Support App
GitHub: https://github.com/PenelopeBenavidez/CapstoneTeam_41

# Team:
Penelope Benavidez - i.penelopekay@gmail.com

Ty Foster - tyfoster@outlook.com

Curtis Kovacs - curt.kovacs@gmail.com

Clay Speidel - clayspeidel@gmail.com

# Concept information:
Company: Chronos Works

Sponsor Name: Chuck Bean

Sponsor e-mail: cbean808@gmail.com

# Project Description:
## Overview:
We are looking for an app to be created from a manual process. There are two versions… sales and
general. There is a series of 18 questions that are ranked 1-9, with the resulting score manually plotted
on a graph. We then have 9 descriptors (in a report format) to identify the strengths and challenges of
the individual based on the plot. It is an observational process… having a manager complete the
assessment. It is clunky but effective. It can also allow for multiple raters to complete the questions also
to get a group view.
## Motivation:
This system has been in use for 10 years, but it is clunky and needs to be automated.
## Deliverables:
A working app to replace the manual system we currently use. Web based and mobile would be great
that spits out a two-three page profile on the individual being rated.
## Learning Experience:
This is going to be a freewheeling project. I have zero technical skills so it would have to be a team that
can look at the manual function and apply modern coding/design to make it a working app. As a result,
the students could choose to approach this in any manner.
## NDA / IPR Requirements:
NDA not required, but IPR would remain with Chronos Works.


# Using React App:
## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).


# Team Development Notes - 4/17/21
Original project plan can be found in the planning-docs folder - "SER 401 Project Plan.pdf"

# Database: MongoDB 
	new MongoDB login will be needed
	database API with express routes for web server needed
	needs mongoose integration and unit testing completed
# Backend: Typescript
	System Design Documentation can be found in the system-design folder
	needs db integration, frontend integration
	needs integration of sponsor provided documents for questions and results
	unit testing needs completion - notes left in test files
# Frontend: React
	planning and notes can be found in planning-docs > "UI Design.pdf"
	Working towards single page application that leaves the banner, header and footer but switches out main page based on user interaction
	Images are in public folder, tsx components and css are in src > ui and src > ui > components
	Needs integration with db and backend implementation
