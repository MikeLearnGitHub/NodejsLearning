const userListCached = require('./data/users'); // require load file to cache
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/listUsers', (req, res, next) => {
    let userList = null;
    // read from file
    fs.readFile('./data/users.json', (err, data) => {
        userList = JSON.parse(data);
        // data is in buffer
        // use res.end(data) to send as normal response
        // use res.send(data) to send whole json file
        res.send(userList);
        next();
    })
});

app.get('/listUsersInCache', (req, res) => {
    console.log("listUsersInCache");
    res.end(userListCached);
})

const server = app.listen(8081, () => {
    console.log("server running on port 8081");
    console.log('users from require: ', userListCached);
})


