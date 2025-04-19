import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';
import { IonContent, IonText, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub9',
    imports: [IonImg, IonText, IonContent,
        RouterLink
    ],
  templateUrl: './sub9.component.html',
  styleUrl: './sub9.component.css'
})
export class Sub9Component {

  protected readonly mainlist = mainlist;
}
