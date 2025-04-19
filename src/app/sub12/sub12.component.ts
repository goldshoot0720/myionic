import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';
import { IonImg, IonContent, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sub12',
  imports: [IonText, IonContent, IonImg,RouterLink],
  templateUrl: './sub12.component.html',
  styleUrl: './sub12.component.css'
})
export class Sub12Component {

  protected readonly mainlist = mainlist;
}
