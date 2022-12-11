


![habitmakr landing page](https://i.imgur.com/v6oeQfq.gif)



Live site link: [here](https://habitmakr.herokuapp.com/)

This group project was made as part of our learning in the General Assembly Software Engineering Flex Immersive Course. 

## Technologies used
Javascript, AJAX, NodeJS, ExpressJS, PostgreSQL client, PostgresQL

## Approach taken
Habitmakr is a single page app that helps encourage a user to make habits based on small achievable steps. 

The app builds upon concepts derived from Atomic Habits, a popular self-help guide developed by James Clear; on the belief that small, incremental, everyday routines compound into massive, positive change over time.

Users begin by signing up to an account, and choosing some small tasks to incorporate into their routine. 

The app then displays daily/weekly/monthly progress in a variety of statistics and graphs. 


![flow of habitmakr page](https://i.imgur.com/kPtkAvE.gif)

## Installation instructions

In PostgresQL: 

    CREATE DATABASE habit_tracker;

  

In the terminal:

  

    psql -d habit_tracker < schema.sql
    psql -d habit_tracker < seed.sql
    npm install express
    npm install nodemon
    npm install pg 
    npm install express-sessiom
    npm start // or npm run start:dev


## Installation instructions (if database has changed)
Locally: 


    psql -d habit_tracker < schema.sql
    psql -d habit_tracker < seed.sql

	
Then restart local server:

    npm start

On Heroku: 

Reset database (deletes ALL data):

```
heroku pg:reset
```

Copy local database to the Heroku database:
```
heroku pg:push habit_tracker DATABASE_URL
```

## Unsolved problems
