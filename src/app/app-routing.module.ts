import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './main-page/demo-component.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {path:'', component:DemoComponentComponent},
   { path: 'home', component:DemoComponentComponent},
  {path: 'page2', component: Page2Component},
  {path:"demo", component:DemoComponentComponent},
  // {redirectTo: '/dashboard'},
  // {pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
