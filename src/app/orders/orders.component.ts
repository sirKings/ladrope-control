import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
canceled = false;
pending = true;
completed = false;
declined = false
authObserver;
tailor;
selectedOrder;
pendingOrders = [];
completedOrders = [];
canceledOrders = [];
declinedOrders = [];
isPendingOrder = false;
isCanceledOrder = false;
isCompletedOrder = false;
isDeclinedOrder = false;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private service: ServiceService) { }

  

  pend(){
  	this.canceled = false;
  	this.completed = false;
  	this.declined = false;
  	this.pending = true;
  }

  complete(){
  	this.canceled = false;
  	this.completed = true;
  	this.pending = false;
  	this.declined = false;

  }

  cancel(){
  	this.canceled = true;
  	this.completed = false;
  	this.pending = false;
  	this.declined = false;
  }

  decline(){
  	this.canceled = false;
  	this.completed = false;
  	this.pending = false;
  	this.declined = true;
  }

  ngOnInit() {

      this.authObserver = this.afAuth.authState.subscribe( user => {
        if (user) {
            this.db.list('orders')
              .subscribe(res => {
                
                  this.pendingOrders = res
                  this.isPendingOrder = true;
                  
             });

             this.db.list('completedOrders')
               .subscribe(res => {
                 
                   this.completedOrders = res
                   this.isCompletedOrder = true;
                   
              });

             this.db.list('CanceledOrders')
               .subscribe(res => {
                 
                   this.canceledOrders = res
                   this.isCanceledOrder = true;
                   
              });

             this.db.list('DeclinedOrders')
               .subscribe(res => {
                 
                   this.declinedOrders = res
                   this.isDeclinedOrder = true;
                   
              });
            }
           })
  }   

  ngOnDestroy() {
    this.authObserver.unsubscribe();

  }


  select(order){
  	this.selectedOrder = order
    this.service.selectedOrder.next(order)
  }

  selected(order){
  	if(order === this.selectedOrder){
  		return true
  	}else{
  		return false
  	}
  }

}