const express = require('express');
const path = require('path');

let intitial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(intitial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(intitial_path, "index.html"))

})

app.listen("3000", () => {
    console.log("Am Working!")
})