import { Component, OnInit } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  date = '';
  title = 'CRMLaPuertaFrontend';


  constructor(private utils: UtilsService) {}


  ngOnInit() {
    this.date = this.utils.whatTimeIs();
  }

}
