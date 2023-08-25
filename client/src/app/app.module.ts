import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found.component';
import { FormComponent } from './components/form.component';
import { MainComponent } from './components/main.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { UserService } from './user.service';
import { checkIsDirtyForm, checkUser } from './guards';

const appRoutes: Routes = [
  { path: '', component: MainComponent, title: 'Main' },
  { path: 'form', component: FormComponent, canDeactivate: [ checkIsDirtyForm ] },
  { path: 'form/:userId', component: FormComponent, 
    canActivate: [checkUser], canDeactivate: [ checkIsDirtyForm] },
  { path: 'notfound', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [StorageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
