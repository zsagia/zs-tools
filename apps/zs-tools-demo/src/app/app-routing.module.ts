import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => import('./page/home-page/home-page.module').then((module) => module.HomePageModule),
        data: {
            breadcrumb: 'home',
        },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
