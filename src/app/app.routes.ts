import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutDpeComponent } from './about-dpe/about-dpe.component';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about-dpe', component: AboutDpeComponent },
    { path: '', component: ContainerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }


 
