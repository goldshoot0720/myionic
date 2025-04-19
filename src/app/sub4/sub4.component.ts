import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';
import { IonContent, IonText, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub4',
    imports: [IonImg, IonText, IonContent,
        RouterLink
    ],
  templateUrl: './sub4.component.html',
  styleUrl: './sub4.component.css'
})
export class Sub4Component {

  protected readonly mainlist = mainlist;
}
