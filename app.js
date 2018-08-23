const express = require('express');
const path = require('path');
const app = express(); // app is going to use express()

app.use(function (req , res, next) {
    console.log(`${req.method} request for ${req.url}`);
    next();//means move on
})// we want to use this

app.use(express.static('./public')); //express understands we're going to have html,css,js and img, first looking into public folder
//a way to inclide bootstrap css. node_modules bootstrap isn't in a public folder so have to get around like this
app.use('/jQuery', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js')));
// app.use('/bootstrapStyle', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css')));//goig to find bootstrapStyle and we can tell where to look.it's a static file. not going to change
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist'))); //another way to inclide link

// app.get('/', (req, res) => res.send('Hello World!')); // line for route.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');//send the files
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/about.html'); //still need to include page
})
// app.listen(3000, () => console.log('Example app listening on port 3000!'));

//set port diffrent way
app.set('port' , (process.env.PORT) || 3000); // 3000 or
app.listen (app.get('port'), function () {
 /// what happen when we get port
 console.log('Server is runnng on port' + app.get('port'));
})
