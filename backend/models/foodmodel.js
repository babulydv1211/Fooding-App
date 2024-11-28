import mongoose from "mongoose"

const foodSchema =new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,reuire:true},
    category:{type:String,require:true},
})
const foodModel =mongoose.models.food || mongoose.model("food",foodSchema);
export default foodModel;