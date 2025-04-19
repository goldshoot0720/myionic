import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';
import { IonContent, IonText, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub2',
  imports: [IonImg, IonText, IonContent,
    RouterLink
  ],
  templateUrl: './sub2.component.html',
  styleUrl: './sub2.component.css'
})
export class Sub2Component {

  protected readonly mainlist = mainlist;
}
