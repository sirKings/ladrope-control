import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServiceService } from '../../service.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

user;
orders;
subs: Subscription;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  	this.subs = this.service.selectedUser.subscribe( res => {
  		this.user = res;
      if(this.user.orders){
        this.orders = this.getOrder(this.user.orders)
      }else{
        this.orders = []
      }
  		
  	})
  }

  getOrder(obj){
  	let result = Object.keys(obj).map(function(e) {
  		return obj[e]
  		})
  	return result;
  }

  ngOnDestroy(){
  	this.subs.unsubscribe()
  }



}
