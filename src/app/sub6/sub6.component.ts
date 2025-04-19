import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';
import { IonContent, IonText, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub6',
    imports: [IonImg, IonText, IonContent,
        RouterLink
    ],
  templateUrl: './sub6.component.html',
  styleUrl: './sub6.component.css'
})
export class Sub6Component {

  protected readonly mainlist = mainlist;
}
