import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { SignUpRoute } from './sign-up.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SignUpRoute)],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
