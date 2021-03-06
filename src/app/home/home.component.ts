import { Component, OnInit } from '@angular/core';
import { AwsService } from '../services/aws/aws.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aws: AwsService) { }

  ngOnInit() {
    AwsService.authResult.next(this.aws.isAuthenticated())
  }

}
