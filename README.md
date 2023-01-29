# EventTrackerProject
| HTTP Verb | URI                           | Request Body/Path Variable                             | Response Body                                    |
|-----------|-------------------------------|-------------------------------------------------------|----------------------------------------------------------------------|
| GET       | `/api/games`                  |                                                       | JSON of `List<Game>`                            |
| GET       | `/api/games/{gameId}`              | Path Variable: `game` ID                              | JSON of `game` 1                                       |
| POST      | `/api/games/created`                  | Request Body: JSON of a new `game`                    | JSON of created `game`                                  |
| PUT       | `/api/games/{gameId}`              | Request Body: JSON of updated `Game` with ID 2        | JSON of updated `Game`                                  |
| DELETE    | `/api/games/{gameId}`             | Path Variable: `game` ID                              |                                       |
| GET       | `/api/games/search/{keyword}` | Path Variable: Keyword in name or description of game | `List<Game>` of games with that keyword in the name or description |


This is the beginning of a project where you would be able to keep a log of games that you own, their description, the minimum number of players that you can play with the game, and the maximum number of players. At first this project was created using a RESTful API where we tested the endpoints in Postman, where we could perform full CRUD. This week I added a Javascript Single Page Application front-end where you can send asynchronous request to Java controllers with Javascript's XMLHttpRequest where it parses the JSON response and sends it to the Document Object Model.
The application you are able to view a list of games. When you click on one of the games it then populates the information in a new div. Here you have the option to either delete the game or update it.
In the next div you are able to create a new game with a name, description, player minimum and player maximum. It is then added to the game list where you can click on it and view the information.
Next section you are able to search by a keyword in the game's description. For example: if you search the term "party" then Mario Party will be returned with the description, player minimum and maximum.
For the data aggregation portion of the homework, I added a feature where it will tell you the name of the game with the longest description. As you add new games, or change the description, it will update with the name of the game and it's total character count.

# Technologies Used
- REST
- SpringToolSuite
- Postman
- GitHub
- Terminal
- JSON
- Java
- SpringBoot
- Javascript
- VS Code
