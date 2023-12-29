import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRoute } from './dashboard.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardRoute)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
