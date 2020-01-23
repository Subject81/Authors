import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './home/new/new.component';
import { EditComponent } from './home/edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewComponent},
  { path: "edit/:id", component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
