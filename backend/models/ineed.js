import { Schema, model } from "mongoose";
const Ineedride = new Schema({
    
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
export default  model("Ride", Ineedride);