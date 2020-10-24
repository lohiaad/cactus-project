import { Component, OnInit } from '@angular/core';
import {UserService} from '@cactus/services'
@Component({
  selector: 'cactus-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public userService: UserService) {}

  ngOnInit(): void {
  }

}
