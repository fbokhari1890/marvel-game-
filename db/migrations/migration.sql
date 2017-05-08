\connect hero_table_2

CREATE TABLE IF NOT EXISTS location (
  id BIGSERIAL PRIMARY KEY,
  location_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS hero (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(8000),
  realName VARCHAR(8000),
  location_id INTEGER REFERENCES location(id),
  description TEXT 
);