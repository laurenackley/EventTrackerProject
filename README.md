# EventTrackerProject
| HTTP Verb | URI                           | Request Body/Path Variable                             | Response Body                                    |
|-----------|-------------------------------|-------------------------------------------------------|----------------------------------------------------------------------|
| GET       | `/api/games`                  |                                                       | JSON of `List<Game>`                            |
| GET       | `/api/games/{gameId}`              | Path Variable: `game` ID                              | JSON of `game` 1                                       |
| POST      | `/api/games/created`                  | Request Body: JSON of a new `game`                    | JSON of created `game`                                  |
| PUT       | `/api/games/{gameId}`              | Request Body: JSON of updated `Game` with ID 2        | JSON of updated `Game`                                  |
| DELETE    | `/api/games/{gameId}`             | Path Variable: `game` ID                              |                                       |
| GET       | `/api/games/player/min/{playerMin}`   | Path Variable: Games with number of minimum players   | JSON of `List<Game>` that can support that many players           |
| GET       | `/api/games/search/{keyword}` | Path Variable: Keyword in name or description of game | `List<Game>` of games with that keyword in the name or description |


This is the beginning of a project where you would be able to keep a log of games that you own, their description, the minimum number of players that you can play with the game, and the maximum number of players. So far the game entity is mapped to a rest API with the above endpoints. So far it does not have a user interface, but it is able to be tested in Postman.

# Technologies Used
- REST
- SpringToolSuite
- Postman
- GitHub
- Terminal
- JSON
- Java
- SpringBoot
