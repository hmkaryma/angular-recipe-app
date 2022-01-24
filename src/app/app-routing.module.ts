import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import{PagenotfoundComponent} from'./pagenotfound/pagenotfound.component';
 import{ DetailsComponent}from'./details/details.component';
 import { ViewsComponent } from './views/views.component';

const routes:Routes=  
[
{path:'  ',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'navebar/karyma/123',component:NavebarComponent},
{path:'views',component:ViewsComponent},
{path:'contact',redirectTo:'views',pathMatch:'full'},
{path:'footer',
children:[
{path:'details',component:DetailsComponent}
]},
{path:'**',component:PagenotfoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
