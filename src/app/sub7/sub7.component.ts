import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';
import { IonContent, IonText, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub7',
    imports: [IonImg, IonText, IonContent,
        RouterLink
    ],
  templateUrl: './sub7.component.html',
  styleUrl: './sub7.component.css'
})
export class Sub7Component {

  protected readonly mainlist = mainlist;
}
