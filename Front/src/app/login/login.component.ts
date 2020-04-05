import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service'
import { Account } from '../models/account';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accounts :Account[]; 
  account_number : Number ;
  account_password : String ;
  verification =  false; 

  constructor(private accountService : AccountService,
    private toastr: ToastrService,
    private router: Router){
    
  }

  ngOnInit() {
   this.accountService.getAllAcounts().subscribe(data=>{
    this.accounts= data ; 
    console.log(data);
  }); ; 
  }
  title = 'front';

  authentification(){
  console.log(this.accounts ); 
    this.accounts.forEach((item)=>{
      console.log('number '+this.account_number);
      console.log('this is password  : '+this.account_password);
      
        if(item.account_number==this.account_number&&item.account_Password==this.account_password){
           this.showSuccess(); 
           this.verification =  true; 
           this.router.navigate(['home']);
        }
    })
    if (this.verification===false)
    this.showError();
  }
  showSuccess() {
    this.toastr.success( 'lets talk money now , loading ... !!!','authentification confirmed !!!');
  }
  showError() {
    this.toastr.error('be careful and try again ! ','woow !');
  }



}
