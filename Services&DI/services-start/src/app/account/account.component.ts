import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [ LoggingService ] // tells Angular how to create the log service
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Tells Angular that we want to use the service
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //  Create an instance of a service and access it's method to log the server status
    // this.loggingService.logStatusChange(status);
  }
}
