DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (45) NOT NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT DEFAULT 0,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Gala Apple", "Produce", .50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Bananas", "Produce", .25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Oranges", "Produce", .25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Bread", "Grocery", 3.49, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Peanut Butter", "Grocery", 3.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Almondmilk", "Dairy", 3.79, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Face Cleanser", "Beauty", 8.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Toothpaste", "Beauty", 5.50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Tylenol", "Pharmacy", 6.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Band-aids", "Pharmacy", 3.49, 10);
