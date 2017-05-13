Rest API Scoreboard
===================

## Mini-Capstone Proposal
API that stores and retrieves user scores.
Frontend is already built aside from implementation of hooks to a backend and scoreboard interface.

## Technologies

Frontend | Backend
----- | ---
React js, GSAP, AJAX | Django or Flask Rest API
HTML, CSS | database: mongoDB or sql


### Jason 
var: |  value
------ | ---
user: | string("user")
games: | number(of_games)
gamelist: | list[string(number), string(number)] 
game: | [(t,[(x,y)]),(t,[(x,y)])] 
game: |  list[tuple(timestamp,list[tuple(x,y),...])]
game: | [(timestamp, [(x, y),(x, y),...(x, y)]),(timestamp, [(x, y),(x, y),...(x, y)]),(timestamp, [(x, y),(x, y),...(x, y)]),(timestamp, [(x, y),(x, y),...(x, y)])]

```python
timestamp = number(time(duration_in_game_measurement(0)))
coin_0 = (x, y) 
coin_1 = (x, y) 
# ... 12 coins
coin_11 = (x, y)
measurement = [coin_0, coin_1, ..., coin_12]
game = [(timestamp, measurement), ... (timestamp, measurement)]
user_jason = {usergame[game_num]: game}

```
 

## APP FLOW

### When User Saves
```sequence
user->app: Open
app->user: show initialized game
Note over app: user has account?
app->api: request user state         
api->db: request user info     
db->api: retrieve user data    
db->api: retrieve high scores
api->app: retrieve user state
Note over app: sync state (?)
api->app: retrieve high scores
user->app: play game until end
app->user: show high scores
app->user: save score?
user->app: enter name if not a user
user->app: save
app->api: save user and game
api->app: confirm
app->user: show results
app->user: new game
app->user: or replay scores
```

### When User Observes
```sequence
user->app: Open
app->user: show initialized game
Note over app: user has account?
app->api: request user state          
api->db: request user info     
db->api: retrieve user data    
db->api: retrieve high scores     
api->app: retrieve user state
Note over app: sync state (?)
api->app: retrieve high scores
user->app: search users
app->api: request users
api->db: request users
db->api: retrieve users
api->app: retrieve users
app->user: show users
user->app: select user
app->api: request user games
api->db: request user games
db->api: retrieve games
api->app: retrieve games
app->user: show games
user->app: select game
app->user: show game replay
```



[TOC]