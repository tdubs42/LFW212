# Creating a Web Server

## With Node Core...

This method is not recommended for creating servers, but we are going through it for learning purposes.

```bash
node -e "fs.mkdirSync('http-web-server')"
cd http-web-server
```
`fs.mkdirSync` is a built-in method for interacting with the file system and making directories synchronously 

`url.parse` is deprecated

