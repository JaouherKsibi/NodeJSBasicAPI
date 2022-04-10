const express = require('express');
const { route } = require('express/lib/application');
const router=express.Router();
const controller=require('./controller')
router.get('/getAll',(req,res)=>{
    res.send("3asslema");
})
router.post('/users', controller.addUser)
router.get('/users', controller.getAll)
router.get('/users/:id', controller.getUser)
router.delete('/users/:id', controller.deleteUser)
router.patch('/users/:id', controller.update)


module.exports=router;