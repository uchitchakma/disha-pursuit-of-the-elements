import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { HomeSlideSubComponent } from '../app/home-slide-sub/home-slide-sub.component';
export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'sub', component:  HomeSlideSubComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }


 
