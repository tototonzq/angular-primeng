import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-modern',
  standalone: true,
  imports: [SharedModule, NavbarComponent, SidebarComponent],
  templateUrl: './modern.component.html',
})
export class ModernComponent {}
