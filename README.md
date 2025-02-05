# Dev-Tinder

Setting upo the web platform basic

- Create a Vite + React application
- Install Tailwind with vite
- Install Tailwind
- install daisy UI
- Add Nav Bar Component to app.jsx
- Create a seprate Navbar jsx file
- Install react Dom
- Create a BrowserRouter > Routes > Route = /Body > RouteChildren
- Crate a outlet in your Body Component
- Create a Footer with DaisyUI
- Create a login Page
- Install axios
- Install cors in teh background => add middleware to with configuration: origin, credentials : true
- Whenever youa re making your API call so pass axios => {withCredentials:true}

- Install redux Toolkit

Redux process :

1.Install Redux Toolkit + @reduxjs/toolkit
2.Configure Store
3.provider
4.Create slice and export properly
5.add reducer to store

- Add redux ddev tools in chrome
- login and see if the data is coming
- nav bar should update as soon as user login
- refactor code to add constant file + create a component Folder
- If token not present redirect user to login page
- Logout Feature
- Get teh feed and add the feed in teh sttore
- Build the usercard on feed
- Edit profile feature
- Show toast when edit is sucessfully done
- see all my connections page
- New page - see all connection
- New page - see all connection request
- feature - Accept/Reject connection Reques
- send and ignore connection request
- SignUp page

Deployment

signup on AWS

- Launc an instance
- chmod 400 "secret key"
- connect tot he machine using ssh command
- install the required software (node Version 22.12.0)
- git clone with the HTTPS of git of the respected pprojects

# Front End

- npm install dependencies -> npm install
- npm run build
- sudo apt update (Update the system)
- installing nginx ->sudon apt install nginx
- To start nginx -> sudo systemctl start nginx
- To enable nginx -> sudo systemctl enable nginx
- Copy code from dist folder(build files) to nginx http server (/var/www/html)
- copying the files from the build done in teh code from vscode to the target file -> sudo scp -r dist/\* /var/www/html

When you have http server og nginx it is deployed on port number 80

- Enable port :80 to make it work on the instance
  Go to securit group in the instance -> enable port 80 ->all 0 means access to anywhere from internet
