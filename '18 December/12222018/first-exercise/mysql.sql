DROP DATABASE IF EXISTS new_databaseDB;

CREATE DATABASE new_databaseDB;

USE new_databaseDB;

CREATE TABLE new_table (
  id INT NOT NULL AUTO_INCREMENT,
  text_field VARCHAR(60) NULL,
  PRIMARY KEY (id)
);

INSERT INTO new_table (text_field)
VALUES ("some random text");

INSERT INTO new_table (text_field)
VALUES ("some texttttt");

INSERT INTO new_table (text_field)
VALUES ("s'more text");

