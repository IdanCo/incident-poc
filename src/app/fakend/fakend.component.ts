import { Component, OnInit } from '@angular/core';
import {FakendService} from "../services/fakend/fakend.service";

@Component({
  selector: 'app-fakend',
  templateUrl: './fakend.component.html',
  styleUrls: ['./fakend.component.css'],
})
export class FakendComponent implements OnInit {
  errorMode = this.fakend.errorMode;

  constructor(private fakend: FakendService) { }

  ngOnInit() {

  }

  pushNewIncident() {
    this.fakend.pushNewIncident();
  }

  toggleErrorMode() {
    this.fakend.errorMode = !this.fakend.errorMode;
    this.errorMode = this.fakend.errorMode;
  }

}
