
# 🎞️ 🎥 Movie Awards 🎬 🍿

## Description
The annual Movie Awards is coming up and we need your help to nominate movies! The Movie Awards app allows users to easily search for their favorite movies from OMDB and nominate up to five films.

## Features
* React is used to create the application and the user interface components
    * Multiple useState hooks are utilized to access and update the state of movie searches and OMDB search results
    * A useEffect hook initially renders the page with any previously nominated movies from database
    * useState hooks are also used for validation to determine if buttons should be disabled or components should be hidden
* Mongoose used to query the MongoDB database
    * Route to nominate a movie
    * Route to remove a nominated movie from the nomination list
    * Route to get all nominated movies
* OMDB API is used to obtain movie information
    * The OMBD API returns information such as a movie's title, poster, year, and genre


## Built With
* [OMDB](http://www.omdbapi.com/) - RESTful API that provides movie information from the OMDB database
* [React.js](https://reactjs.org/) - a front-end JavaScript library for building user interfaces and UI components
* [Reactstrap](https://reactstrap.github.io/) - React framework used to build mobile responsive websites
* [MongoDB](https://www.mongodb.com/) - cross-platform document-oriented database program
* [Mongoose](https://mongoosejs.com/) - object data modeling (ODM) library for MongoDB and Node.js
* [Express](https://expressjs.com/) - backend web application framework for Node.js, for building web applications and APIs
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [JSX](https://reactjs.org/docs/introducing-jsx.html) - a syntax extension to JavaScript used in React to describe what a UI should look like
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - defines styling on the HTML page
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub
* [Heroku](https://heroku.com) - cloud platform for deploying application

## Deployed Link
[Movie Awards](https://shoppies-awards.herokuapp.com/) - See Live Site

## Usage
1. Enter a movie title and click "Search"
2. Search results are displayed in the Search Results section
3. Choose up to 5 movies to nominate for the Movie Awards
4. Click "Nominate" to nominate any of the movies you search. If the movie is already nominated, or if there are already 5 movies nominated, the button will be disabled.
5. To remove a movie from the nomination list, click the "Remove" button
6. Once 5 movies are nominated, a green banner will confirm your nomination list is complete

![Movie Awards](client/public/BeautyInsight.gif)

## Code
The below code demonstrates how a ternary operator is used for the nominated movie list. If no movies are nominated, it will render a p tag saying "No movies nominated yet". Otherwise, it will map through the nominated movies and display a card for each one.

          <Container>
            <h3 className="mt-5 header">Nominated Movies</h3>
            {
              !nominatedMovies.length ?
                <p>No movies nomiated yet</p> :
                (<>{
                  nominatedMovies.map(movie => {
                    return (
                      <NominationCard movie={movie} key={movie._id} reload={loadNominatedMovies} />
                    )
                  })
                }</>)
            }
          </Container>

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)

## Credits
* [pexels.com](https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80) - Image in jumbotron
