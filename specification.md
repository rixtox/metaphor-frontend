# Functions
	User System with Privileged Groups
		- Groups
			/* (use configuration file instead)
			- Super Administrators
				- System Config
			*/
			- Administrators
				- Users Manage
			- Editors
				- Post Topics
			- Authors
				- Post Articles
		- Profile Page
			- List a user's workshop.
			- Consider a contribution graph like github

	Topic Management
		- If there is an event going to take place, a topic would be placed by 
			editors as an instruction for authors to write articles about.
		- For each topic there's a limit of number of images uploaded.
			(This limitation is configurable)

	Article Management
		- For each topic authors can submit their articles. Editors can comment,
			edit and approve their submissions. Authors can update their own
			works.
		- All articles and topics are under version control.

	Photo Management
		- Authors can also upload and manage photos in files or URLs.
		- Editors can approve the photos.

# Technologies
	- All text works are stored in database in markdown format.
	- A WYSIWYG web-editor is opened to public.
	- All pictures will be uploaded to rix's flickr account.
		(using API to upload and acquire external link.)

# API(v1.0)
	(prefix: /1)
	http://x.bgy.xxx/metaphor/1/xxxx/

	## Users
		- POST /user/create
		- POST /user/login
		- GET /user/logout
		- /user/:id
			- GET    info
			- POST   update
			- DELETE delete
		- GET /user  (list users)

	## Topics
		- /topic
			- GET		list topics
		- POST /topic/create
		- /topic/:id
			- DELETE 	delete
			- GET		get content
			- POST		update
		- POST /topic/:id/article/create
		- GET  /topic/:id/article
		- /topic/:id/article/:article_id
			- DELETE	delete
			- GET		get content
			- POST		update
		- POST /topic/:id/photo/create
		- GET  /topic/:id/photo
		- /topic/:id/photo/:photo_id
			- PUT		upload picture (return a URL to the link)
			- DELETE	delete
			- GET		get a photo directly

	## Admin
		- /admin (requires admin privilege)
			- POST /usergroup/create
			- GET  /usergroup   (list user groups)
			- /usergroup/:id
				- DELETE
				- POST
				- GET
			- GET /privileges


# Todo
	- Photograph topics
	- Message and notification system
	- Comment system on topics