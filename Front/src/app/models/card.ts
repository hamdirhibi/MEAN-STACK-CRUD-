export class Card {
    
    constructor(account : Card){
        this.account_Password= account.account_Password; 
        this.account_number=account.account_number;
        this.account_RIB = account.account_RIB; 
        this.creation_date = account.creation_date; 
        this.amount = account.amount; 
        this.card_type = account.card_type;
        this.Date_exp = account.Date_exp ; 
    }
    account_number :Number ; 
    account_Password :  String  ; 
    account_RIB : Number ; 
    creation_date :  String  ;  
    amount : Number; 
    card_type : String ; 
    Date_exp : String ; 
  
 
 }
