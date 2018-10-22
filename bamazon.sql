DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (
    id INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price NUMERIC(8,2) NOT NULL,
    stock_quantity INT(100) NOT NULL,
    PRIMARY KEY (id)
); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("red chair", "furniture", 20, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("blush", "makeup", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("iphone5", "electronics", 100, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("cat food", "pet", 15.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("candles", "home goods", 10, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("drill", "tools", 40, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("broom", "cleaning", 15, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("saw", "tools", 35, 278);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("flashlight", "hardware", 10, 26);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("mascara", "makeup", 5, 34);

-- INSERT INTO products (product_name)
-- VALUES("red chair"), ("blush"), ("iphone5"), ("cat food"), ("candles"), ("drill"), ("broom"), ("saw"), ("flashlight"), ("mascara"), ("paper towels"), ("screwdriver") ;

-- INSERT INTO products (department_name)
-- VALUES("furniture"), ("makeup"), ("electronics"), ("pet"), ("home goods"), ("tools"), ("cleaning"), ("tools"),("hardware"), ("makeup"), ("cleaning"), ("hardware");

-- INSERT INTO products (price)
-- VALUES("20"), ("10"), ("100"), ("15.50"), ("10"), ("40"), ("15"), ("35"), ("10"), ("5"), ("2.5"), ("7.50");

-- INSERT INTO products (stock_quantity)
-- VALUES("20"), ("100"), ("50"), ("200"), ("400"), ("45"), ("67"), ("278"), ("26"), ("34"), ("234"), ("326");