import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Card } from '../models/card';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  account_number :Number ; 
  account_Password : String ; 
  account_RIB : Number ; 
  date_creation : String ; 
  amount : Number ; 
  card_type : String ; 
  Date_exp : String ;
  cards : Card[];
  id : Number ; 
  /*
  */
  constructor(private CardService : AccountService,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
      this.displayCards();
  }
 displayCards(){
  this.CardService.getAllCards().subscribe(data=>{
    this.cards= data;
    console.log(data);
  })

 }
 delete(id){
   console.log(id);
   this.CardService.Delete_Card(id); 
   this.displayCards();
   this.showtoastdelete('Card Deleted !!')

 }
 update(card){
  this.account_number = card.account_number,
  this.account_Password = card.account_Password,
  this.account_RIB = card.account_RIB,
  this.date_creation = card.date_creation,
  this.Date_exp = card.Date_exp,
  this.card_type = card.card_type , 
  this.amount = card.amount
  this.id = card._id;


  this.displayCards();

 }
  submit(){
    const card = new Card({
      account_number : this.account_number,
      account_Password : this.account_Password,
      account_RIB : this.account_RIB,
      creation_date : this.date_creation,
      Date_exp : this.Date_exp,
      card_type : this.card_type , 
      amount : this.amount
    }); 
    this.CardService.createNewCard(card);
    this.displayCards();
    this.showtoast('Card Added !!')
  }
  editCard(){
    const card = new Card({
      account_number : this.account_number,
      account_Password : this.account_Password,
      account_RIB : this.account_RIB,
      creation_date : this.date_creation,
      Date_exp : this.Date_exp,
      card_type : this.card_type , 
      amount : this.amount
    }); 

    this.CardService.Update_Card(card,this.id);
    this.showtoastupdated('Card Updated !!')

  }

  showtoast(Message) {
    this.toastr.success( Message);
  }
  showtoastdelete(Message) {
    this.toastr.error( Message);
  }
  showtoastupdated(Message) {
    this.toastr.warning( Message);
  }


}
