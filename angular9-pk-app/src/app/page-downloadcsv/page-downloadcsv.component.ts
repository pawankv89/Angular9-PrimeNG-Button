import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { DownloadService } from '../download-file.service'

@Component({
  selector: 'app-page-downloadcsv',
  templateUrl: './page-downloadcsv.component.html',
  styleUrls: ['./page-downloadcsv.component.scss']
})
export class PageDownloadcsvComponent implements OnInit {

  constructor(private downloadService: DownloadService) { }

  ngOnInit(): void {
  }

  clickButton(){
    alert('Click me');
  }
}
