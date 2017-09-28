import {Component, Input, Output, EventEmitter, ViewChild, OnInit, OnDestroy} from '@angular/core'
import { Subscription }   from 'rxjs/Subscription';
import {dataService} from './dataservice.service';

@Component({
    selector : 'datatable',
    template: `{{dataFromregister}}`,
}) 
export class Datatable 
{
    dataFromregister: string;
    subscription = dataService.regFormObservable$.subscribe(
      formData => {
        this.dataFromregister = formData;
        console.log("register component, ", formData);
    });
    ngOnDestroy() {
        this.subscription.unsubscribe();

}
  }
    
    