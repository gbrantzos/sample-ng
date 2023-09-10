import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ubl-ui-blocks',
  standalone: true,
  imports: [CommonModule],
  template: ` <p><i class="fa-solid fa-bars"></i> ui-blocks works!</p> `,
  styles: []
})
export class UiBlocksComponent {
  // https://stackoverflow.com/questions/34641281/how-to-add-class-to-host-element
  @HostBinding('class') public classes = 'someClass1';
}
