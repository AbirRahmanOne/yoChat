const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING , {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
    
        });
        console.log(`Database connection sucessfully!`);

    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
        
    }
   
}

module.exports = connectDB 
