//const { nextTick } = require("process");
const Mymovie=require("../model/movie.model");
//http://localhost:3000/movie/test
exports.test=(req,res)=>res.send("I am tested");


//http://localhost:3000/movie/create
exports.create=(req,res)=>{
    let movie=new Mymovie({
        movie_id:req.body.movie_id,
        m_name:req.body.m_name,
        ticket_cost:req.body.ticket_cost
    })
movie.save(function(err){
    if(err)
    {
        return  nextTick(err)
    }
    res.send("Record is inserted");
})


}
//http://localhost:3000/movie/all
exports.all=(req,res)=>{
    Mymovie.find(function(err,result){
        if(err)
        {
            return next(err);
        }
        res.send(result);
    });
}

//http://localhost:3000/movie/620f76c8499c7fe669622dfc
exports.details=(req,res)=>
{

    //var query={movie_id:req.params.movie_id}

    Mymovie.findById(req.params.id,function(err,result){
        if(err)
        {
            return next(err)
        }
        res.send(result);
    })
}
//http://localhost:3000/movie/deleteMovie/2
exports.delete=(req,res)=>{
    Mymovie.deleteOne(req.params.movie_id,function(err,result){
        if(err)
        {
            return next(err)
        }
        res.send("Recored is deleted")
    })
}
//
exports.update=(req,res)=>{
    Mymovie.findOneAndUpdate({_id:req.params.id},req.body).then(function(result){
        Mymovie.findOne({_id:req.params.id}).then(function(result){
            res.send(result);
        })
    })
}