import {Schema, model} from "mongoose"

const movieSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
    },
    image:{
        type:String
    },
    dateofreleased:{
        type:String
    }
})

export default model("movies-catalog", movieSchema)