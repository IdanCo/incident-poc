import {Component, Input, OnInit} from '@angular/core';
import {SnoozeService} from '../snooze.service';
import {Incident} from '../../incidents/incident.model';
import {SnoozeData} from '../snooze-data.model';

@Component({
  selector: 'app-snooze-button',
  templateUrl: './snooze-button.component.html',
  styleUrls: ['./snooze-button.component.css']
})
export class SnoozeButtonComponent implements OnInit {
  @Input() incident: Incident;
  snoozeData: SnoozeData;

  constructor(private snoozeService: SnoozeService) { }

  ngOnInit() {
    this.snoozeData = this.snoozeService.getSnoozeData(this.incident);
    console.info(this.snoozeData);
  }

  toggleStatus() {
    this.snoozeData.snoozed = !this.snoozeData.snoozed;
  }

}
