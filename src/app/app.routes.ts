import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }


 
