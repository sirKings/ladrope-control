import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase } from 'angularfire2/database';

import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

order;
user;
subs: Subscription;

  constructor(private service: ServiceService, private db: AngularFireDatabase) { }

  ngOnInit() {
  	this.subs = this.service.selectedOrder.subscribe(res =>{
  		this.order = res
  		this.db.object('users/'+this.order.user)
  			.subscribe(res => {
  				this.user = res
  			})
  	})
  }

  ngOnDestroy(){
  	this.subs.unsubscribe()
  }
}
