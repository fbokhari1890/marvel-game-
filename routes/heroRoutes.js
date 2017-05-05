// // 2 gets 
// // 1 post 
// // 1 delete


// // 1 render 


// const heroData = require('../db/hero.js');   

// // dont need the above line

// //====== in `routes/quoteRoutes.js` ======//

// /* get all quotes */

// heroRoutes.get('/', function (req,res){
//   res.send(heroRoutes);
// });

// // the above line will lose teh fucntion and controller.index to render your first page


// /* get individual quote */

// heroRoutes.get('/:id', function(req,res){
//   const id = req.params.id;
//   res.send(heroData[id])
// })



// module.exports = heroRoutes;


const express = require('express');
const controller = require('../controllers/heroController');
const heroRoutes = express.Router();

heroRoutes.get('/', controller.index);
heroRoutes.get('/add',(req,res)=>{
  res.render('hero/hero-add',{
    documentTitle: 'Marvel Universe',
  });
});
heroRoutes.get('/edit/:id',controller.edit);
heroRoutes.get('/:id', controller.show);
heroRoutes.post('/', controller.create);
heroRoutes.put('/:id', controller.update);
heroRoutes.delete('/:id', controller.destroy);


module.exports= heroRoutes;

