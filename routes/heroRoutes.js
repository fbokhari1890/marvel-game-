
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

