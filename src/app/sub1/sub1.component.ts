import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from "../main/mainlist";
import { IonButton, IonContent, IonImg, IonText, IonLoading, IonTitle, IonToolbar, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub1',
  imports: [IonText, IonImg, IonContent, IonButton,
    RouterLink
  ],
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.css'
})
export class Sub1Component {

  protected readonly mainlist = mainlist;
}
