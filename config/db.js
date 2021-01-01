const mongoose = require('mongoose');


const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
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
