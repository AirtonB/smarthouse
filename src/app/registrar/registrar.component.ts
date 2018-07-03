import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  email: string = '';
  senha: string = '';
  senha_novamente: string = '';

  constructor(private fire: AngularFireAuth, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  registrar() {
    this.senha === this.senha_novamente ? this.criarConta() : this.toastr.info("As senhas devem ser iguais.", "Formulario Inválido");
  }

  private criarConta() {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.senha)
      .then(user => {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('email', this.fire.auth.currentUser.email)

        this.fire.authState.subscribe(auth => {
          if (auth) {
            localStorage.setItem('uid', auth.uid);
          }
        })

        this.router.navigate(['login'])
      }).catch(error => {
        this.toastr.error(error, "Erro ao Cadastrar");
      })
  }
}
