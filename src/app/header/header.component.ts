import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu = false;
  ismenu = false;
	user;
  uid
	constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, public router: Router){
		const authObserver = afAuth.authState.subscribe( user => {
      	if (user) {
        		this.uid = user.uid;
            this.getUser(this.uid)
                } else {
                	this.user = null
                }

           	});
        //authObserver.unsubscribe();
	}



	signout(){
		this.afAuth.auth.signOut();
	}

  toggleCollapse(){
    this.showMenu = !this.showMenu;
  }


  getUser(uid){
        let sub = this.db.object('/users/'+uid)
          .subscribe(snapshot => {
              this.user = snapshot;
              console.log(this.user.$value)
              //this.auth.user = this.user;
              if(this.user.$value === null){
                sub.unsubscribe();
                let sub1 = this.db.object('/tailors/'+uid)
                  .subscribe(snapshot => {
                    this.user = snapshot;
                    console.log(this.user)
                    //this.auth.user = this.user;
                  })
              } 
              
          })
  }

}