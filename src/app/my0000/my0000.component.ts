import { Component } from '@angular/core';
import {list0000} from '../list0000';
import { IonContent,IonItem,IonList,IonButton,IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my0000',
  imports: [IonContent,IonItem,IonList,IonButton,IonImg],
  templateUrl: './my0000.component.html',
  styleUrl: './my0000.component.css'
})
export class My0000Component {

  protected readonly list0000 = list0000;
}
