import { Routes } from '@angular/router';
import { accessGuardGuard } from './guards/access-guard.guard'


export const routes: Routes = [ 
    {
        path: '', 
        loadComponent: () =>  import('./components/landing-page/landing-page.component').then( c => c?.LandingPageComponent )
    },
    {
        path: 'upload', 
        loadComponent: () =>  import('./components/upload-page/upload-page.component').then( c => c?.UploadPageComponent ),
        canActivate: [accessGuardGuard('forbidden/')]
    },
    {
        path: 'forbidden', 
        loadComponent: () =>  import('./components/forbidden-access/forbidden-access.component').then( c => c?.ForbiddenAccessComponent )
    }
];
