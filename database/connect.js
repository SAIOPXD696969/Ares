const mongoose = require('mongoose');
const chalk = require('chalk');

async function connect() {
    mongoose.connect("mongodb+srv://Test_Bot:8851020767@test.idqc2xz.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
        console.log(chalk.green(`[MONGO DB] is ready!`))
    });
    return;
}

module.exports = connect