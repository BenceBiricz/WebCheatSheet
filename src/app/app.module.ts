import { firebaseConfig } from './../assets/firebase-config/firebase-config';
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { HtmlPageComponent } from './pages/html-page/html-page.component';
import { CssPageComponent } from './pages/css-page/css-page.component';
import { TypescriptPageComponent } from './pages/typescript-page/typescript-page.component';
import { CheatSheetCardsComponent } from './shared/cheat-sheet-cards/cheat-sheet-cards.component';
import { ExtraOverlayComponent } from './shared/extra-overlay/extra-overlay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { overlayReducer } from './store/reducers/overlay-open-reducer';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { getAnalytics } from 'firebase/analytics';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    HtmlPageComponent,
    CssPageComponent,
    TypescriptPageComponent,
    CheatSheetCardsComponent,
    ExtraOverlayComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ myBoolean: overlayReducer }),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    {
      provide: firebaseConfig,
      useValue: {
        DEBUG_MODE: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
