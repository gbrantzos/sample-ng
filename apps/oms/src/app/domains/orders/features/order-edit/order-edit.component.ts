import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'oms-order-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent {
  @Input() public orderId = 0;
}
