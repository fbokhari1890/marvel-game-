const db = require('../db/config.js');
const Hero = {};

Hero.findAll = () => {
  return db.query('SELECT location.location_name, hero.name, hero.realName , hero.description FROM hero INNER JOIN location ON hero.location_id = location.id');     
  //'SELECT * FROM quotes ORDER BY id ASC');
};



Hero.findById = id => {
  return db.query('SELECT * FROM hero where id = $1'[id]);
};


Hero.create = hero => {
  return db.one(
    `
    INSERt INTO hero
    (name, realname, location_id, description)
    VALUES($1,$2,$3,$4) RETURNING *
    `,
   [hero.name,hero.realname, hero.location_id, hero.description] 
  );
};

Hero.update = (hero, id) => {
  return db.none(
    
    `
     UPDATE hero SET 
     name = $1,
     realname = $2,
     location_id = $3,
     description = $4,
     WHERE ID = $4
    `, 

    [hero.name,hero.realname, hero.location_id, hero.description,id] 

     
  );
};


Hero.destroy = id => {
  return db.none(
    ` 
    DELETE FROM hero
    WHERE id = $1
    `,
    [id]
  );
};



module.exports = Hero;





