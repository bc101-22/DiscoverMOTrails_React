# DiscoverMOTrails_React

Currently all the JSON responses are located under http://localhost:8080/api/
POST, PUT, DELETE controllers are there for corresponding requests from the frontend.


## **The backend**
Droping/truncating some or all of the tables in the assigned schema may be required for the process to run.

	Get all trails:
		http://localhost:8080/api/trails
	Get trail with id 1:
		http://localhost:8080/api/trail?tid=1


	Get all bookmarks:
	* This endpoint exists for testing purpose, in the actual app currently users will only be able to see their own bookmarks
		http://localhost:8080/api/bookmarks
	Get bookmarks for user with id 1:
		http://localhost:8080/api/mybookmarks?uid=1

	Get all notes:
	* This endpoint exists for testing purpose, in the actual app currently users will only be able to see their own notes
		http://localhost:8080/api/allnotes
	Get notes for user with id 2:
		http://localhost:8080/api/mynotes?uid=2
	Get note with id 1:
		http://localhost:8080/api/note?nid=1
		
	Generate test data from the backend:
		1. Navigate to SecuritybackendApplication.java
		2. Use the React app to register for 2 users with the following emails:
		(Alternatively, you can adjust the .findByEmail() parameter to any email you want or the ones that already exist in the database)
			user@email.com
			user1@email.com
		3. Uncomment the code inside public void run(), start the application
		4. Comment out the code again to prevent generating duplicate records
    * Once you have the users registered, you can keep the user table and drop other ones if you need the re-generate the test data.
		(Apologies for the manual seeding process, hibernate create-drop is not working as expected on my machine atm)


## **The frontend:**
	currently hardcoded to user 2 for testing purpose - adjust the id in src/context/userContext.js to the user id you would like to use to make the request:
		const USER = new User(2, "Guest",      "",      false); // set to user with id 2

	If you run into the following error when starting the React server:
		Module not found: Can't resolve '@mui/material/Dialog' in 'C:\Users\workStation\Desktop\Java\liftoff\MergeBranch_working_copy\Team-Brittany\frontend\src\components\trail'
	Try to run this command to install the @mui package:
		npm install @mui/material @emotion/react @emotion/styled
		npm i @mui/x-data-grid --legacy-peer-deps

	Trails:
	Currently all users will be able to add, edit and delete a trail.
	* The title links are under construction and are currently not functional.
	* Still working on /traildetails/:id page
		http://localhost:3000/trails

	Bookmarks:
	User can view and delete their bookmarks.
	* Add bookmark will be implemented on the /traildetails/:id page
		http://localhost:3000/mybookmarks

	Notes:
	User can view, edit and delete their notes.
	* Add note will be implemented on the /traildetails/:id page
		http://localhost:3000/mynotes
	
  Comments:
  Under construction
  
## **Known Issues:**
	1. Currently users' full crenditial will be returned on some of the api endpoints, which is not ideal. Adding @JsonIgnore to the fields that contain sensitive data will prevent such behavior, but it will also break the registration function. Will look deeper into the issue once the core functions are finished.
	2. Currently users will be able to register with the exact same username, useremail and password.
	3. Having trouble retrieving user.id in the frontend to generate dynamic request urls.
	
