# NodeJS API with ExpressJS - Let' s Pokemon

This API is available on: [Heroku](https://backend-pokemon-fight-api.herokuapp.com/pokemons)

**Endpoints that are available with this application**

| HTTP Method | ENDPOINTS with {query params}             | Description                                          |
| :---------- | :---------------------------------------- | :--------------------------------------------------- |
| GET         | /pokemons                                 | retrieves all pokemons                               |
| GET         | /pokemons/:id                             | retrieves a pokemon by Id                            |
| GET         | /pokemons/:id/:info <- {name, base, type} | retrieves specific data of a pokemon based on its id |

Used data for creating the 3 routes: [jsonData](https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json)
