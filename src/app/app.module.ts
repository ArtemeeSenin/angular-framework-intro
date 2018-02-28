import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    UserComponent,
    AccountComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
