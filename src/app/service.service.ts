import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ServiceService {

selectedOrder = new Subject<{}>();
selectedMessage = new Subject<{}>();
selectedUser = new Subject<{}>();

  constructor() { }

}
