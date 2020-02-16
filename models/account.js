const mongoose = require('mongoose'); 


const accountSchema = mongoose.Schema({
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
   },
   amount : {
       type : Number , 
       require : true 
   }, 
   card :  {
       card_type : {
           type : String,
           require : true  
       } , 
       Date_exp : {
           date_exp : String , 
       }
   },
   client : {
       birthday : {
           type : String, 
           require : true 
       } ,
       cin : {
           type : Number , 
           require : true 
       },
       firstname : {
           type : String , 
           require : true 
       } ,
       lastname : {
           type : String , 
           require : true 
       } 
       
   }
   
   
   

})


module.exports = mongoose.model('account',accountSchema);