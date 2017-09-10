import {EventEmitter, Injectable} from '@angular/core';
import {Incident} from './incident.model';
import {FakendService} from "../fakend/fakend.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class IncidentService {
  incidentSelected = new EventEmitter<Incident>();
  private liveIncidentFeed = new Subject<Incident>();
  private LiveIncidentSubscription: Subscription;

  constructor(private fakendService: FakendService ) { }

  getIncidentsByFolder(folderId) {
    // IRL: return this.http...
    return this.fakendService.getIncidentsByFolder(folderId);
  }

  getLiveIncidentsFeed(): Observable<Incident> {
    this.subscribeToLiveIncidentsFeed();
    return this.liveIncidentFeed.asObservable();
  }

  subscribeToLiveIncidentsFeed() {
    if (!this.LiveIncidentSubscription) {
      this.LiveIncidentSubscription = this.fakendService.getLiveIncidentFeed()
        .subscribe(
          (incident: Incident) => this.pushNewIncident(incident)
        );
    }
  }

  pushNewIncident(incident: Incident) {
    this.liveIncidentFeed.next(incident);
  }

  setSelectedIncident(incident: Incident) {
    this.incidentSelected.emit(incident);
  }

}
