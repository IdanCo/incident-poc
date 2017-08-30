import { Component, OnInit } from '@angular/core';
import {FoldersService} from "./folders.service";
import {Folder} from "./folders.model";

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
  providers: [FoldersService]
})
export class FoldersComponent implements OnInit {
  folders: Folder[];

  constructor(private folderService: FoldersService) { }

  ngOnInit() {
    this.folders = this.folderService.getFolders();
  }

}
