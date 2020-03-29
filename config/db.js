const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://AyanD:N0Zar1w@cluster0-tn8ky.mongodb.net/test?retryWrites=true&w=majority", {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        });
        //console.log('MongoDB connected!');
    } catch (err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
