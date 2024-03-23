import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../store/models/app-state';
import { Store } from '@ngrx/store';
import { toggleOverlay } from '../../store/actions/overlay-open-action';

@Component({
  selector: 'app-extra-overlay',
  templateUrl: './extra-overlay.component.html',
  styleUrl: './extra-overlay.component.scss',
})
export class ExtraOverlayComponent {
  @Input() choosenItem: string = '';

  myBoolean$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.myBoolean$ = this.store.select((state) => state.myBoolean);
  }

  toggleBoolean() {
    this.store.dispatch(toggleOverlay());
  }
}
