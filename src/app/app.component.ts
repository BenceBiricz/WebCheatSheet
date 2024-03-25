import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(analytics: AngularFireAnalytics) {
    analytics.logEvent('app_open', { component: 'AppComponent' });
  }
}
