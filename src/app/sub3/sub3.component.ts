import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';
import { IonContent, IonText, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub3',
  imports: [IonImg, IonText, IonContent,
    RouterLink
  ],
  templateUrl: './sub3.component.html',
  styleUrl: './sub3.component.css'
})
export class Sub3Component {

  protected readonly mainlist = mainlist;
}
