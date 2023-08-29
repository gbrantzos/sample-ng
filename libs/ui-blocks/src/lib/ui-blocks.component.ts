import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ubl-ui-blocks',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>ui-blocks works! YEAH!</p> `,
  styles: [],
})
export class UiBlocksComponent {
  // https://stackoverflow.com/questions/34641281/how-to-add-class-to-host-element
  @HostBinding('class') public classes = 'someClass1';
}
