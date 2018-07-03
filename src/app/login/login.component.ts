import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private fire: AngularFireAuth, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.fire.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(user => {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('email', this.fire.auth.currentUser.email)

        this.fire.authState.subscribe(auth => {
          if (auth) {
            localStorage.setItem('uid', auth.uid)
          }
        })

        this.router.navigate(['tela-principal'])
      }).catch(error => {
        console.log(error);
        this.toastr.error(error, 'Erro ao fazer login');
      })
  }

}
