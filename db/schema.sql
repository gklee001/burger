DROP DATABASE IF EXISTS burgers_db;
Create the `burgers_db`.
USE burgers_db; 
Create TABLE  burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
) 
