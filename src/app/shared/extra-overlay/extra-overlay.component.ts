import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-extra-overlay',
  templateUrl: './extra-overlay.component.html',
  styleUrl: './extra-overlay.component.scss',
})
export class ExtraOverlayComponent {
  @Input() choosenItem: string = '';
  @Input() isItemChoosen: boolean = false;

  close() {
    //this.isItemChoosenOut = false;
  }
}
