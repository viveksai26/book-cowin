import { Component, OnInit } from '@angular/core';
import { NotificationService } from './modules/core/services/notification.service';
import { AuthenticationService } from './modules/shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private notificationService: NotificationService) {}
  title = 'bookCowin';
  ngOnInit() {
  }
}
