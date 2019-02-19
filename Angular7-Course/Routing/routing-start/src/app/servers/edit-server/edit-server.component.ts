import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactive } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactive, OnDestroy {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  paramsSubscript: Subscription;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Retriving router params values
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // Reat to changes on the params with subscribe
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    // Subcribe route params to update the id if params change
    // this.paramsSubscript = this.route.params.subscribe((params: Params) => {
    //   this.server.id = params['id'];
    // });

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy() {
    // this.paramsSubscript.unsubscribe();
  }

  onUpdateServer() {
    this.serversService
      .updateServer(
        this.server.id, 
        {
          name: this.serverName,
          status: this.serverStatus
        });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) 
        && !this.changesSaved) {
          return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
