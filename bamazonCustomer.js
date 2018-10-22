var mysql = require("mysql");
var inquirer = require("inquirer");

// connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // port; if not 3306
  port: 3306,

  // username
  user: "root",

  // password
  password: "meowmix32",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  productCart();
});

function productCart() {
    //query the database for all the items
    connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err;
        console.log(results);
        //list of items to show user then prompt user for purchase
        inquirer
         .prompt([
            {
                name: "item",
                type: "input",
                message: "Id number of the product to purchase:"
            },
            {
                name: "units",
                type: "input",
                message: "Number units would you like to buy:"
            }
        ])
        .then(function(answer) {
            // get the info for the choosen item
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].id === parseInt(answer.item)) {
                    chosenItem = results[i];
                }
            }
            //console.log(chosenItem);
            //determine the availility
            if (chosenItem.stock_quantity > parseInt(answer.units)) {
                var changedstock = chosenItem.stock_quantity - answer.units;
                var total = answer.units * chosenItem.price;
                // update database quanity
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: changedstock
                        },
                        {
                            id: chosenItem.id
                        }
                    ],
                    // function(error) {
                    //     if (error) throw err;
                    //     console.log("An error has occured");
                    // }
                );
                console.log("Cart:   Item: " + chosenItem.product_name + " Units: " + answer.units + " $Total: " + total);
                productCart();
            }
            else {
                console.log("Insufficient quantity!");
                productCart();
            }
        });
    });
}

// function listproductsBegin() {
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;

//     // Log all results of the SELECT statement
//     console.log(res);
//     userPrompt()
//     connection.end();
//   });
// }

// // function to handle posting new items up for auction
// function userPrompt() {
//     // prompt for info about the item being put up for auction
//     inquirer
//       .prompt([
//         {
//           name: "item",
//           type: "input",
//           message: "What is the ID of product?",
//           validate: function(value) {
//             if (isNaN(value) === false) {
//               return true;
//             }
//             return false;
//           }
//         },
//         {
//           name: "units",
//           type: "input",
//           message: "How many units would you like to buy?",
//           validate: function(value) {
//             if (isNaN(value) === false) {
//               return true;
//             }
//             return false;
//           }
//         },
//       ])
//       .then(function(answer) {
//         var query = "SELECT id FROM products WHERE stock_quantity BETWEEN ? AND ?";
//         connection.query(query, [answer.item, answer.units], function(err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.log(
//               "id: " +
//                 res[i].id +
//                 " || stock_quantity: " +
//                 res[i].stock_quantity
//             );
//             }
//           updateProducts();
//         });
//       });
// }

// function updateProducts() {
//     // query the database for all items to be purchased
//     connection.query("SELECT id FROM products", function(err, results) {
//       if (err) throw err;
//       // once you have the number of items then delete quanity from database
//       inquirer
//         .prompt([
//           {
//             name: "choice",
//             type: "input",
//             message: "Choosen product:"
//           },
//         ])
//         .then(function(answer) {
//           // get the information of the chosen item
//           var chosenItem;
//           for (var i = 0; i < results.length; i++) {
//             if (results[i].product_name === answer.choice) {
//               chosenItem = results[i];
//             }
//           }
//           if (chosenItem.stock_quantity < parseInt(answer)) {
//             //  update db, let the user know, and start over
//             connection.query(
//               "UPDATE products SET ? WHERE ?",
//               [
//                 {
//                   id: chosenItem.answer
//                 },
//                 {
//                     stock_quantity: stock_quantity.res[i].stock_quantity
//                 }
//               ],
//               function(error) {
//                 if (error) throw err;
//                 console.log("Order was placed successfully!");
//                 listproductsBegin();
//               }
//             );
//           }
//           else {
//             // not enough quanity
//             console.log("Insufficient quantity!");
//             listproductsBegin();
//           }
//         });
//     });
// }