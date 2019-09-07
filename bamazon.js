var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nixiepoo1!",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    inquirer.prompt({
        name: "greeting",
        type: "list",
        message: "Welcome to Bamazon, what would you like to do?",
        choices: ["Buy", "Exit"]
    })
    .then(function(inquirerResponse) {
        if (inquirerResponse.greeting === "Buy") {
            afterConnection();
        } else {
            console.log("Okay, Come back soon!");
            connection.end();
        }
    })
});

// Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            // console.log(res);
            console.log("ID: " + res[i].item_id + " || Item Name: " + res[i].product_name + " || Price(ea): " + res[i].price);
            // ends the connection for testing below
            // connection.end();
        }
        shop();
    });
}

// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
function shop() {
    inquirer.prompt({
        name: "id",
        type: "input",
        message: "\nWhat is the ID of the product you would like to buy?\n"
    })
        .then(function (answer) {
            // console.log(answer.id);
            connection.query("SELECT * FROM products WHERE ?", {
                item_id: answer.id
            },
                // The second message should ask how many units of the product they would like to buy.
                function (err, res) {
                    if (err) throw err;
                    inquirer.prompt({
                        name: "amount",
                        type: "input",
                        message: "How much " + res[0].product_name + " would you like to add to your cart?"
                    })
                        .then(function (answer) {
                            console.log(res[0].item_id);
                            var id = res.item_id;
                            var amount = parseInt(answer.amount);
                            var stock = parseInt(res[0].stock_quantity);
                            // console.log(amount);
                            if (amount < stock) {
                                console.log("good to pull stock" + stock);
                            } else {
                                console.log("not enough stock " + stock);
                            }
                            update(res, amount);
                        });
                });


            connection.end();
        });

    // // Updates the amount of products stock minus the amount that was bought by the user
    function update(id, amount) {
        // var cus_id = res.item_id;
        // console.log(id)
        var amount = parseInt(res[0].stock_quantity - amount);
        console.log("Updating stock quality..." + amount);
        var query = connection.query("UPDATE products SET stock_quantity - ? WHERE id = ?", [id],
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " products updated!");
            }
        );
    // Adds the total amount of the user selected product together for a final balance
    function total() {

    }

        console.log(query.sql);
    }

}

