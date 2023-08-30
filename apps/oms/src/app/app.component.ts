import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiBlocksComponent } from 'ui-blocks';

@Component({
  selector: 'oms-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UiBlocksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'oms';
}
