import { Injectable } from '@angular/core';
import {Folder} from "./folders.model";

@Injectable()
export class FoldersService {
  private folders: Folder[] = [
      {
        id: 'active',
        title: 'Active'
      },
      {
        id: 'snoozed',
        title: 'Snoozed'
      }
  ];

  constructor() { }

  getFolders() {
    return this.folders;
  }

}
