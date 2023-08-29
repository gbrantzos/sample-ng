import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBlocksComponent } from './ui-blocks.component';

describe('UiBlocksComponent', () => {
  let component: UiBlocksComponent;
  let fixture: ComponentFixture<UiBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UiBlocksComponent],
    });
    fixture = TestBed.createComponent(UiBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
