import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { HomeSlideSubComponent } from '../app/home-slide-sub/home-slide-sub.component';
import { HomeSlide2Component } from './home-slide-2/home-slide-2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Slide5TowerComponent } from './slide-5-tower/slide-5-tower.component';
import { Slide5SubComponent } from '../app/slide-5-sub/slide-5-sub.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'sub', component:  HomeSlideSubComponent },
    { path: 'slide-2', component:  HomeSlide2Component },
    { path: 'sub-t', component:  Slide5TowerComponent },
    { path: 'sub-5', component:  Slide5SubComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),HeaderComponent,
        FooterComponent],
    exports: [RouterModule, HeaderComponent,
        FooterComponent],
})
export class AppRoutingModule { }


 
