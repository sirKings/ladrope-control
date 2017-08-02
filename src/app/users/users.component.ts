import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

authObserver;
users;
user
  constructor( private service: ServiceService,private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  ngOnInit() {
  	 this.authObserver = this.afAuth.authState.subscribe( user => {
        if (user) {
		  	this.db.list('users', {
		  		query: {
		  			orderByPriority: true
		  		}
		  	}).subscribe((res) => {
		  		this.users = res
		  	})
		 }
		})
  }

  select(user){
  	this.user = user
  	this.service.selectedUser.next(user)
  }

  selected(user){
  	if(user === this.user){
  		return true
  	}else{
  		return false
  	}
  }

}
