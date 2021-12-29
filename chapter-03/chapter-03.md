# Creating a Web Server

## With Node Core

This method is not recommended for creating servers, but we are going through it for learning purposes.
```bash
node -e "fs.mkdirSync('http-web-server')"
cd http-web-server
```
> `fs.mkdirSync` is a built-in method for interacting with the file system and making directories synchronously
> 
> `url.parse` is deprecated

## With Express.js

Most popular Node.js framework; particularly good for serving html dynamically
Uses an approach known as the `middleware pattern`
```bash
node -e "fs.mkdirSync('express-web-server')"
cd express-web-server
node -e "fs.mkdirSync('routes')"
node -e "fs.mkdirSync('bin')"
node -e "fs.openSync('app.js', 'w')"
cd routes
node -e "fs.openSync('index.js', 'w')"
node -e "fs.openSync('hello.js', 'w')"
cd ../bin
node -e "fs.openSync('www.js', 'w')"
cd ..
```
> `fs.openSync` is a built-in method interacting with the file system and individual files synchronously. Using the `w`
> flag tells node: open file for writing. 
> 
> The file is created (if it does not exist) or truncated (if it exists)

Then initiate npm and install packages
```bash
npm init -y
npm i express http-errors
```
Finally, add start script `"start": "node ./bin/www.js"`

This middleware should be the second-to-last registered. This stops any request that isn't a GET request and adds security
```ecmascript 6
app.use((req,res,next) => {
  if (req.method !== 'GET') {
    next(createError(405))
    return
  }
  next(createError(404))
})
```
In an Express app, the final middleware takes 4 params instead of 3, this is by design to trigger Express to recognize
this as the final middleware and final error handler.

```ecmascript 6
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})
/*
 Express offers special methods that auto-detect the Content-Type from 
 input, as well as potentially perform further operations
 res.status is used instead of res.statusCode and res.send is used instead 
 of res.end to ensure this is triggered by Express
*/
```
### `req.status` and `req.send` do not exist outside the Express ecosystem
> This 'decorator approach' to the Node API is frowned upon by many devs. "By conflating Node core APIs with Express APIs 
> on the same objects, the principles of least surprise and seperation of concerns are violated, while also causing 
> performance issues."


