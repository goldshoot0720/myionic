import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { mainlist } from './mainlist';
import { IonContent, IonItem, IonButton, IonRow, IonGrid, IonImg, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-main',
    imports: [ IonImg, IonButton, IonContent,
        RouterLink
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  protected readonly mainlist = mainlist;
}
