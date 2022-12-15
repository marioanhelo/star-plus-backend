import mongoose from 'mongoose';
import config from './config';

export async function connect(){
   
   try {
       await mongoose.connect(config.database.uri,{
           useNewUrlParser:true
       })
    console.log('Database connected')
   } catch (error) {
    return console.log(error)
   }
}
