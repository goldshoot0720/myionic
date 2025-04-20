import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { mainlist } from './mainlist';
import { IonContent, IonImg, IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-main',
    imports: [IonRow, IonCol, IonImg, IonContent,
        RouterLink
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  protected readonly mainlist = mainlist;
}
