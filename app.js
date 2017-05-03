//setting up express

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();





/* setting up port & listen */

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`listen on port${PORT}`);
});

/* setting static file */

app.use('/static', express.static(path.join(__dirname, 'public')));

/* setting index route */

app.get('/',function(req,res){
    res.send('howdy fella');
});

/* handling 404 */

app.get('*', function(req,res){
    res.status(404).send({message: 'NO CIGAR'});
});



// /* setting up express */
// const express = require('express');
// const path = require('path');
// const logger = require('morgan');
// const app = express();

// /* setting up port & listen */
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, function() {
//   console.log(`listening on port ${PORT}`);
// });

// /* setting static file */
// app.use('/static', express.static(path.join(__dirname, 'public')));
// /* setting up logging */
// app.use(logger('dev'));

// /* setting index route */
// app.get('/', function(req, res) {
//   res.send('hello world!');
// });

// /* handling 404 */
// app.get('*', function(req, res) {
//   res.status(404).send({message: 'Oops! Not found.'});
// });



