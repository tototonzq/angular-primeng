import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

export const SignUpRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-up',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];
