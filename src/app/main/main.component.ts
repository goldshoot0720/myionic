import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { mainlist } from './mainlist';
import { IonContent, IonCol, IonRow } from "@ionic/angular/standalone";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
    imports: [IonRow, IonCol, IonContent,
        RouterLink
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  protected readonly mainlist = mainlist;
}
