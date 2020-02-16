const mongoose = require('mongoose'); 


const cardSchema = mongoose.Schema({

   account_number : {
       type : Number , 
       require : true 
   },
   account_Password : {
       type : String , 
       require : true 
   },
   account_RIB : {
       type : Number , 
       require : true 
   },
   creation_date : {
       type : String , 
       require : true ,
   },
   amount : {
       type : Number , 
       require : true 
   }, 
   card_type : {
     type : String,
     require : true  
   } , 
   Date_exp : {
    type : String , 
    require: true
   }

})


module.exports = mongoose.model('card',cardSchema);