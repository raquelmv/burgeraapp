DROP DATABASE  burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Double Cheeseburguer', False);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon lovers', False);
INSERT INTO burgers (burger_name, devoured) VALUES ('Veggie Burger', False);
INSERT INTO burgers (burger_name, devoured) VALUES ('Monterrey Burger', False);
INSERT INTO burgers (burger_name, devoured) VALUES ('Crazy Burger', False);

SELECT * FROM burgers;