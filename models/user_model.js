import mongoose from "mongoose";
import connection from "../config/connection.js";

let Schema = mongoose.Schema;

let User = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    address: String
});


export default connection.model("User", User,'users');