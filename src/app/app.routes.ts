import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { HomeSlideSubComponent } from '../app/home-slide-sub/home-slide-sub.component';
import { HomeSlide2Component } from './home-slide-2/home-slide-2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Slide4SubComponent } from '../app/slide-4-sub/slide-4-sub.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'sub', component:  HomeSlideSubComponent },
    { path: 'slide-2', component:  HomeSlide2Component },
    { path: 'sub-4', component:  Slide4SubComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),HeaderComponent,
        FooterComponent],
    exports: [RouterModule, HeaderComponent,
        FooterComponent],
})
export class AppRoutingModule { }


 
