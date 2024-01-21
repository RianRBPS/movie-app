# Movies reviews API


## For developers

### Setup


#### package.json

- Iniate your project as a npm package with `npm init -y` in the root folder
- Expect to have a `package.json` file added to the project root.

### Installing dependencies

- Depencies can be installed with `npm install {dependency name}` or `npm install --save-dev {dependency name}`
- Note that a `node_modules` folder will be added to the root folder. To avoid having this folder going to your repository, add it to your `.gitignore` file.

```
node_modules/
.env
```

#### dotenv & .env

- Install `dotenv` module to the project with `npm i dotenv`
- Enable dotenv in the project

```
import dotenv from "dotenv";
dotenv.config();
```

Create `.env` file
```
MONGO_USERNAME = {your mongodb username}
MONGO_PASSWORD = {your mongodb senha}
```

#### Nodemon

Nodemon is a tool that restart the server upon any changes avoiding the developer to have to to it manually. 

- Install nodemon with `npm i nodemon`
- Add a script to `package.json`

```
...
"scripts": {
  ...
  "dev": "nodemon index.js"
},
...
```
- Start the server with nodemon using `npm run dev`


#### REST Client extensions

- Install `REST Client` extension in VSCODE
- Add a `restclient.http` file to the backend root
- Add the requests in this file
- Click on send request 


