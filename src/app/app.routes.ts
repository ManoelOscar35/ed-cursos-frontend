import { Routes } from '@angular/router';
import { GerencialComponent } from './gerencial/gerencial.component';

export const routes: Routes = [
    {path: '', redirectTo:"gerencial", pathMatch:'full'},
    // {
    //     path: 'condominiums',
    //     loadChildren: () => import('./modules/condominiums/condominiums.routes'),
    //     component: CondominiumsComponent
    // },
    {
    path: 'gerencial',
    loadChildren: () => import('./gerencial/gerencial.routes'),
    component: GerencialComponent
    },
];
