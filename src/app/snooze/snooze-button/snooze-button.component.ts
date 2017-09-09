import {Component, Input, OnInit} from '@angular/core';
import {SnoozeService} from '../../services/snooze/snooze.service';
import {Incident} from '../../services/incident/incident.model';
import {SnoozeData} from '../../services/snooze/snooze-data.model';

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
    this.getSnooze();
  }

  toggleStatus() {
    this.snoozeData.snoozed = !this.snoozeData.snoozed;
  }

  getSnooze() {
    this.snoozeService.getSnoozeByIncident(this.incident)
      .subscribe(
        (snooze) => {
          this.snoozeData = snooze;
          console.info(this.snoozeData);
        }
      );
  }

}
