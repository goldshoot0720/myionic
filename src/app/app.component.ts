import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonTabs, IonTabBar, IonIcon, IonTabButton, IonLabel } from '@ionic/angular/standalone';
import {MainComponent} from './main/main.component';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonLabel, IonTabButton, IonIcon, IonTabBar, IonTabs, IonApp, IonRouterOutlet,IonContent, MainComponent],
  standalone: true,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setOverlaysWebView({ overlay: false });
  }
}
