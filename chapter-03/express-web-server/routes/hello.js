'use strict'
const router = require('express').Router()

const hello = `
<html>
<head>
    <style>
        body {background: #333; margin: 1.25rem}
        h1 {color: #eee; font-size: 2rem; font-family: sans-serif}
    </style>    
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
`

router.get('/', (req, res) => {
  res.send(hello)
})

module.exports = router
