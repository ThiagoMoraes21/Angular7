import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // tells Angular how to create the log service
})
export class NewAccountComponent {

  // Tells Angular that we want to use the service
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService) {
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert(`New status: ${status}`)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);

    //  Create an instance of a service and access it's method to log the server status
    // this.loggingService.logStatusChange(accountStatus);
  }
}
