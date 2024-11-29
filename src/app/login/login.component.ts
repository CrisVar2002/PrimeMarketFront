import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {lockClosedOutline, personOutline} from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class LoginComponent  implements OnInit {

  constructor() {
    addIcons({ personOutline, lockClosedOutline });
  }

  ngOnInit() {}

}
