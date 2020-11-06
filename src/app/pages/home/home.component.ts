import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public date = "";

  constructor(private utils : UtilsService) { }

  ngOnInit(): void {

    this.date = this.utils.whatTimeIs();
    
  }

}
