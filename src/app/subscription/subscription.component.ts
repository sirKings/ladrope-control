import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

subs
  constructor(private service: ServiceService, private db: AngularFireDatabase) { }

   ngOnInit() {
   	this.db.list('newsletter', {
   		query: {
   			orderByPriority: true
   		}
   	}).subscribe((res) => {
   		this.subs = res
   	})

   }

}
