import { RegistrarComponent } from './../registrar/registrar.component';
import { LoginComponent } from './../login/login.component';
import { TelaPrincipalComponent } from './../tela-principal/tela-principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'tela-principal', component: TelaPrincipalComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
