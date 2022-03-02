const mongoose=require("mongoose");

const schema=mongoose.Schema;

let movieSchema=new schema({
    movie_id:{type:Number},
    m_name:{type:String},
    ticket_cost:{type:Number}
});

module.exports=mongoose.model("newMovie",movieSchema);