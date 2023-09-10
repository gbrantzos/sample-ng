import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiBlocksComponent } from 'ui-blocks';
import { RouterListenerService } from './core/services/router-listener.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'oms-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, UiBlocksComponent, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'oms';
  protected navigating$ = inject(RouterListenerService).navigating$;
}
