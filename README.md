## Before start the project lets check the node version and npm version

To check node version
> node --v

To check the npm version
> npm -v

## server side app
To initialized the package.json file type the following command in <span style="color:blue">server-app</span> folder.

> npm init

It will ask you some question like app name, description, author, type all of these if you want.
Your <span style="color:blue">package.json</span> file is ready

Lets install the expressJs and others dependency. You can install theme together or seperately. I will install them together to save time.

> npm i express dotenv mongoose nanoid@3.0.0 cors

write code on server.js file to create a simple api app.
here is the most simplest example

```js client
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello World");
})

app.listen(port, () => { 
    console.log("The server is runing on port: " + port);
 })
```

## Install typescript and nodemon

> npm i typescript -D

> npm i nodemon -D

To create <span style="color:blue">typescript.config</span> file use this command

> npx tsc --init


## Add types for others packages
>npm i @types/express @types/cors @types/mongoose @types/node -D


When you run the npm run dev it might have show an error  like <span style="color:blue">MODULE_NOT_FOUND.</span>
To solve this issue create a file under the src folder named <span style="color:blue">*nodemon.json*</span> and write following code on it.

```
{
    "watch": ["src"],
    "ext": ".ts,.js", 
    "exec": "ts-node src/server.ts"
}
```

To work this we need to install another package.

> npm i ts-node -D