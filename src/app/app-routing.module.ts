import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutes } from './pages';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pages/dashboard',
        pathMatch: 'full'
    },
    ...PagesRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
