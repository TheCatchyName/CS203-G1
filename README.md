Hi guys just a note<br> 
i followed a course from udemy to get to this point but i rushed it so i don't understand every single thing<br>
but i believe its enough for what we want to do :D<br>

## HOW TO RUN
if you notice there are two main files frontend and restful-web-services 
## frontend 
is run using REACT so when u click on it there will be another README file explaining how to run it.
but basically just run 
### `npm start`

if it doesn't work try (in that order)
`npm cache clean --force`
`npm rebuild`
`npm install`
then run 
`npm start`

it should auto pop up, if it doesn't go to
*localhost:4200*

## restful-web-services 
this basically handles our API calls and when u run it<br>
it will open localhost:8080 BUT cuz i added some jwt thing so its encrypted for security reasons.
restful-web-services/src/com/myapp/rest/webservices/restfulwebservices/RestfulWebServicesApplication.java

### RestfulWebServicesApplication.java
when u get here, right click and *run java*

## check out the db 
After running the SPRING<br>
go to localhost:8080/h2-console
you'll see some login page 

![image](https://user-images.githubusercontent.com/69102738/130642725-31a43a69-2dc9-4a07-b2f9-77ba636b25ff.png)

kinda like that ^ make sure the JDBC URL: is exactly like that or it won't work 
 ### jdbc:h2:mem:testdb

when u get in its pretty self explanatory



