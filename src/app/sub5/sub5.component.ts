import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';
import { IonContent, IonImg, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub5',
    imports: [IonText, IonImg, IonContent,
        RouterLink
    ],
  templateUrl: './sub5.component.html',
  styleUrl: './sub5.component.css'
})
export class Sub5Component {

  protected readonly mainlist = mainlist;
}
