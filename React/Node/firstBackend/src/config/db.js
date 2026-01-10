import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // COnnection the mongoDB databse
    console.log(`MongoDB Connected at : 
         ${conn.connection.host} : ${conn.connection.host} : ${conn.connection.port} `

    );
    console.log("Database Name :", conn.connection.name);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
