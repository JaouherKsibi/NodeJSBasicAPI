const express = require('express');//importation de la bib express 
const app = express();//creation de l'application express 
require("dotenv").config() //importation de la bib dotenv 
const port = process.env.PORT || port;// remplir port avec la variable port du fichier .env 




/*
    ******* connexion a la bdd
*/
const mongoose=require('mongoose')
mongoose.connect(process.env.database).then(()=>{console.log("successfully connected to database");}).catch(()=>{console.log("connection failed ");})

/**
 * body parser 
 */
 const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*
    ******* fin connexion a la bdd
*/

/**configuration du router */
const router=require('./router');

app.use('/crud',router); 

/**fin config router */
/*const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});*/
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
