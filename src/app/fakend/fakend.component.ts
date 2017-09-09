import { Component, OnInit } from '@angular/core';
import {FakendService} from "../services/fakend/fakend.service";

@Component({
  selector: 'app-fakend',
  templateUrl: './fakend.component.html',
  styleUrls: ['./fakend.component.css'],
})
export class FakendComponent implements OnInit {

  constructor(private fakend: FakendService) { }

  ngOnInit() {
  }

  pushNewIncident() {
    this.fakend.pushNewIncident();
  }

}
