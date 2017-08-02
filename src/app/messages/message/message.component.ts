import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

msg;
subs: Subscription;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  	this.subs = this.service.selectedMessage.subscribe( res => {
  		this.msg = res;
  	})
  }

  ngOnDestroy(){
  	this.subs.unsubscribe()
  }

}
