import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './empty.component.html',
})
export class EmptyComponent {}
