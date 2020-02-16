const express = require ('express'); 

const  Account = require('../models/account'); 

const router = express.Router(); 

router.get('/',async (req,res)=>{
    try{
        console.log('request received !! ')
        const accounts = await Account.find(); 
        res.json(accounts);
    }catch (err){
        res.json({message : err}); 
    }
})



//Create New Account 
router.post('/',async (req,res)=>{
    console.log(req.body);    

const account = new Account({

   account_number : req.body.account_number, 
   account_Password :  req.body.account_Password , 
   account_RIB : req.body.account_RIB , 
   creation_date :  req.body.creation_date , 
   amount : req.body.amount, 
   card :  {
       card_type : req.body.card.card_type , 
       Date_exp : req.body.card.card_type , 
   },
   client : {
       birthday : req.body.client.birthday,
       cin :req.body.client.cin,
       firstname : req.body.client.firstname,
       lastname : req.body.client.lastname,
   }
    }); 
    
    try{
    const savedAccount = await account.save().
    then(()=>{
        console.log('account created ');    
    }); 
    res.json(savedAccount); 
    }catch(err){
        res.json({message : err});
    }

})


//Delete Account 
router.delete('/:accountId',async (req,res)=>{
    try {
    const removedAccount = await  Account.remove({_id: req.params.accountId})
    res.json(removedAccount);
    }
    catch (err ){
        res.json({message : err});
    }
})


//Update an account  
router.patch('/:accountId',async (req,res)=>{
    try{
    const updateAccount = await Account.updateOne(
        {_id:req.params.accountId},
         {$set : {
             card : {
                Date_exp : req.body.card.Date_exp
             },       
            client : {
            firstname : req.body.client.firstname,
            lastname : req.body.client.lastname,
            }
        }
     }); 
         res.json(updateAccount);
    }catch (err){
        res.json({message : err})
    }

})


// request 
router.patch('/getmoney/:accountId',async (req,res)=>{
    try{
    const updateAccount = await Account.updateOne(
        {_id:req.params.accountId},
         {$set : {
         amount : req.body.amount }
     }); 
         res.json(updateAccount);
    }catch (err){
        res.json({message : err})
    }

})

// addmoney 
router.patch('/addmoney/:accountId',async (req,res)=>{
    try{
    const updateAccount = await Account.updateOne(
        {_id:req.params.accountId},
         {$set : {
         amount : req.body.amount }
     }); 
         res.json(updateAccount);
    }catch (err){
        res.json({message : err})
    }

})



module.exports = router  ;