import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SnoozeService} from '../../services/snooze/snooze.service';
import {Incident} from '../../services/incident/incident.model';
import {SnoozeData} from '../../services/snooze/snooze-data.model';
import {IncidentService} from "../../services/incident/incident.service";

@Component({
  selector: 'app-snooze-button',
  templateUrl: './snooze-button.component.html',
  styleUrls: ['./snooze-button.component.css']
})
export class SnoozeButtonComponent implements OnInit {
  @Input() incident: Incident;
  snoozeData: SnoozeData;

  constructor(private snoozeService: SnoozeService,
              private incidentService: IncidentService) { }

  ngOnInit() {
    this.getSnooze();
  }

  toggleSnooze() {
    const originalIncident:Incident = Object.assign({}, this.incident);

    this.snoozeService.toggleSnooze(this.incident)
      .subscribe(
        (optimisticIncident) => {
          this.incidentService.pushNewIncident(optimisticIncident);
          console.info('pushed optimistic incident');
        },
        (error) => {
          this.incidentService.pushNewIncident(originalIncident);
          console.info('error', this.incident, originalIncident)
        },
        () => console.info('done')
      );
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
