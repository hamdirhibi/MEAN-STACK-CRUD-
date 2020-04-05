export class Account {
        constructor(account : Account){
            this.account_Password= account.account_Password; 
            this.account_number=account.account_number;
            this.account_RIB = account.account_RIB; 
            this.creation_date = account.creation_date; 
            this.amount = account.amount; 
            this.card.card_type = account.card.card_type;
            this.card.Date_exp = account.card.Date_exp ; 
            this.client.birthday=account.client.birthday;
            this.client.cin= account.client.cin; 
            this.client.firstname=account.client.firstname;
            this.client.lastname=account.client.lastname;
        }
        account_number :Number ; 
        account_Password :  String  ; 
        account_RIB : Number ; 
        creation_date :  String  ;  
        amount : Number; 
        card :  {
            card_type : String ; 
            Date_exp : String ; 
        } 
        client : {
            birthday  :  String ,
            cin : Number,
            firstname :String ,
            lastname : String 
        }
     
     }
