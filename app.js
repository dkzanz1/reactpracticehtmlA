//create apps and link to dirpath
const express = require ("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get('/',function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

console.log ("Express server running on server 3000");