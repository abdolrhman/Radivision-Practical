# Flix Architecture

### 5 user stores

> three types of users, 
> - Admin
> - subscriber
> - visitor

1. A subscriber has a profile can login and access other subscribers profiles
2. A subscriber can view movies/series
3. A subscriber can bookmark A series or a movies
4. subscriber get a recommendation based on his history
5. admin add movies or series

> there could be other like (subscribe, sees other favorite, sees related movies and series, etc. )
 
### 5 features
1. user subscription
    - Create User and set role -> 20m
    - Create subscription -> 20 m
    - Payment integration -> depends on payment
2. user recommendation
   - view series / movie
   - like/dislike series / movie
3. user bookmark
   - user save movie/series in watch-later
   - user view's in movie/series above some limit
4. search
   - series/movies are categorized
   - which properties to search by
   - relations are webb established and defined
   
5. Login authentication
   - user passwords encrypted
   - user needs token -> JWT 
   - token expires after some time
   - user forget password
   - user needs verify email 


> login 
> - type: POST
> - URL: /users
> - Params : email/password

> profile
> - type: GET
> - URL: /users/{id}


> timeline
> - desc: shows most popular movies and series
> - type: GET
> - URL: /timeline

> search
> - desc: search movies, series, all media
> - type: GET
> - URL: /search?name=''&date=''&category='' etc...
> - Params : email/password

> Create media
> - desc: create a movie or series
> - type: POST
> - URL: /search?name=''&date='' etc...
> - Params : media properties
> - type of body form-data for files upload

> subscribe
> - desc: user subscribe
> - type: POST
> - URL: /subscribe
> params: integration third parties data

> access media
> - desc: it can be movie / series / ...
> - media/{id}
> - type: GET

> edit profile

> register

> like

> dislike

> add-favorite

> remove-favorite

> search history

> bookmark

> unsubscribe

> CRUD user, CRUD media, CRUD favorite and alot more ...
