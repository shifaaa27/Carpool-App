import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rno: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    }
    ,
    vno: {
        type: String,
        required: true,
    },
    uname: {
        type: String,
        required: true,
    },
    cno: {
        type: String,
        required: true,
    }
});

export default  model("User", UserSchema);