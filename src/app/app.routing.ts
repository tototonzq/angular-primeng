import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutEnum } from './layout/layout.enum';

export const root: Routes = [
  /* -------------------------------------------------------------------------- */
  /*                                   DEFAULT                                  */
  /* -------------------------------------------------------------------------- */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  /* -------------------------------------------------------------------------- */
  /*                                    AUTH                                    */
  /* -------------------------------------------------------------------------- */
  {
    path: '',
    canActivate: [],
    canActivateChild: [],
    component: LayoutComponent,
    data: {
      layout: LayoutEnum.EMPTY,
    },
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
    ],
  },
  /* -------------------------------------------------------------------------- */
  /*                                    ADMIN                                   */
  /* -------------------------------------------------------------------------- */
  {
    path: '',
    canActivate: [],
    canActivateChild: [],
    component: LayoutComponent,
    data: {
      layout: LayoutEnum.MODERN,
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/admin/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  /* -------------------------------------------------------------------------- */
  /*                                    USER                                    */
  /* -------------------------------------------------------------------------- */
];
