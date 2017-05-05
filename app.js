//setting up express

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

/* importing routes */

const heroRoutes = require('./routes/heroRoutes');




/* setting up port & listen */

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`listen on port${PORT}`);
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/* setting static file */

app.use('/static', express.static(path.join(__dirname, 'public')));



//errors logger
app.use(logger('dev'));

//setting bodyparsers to see sensible stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//setting up method override to do put and delete
app.use(methodOverride('_method'));

/* setting index route */

// starting the main root, telling it to render using views at folder views and using file index.ejs
app.get('/', function (req, res) {
 res.render('index', {
   documentTitle: 'Marvel Universe'
 });
});

/* using quote routes */
app.use('/hero', heroRoutes);

/* handling 404 */

app.get('*', function(req,res){
    res.status(404).send({message: 'NO CIGAR'});
});




