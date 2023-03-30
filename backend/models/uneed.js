import { Schema, model } from "mongoose";
const Uneedride = new Schema({
    uname: {
        type: String,
        required: true,
    },
    pickuplocation:{
        type: String,
        required: true,

    },
    droplocation:{
        type: String,
        required: true,

    }
})  
export default  model("Give", Uneedride);