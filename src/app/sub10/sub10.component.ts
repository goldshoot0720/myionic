import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';
import { IonImg, IonContent, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub10',
  imports: [IonText, IonContent, IonImg,RouterLink],
  templateUrl: './sub10.component.html',
  styleUrl: './sub10.component.css'
})

export class Sub10Component {

  protected readonly mainlist = mainlist;
}
