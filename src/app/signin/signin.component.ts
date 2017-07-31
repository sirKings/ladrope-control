import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';


import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
signinForm: FormGroup;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    	this.signinForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required]),
        });
    }

  signin() {
    //console.log(this.signinForm)
            if(this.signinForm.valid){
              this.afAuth.auth.signInWithEmailAndPassword(this.signinForm.value.email, this.signinForm.value.password)
              .catch((error) => {
                // Handle Errors here.
                let errorMessage = error.message;
                
            })
              .then((res) => {
                
                  this.router.navigate(['/']);
                

              });
            }
            else{
             alert('Error Please enter valid details')
          
            }
    }
  	

}
