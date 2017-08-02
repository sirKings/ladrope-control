import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

messages;
msg;

  constructor(private service: ServiceService, private db: AngularFireDatabase) { }

  ngOnInit() {
  	this.db.list('messages', {
  		query: {
  			orderByPriority: true
  		}
  	}).subscribe((res) => {
  		this.messages = res
  	})

  }

  select(msg){
  	this.msg = msg
  	this.service.selectedMessage.next(msg)
  }

  selected(msg){
  	if(msg === this.msg){
  		return true
  	}else{
  		return false
  	}
  }

}
