import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'first',pathMatch:'full'},
  {path:'first',component:FirstComponent},
  {path:'first/:id',component:DetailsComponent},
  {path:'second',component:SecondComponent},
  {path:'third',component:ThirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponent =[FirstComponent,SecondComponent,ThirdComponent];