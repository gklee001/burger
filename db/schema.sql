DROP DATABASE IF EXISTS burgers_db;
Create DATABASE `burgers_db`.
USE burgers_db; 
Create TABLE  burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NOT NULL,
    devoured default false,
    PRIMARY KEY (id)
) 

