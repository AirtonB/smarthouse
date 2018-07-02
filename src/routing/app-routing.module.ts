import { LoginComponent } from './../app/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TelaPrincipalComponent } from '../app/tela-principal/tela-principal.component';

const routes: Routes = [
{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'tela-principal', component: TelaPrincipalComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [ RouterModule ],
declarations: []
})
export class AppRoutingModule { }
