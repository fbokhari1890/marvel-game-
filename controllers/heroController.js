const Hero = require('../models/heroModel');
const controller =   {};


controller.index = (req, res) => {
  Hero.findAll()
  .then(hero => {
    res.render('hero/hero-index', {
      documentTitle: 'Marvel Universe',
      heroData: hero,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};


controller.show = (req,res) => {
  Hero.findById(req.param.id)
    .then (hero => {
      res.render('hero/hero-single', {
         documentTitle: 'Marvel Universe',
         hero: hero,
      });
    })
    .catch(err=> {
      res.status (400).json(err);
    });
};

controller.create = (req,res) => {
  Hero.create({
    name: req.body.name,
    realname: req.body.name,
    location_name: req.body.location_name,
    image: req.body.image,
    description: req.body.description,
  })
      .then(hero=> {
        res.redirect('/hero');
  })
    .catch(err=> {
      res.status(400).json(err);
    });
};

controller.edit = (req, res) => {
  console.log('hello')
  Hero.findById(req.params.id) 
    .then(hero => {
    console.log(hero);
    res.render('hero/hero-edit',{
      documentTitle: 'Marvel Universe',
      hero:hero,
      id:req.params.id,
    });
  })
    .catch(err=>{
      console.log('hello im here');
      res.status(400).json(err);
    });
};


controller.update = (req,res) =>{
  Hero.update({
    name: req.body.name,
    realname: req.body.name,
    location_id: req.body.location_id,
    image: req.body.image,
    description: req.body.description,
  }, req.params.id)
    .then(hero=>{
      res.redirect('/hero');
    })
    .catch(err=>{
      res.status(400).json(err);
    });
  };

controller.destroy = (req,res)=> {
  Hero.destroy(req.params.id)
    .then(() =>{
      res.redirect('/hero');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;
