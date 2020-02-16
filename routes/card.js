const express = require ('express'); 

const  Card = require('../models/card'); 

const router = express.Router(); 


//getAll cards
router.get('/',async (req,res)=>{
    try{
        console.log('request for Card received !! ')
        const cards = await Card.find(); 
        res.json(cards);
        console.log(cards) ;
    }catch (err){
        res.json({message : err}); 
        console.log(err) ;
    }
})


//get speicific card 
router.get('/:cardId', async (req,res)=>{
    try{
    
    const card = await Card.findById(req.params.cardId); 
    res.json(card); 
    }
    catch(err){
        res.json({message : err});
    }
});



//Create New Card 
router.post('/',async (req,res)=>{
    console.log(req.body);    

const card = new Card({
   account_number : req.body.account_number, 
   account_Password :  req.body.account_Password , 
   account_RIB : req.body.account_RIB , 
   creation_date :  req.body.creation_date , 
   amount : req.body.amount, 
   card_type : req.body.card_type , 
   Date_exp : req.body.Date_exp , 
   }); 
    
    try{
    const savedCard = await card.save().
    then(()=>{
        console.log('Card created ');    
    }); 
    res.json(savedCard); 
    }catch(err){
        res.json({message : err});
    }

})


//Delete Card 
router.delete('/:cardId',async (req,res)=>{
    try {
    const removedCard = await  Card.remove({_id: req.params.cardId})
    res.json(removedCard);
    }
    catch (err ){
        res.json({message : err});
    }
})


//Update  Card  
router.patch('/:cardId',async (req,res)=>{
    try{
    const updateCard = await Card.updateOne(
        {_id:req.params.cardId},
         {$set : {
                Date_exp : req.body.Date_exp    
        }
     }); 
         res.json(updateCard);
    }catch (err){
        res.json({message : err})
    }

})


// request 
router.patch('/getmoney/:cardId',async (req,res)=>{
    try {
    const mycard = await Card.findById(req.params.cardId); 
    console.log('my card information : '+mycard)
    if (mycard.amount>=req.body.amount)
    {
   
    try{
    
    const updateCard = await Card.updateOne(
        {_id:req.params.cardId},
         {
        $set : {
         amount : mycard.amount-req.body.amount 
        }
     }); 
         res.json({message: 'succes'});
    }catch (err){
        res.json({message : err})
    }
    }
    else{
        res.json({message:'insufficient amount'})
    }
    }
    catch (err){
        res.json({message : err})
    }

})
// add money 
router.patch('/addmoney/:cardId',async (req,res)=>{
    try {
    const mycard = await Card.findById(req.params.cardId); 
    console.log('my card information : '+mycard)
    
    try{
    
    const updateCard = await Card.updateOne(
        {_id:req.params.cardId},
         {
        $set : {
         amount : mycard.amount+req.body.amount 
        }
     }); 
         res.json({message: 'succes'});
    }
    catch (err){
        res.json({message : err})
    }
    }

    catch (err){
        res.json({message : err})
    }


})



module.exports = router  ;