import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './primeng.module';
import { NgForOf } from '@angular/common';

const common = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PrimeNgModule,
  NgForOf,
];

@NgModule({
  declarations: [],
  imports: [...common],
  exports: [...common],
})
export class SharedModule {}
