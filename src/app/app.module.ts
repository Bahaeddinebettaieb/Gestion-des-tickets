import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './services/login.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { AjoutTicketComponent } from './ajout-ticket/ajout-ticket.component';
import { ConsulterlisteComponent } from './consulterliste/consulterliste.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetuserService } from './services/resetuser.service';
import { UserService } from './services/user.service';
import { ConsulterUtilisateurComponent } from './consulter-utilisateur/consulter-utilisateur.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateutiliComponent } from './updateutili/updateutili.component';
import { UpdateticketComponent } from './updateticket/updateticket.component';
import { BarComponent } from './bar/bar.component';
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate : [LoginGuard]},
  {path: 'navbar', component: NavbarComponent,  canActivate : [LoginGuard]},
  {path: 'ajoutticket', component: AjoutTicketComponent,  canActivate : [LoginGuard]},
  {path: 'consulterliste', component: ConsulterlisteComponent,  canActivate : [LoginGuard]},
  {path: 'ajoututilisateur', component: AjoutUtilisateurComponent,  canActivate : [LoginGuard]},
  {path: 'consulterutilisateur', component: ConsulterUtilisateurComponent,  canActivate : [LoginGuard]},
  {path: 'updateutili/:id', component: UpdateutiliComponent,  canActivate : [LoginGuard]},
  {path: 'updateticket/:id', component: UpdateticketComponent, canActivate : [LoginGuard]},
  {path: 'contact', component: ContactComponent, canActivate : [LoginGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AjoutTicketComponent,
    ConsulterlisteComponent,
    AjoutUtilisateurComponent,
    ConsulterUtilisateurComponent,
    ContactComponent,
    UpdateutiliComponent,
    UpdateticketComponent,
    BarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LoginGuard, ResetuserService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
