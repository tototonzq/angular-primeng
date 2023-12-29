import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';

export const signInRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];
