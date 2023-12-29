import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { signInRoute } from './sign-in.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(signInRoute), SharedModule],
  declarations: [SignInComponent],
})
export class SignInModule {}
