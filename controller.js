const User= require('./UserModel')

 const  addUser=async(req,res)=>{
    const user=new User(req.body);
    try{
        await user.save()
        res.status(201).json({message:"added  successfully"})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}
const  getAll=async(req,res)=>{
    try{
        const users =await User.find({})
        res.status(201).send(users)
    }
    catch(error){
        res.status(500).json({message:error})
    }
}
const  getUser=async(req,res)=>{
    try{
        const user =await User.findOneAndUpdate(
            {_id:req.params.id})
        res.status(201).send(user)
    }
    catch(error){
        res.status(500).json({message:error})
    }
}
const  deleteUser=async(req,res)=>{
    try{
        const user =await User.findOneAndRemove({_id:req.params.id})
        res.status(201).json({message:"deleted  successfully"})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}
const  update=async(req,res)=>{
    const user=new User(req.body);
    try{
        const user =await User.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
            )
            if(!user){res.status(404).json({message:"not found"})}
        res.status(201).json({message:"updated   successfully"})
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

module.exports={
    addUser,getAll,getUser,deleteUser,update
}