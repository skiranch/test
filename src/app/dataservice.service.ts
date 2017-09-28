import{Injectable} from '@angular/core';
import{Subject} from 'rxjs/Subject';

@Injectable()
export class dataService{
    static regFormObservable$: any;
    public regFormdata = new Subject<string>();
    regFormObservable$=this.regFormdata.asObservable();

    private loginFormdata= new Subject<string>();
    loginFormobservables$= this.loginFormdata.asObservable();

    private guestloginFormdata = new Subject <string>();
    guestloginobservables$= this.guestloginFormdata.asObservable();

    onDataChangeinregForm(data: any){
        this.regFormdata.next(data);
    }

    onDataChangeinloginForm(data: any){
        this.loginFormdata.next(data);
    }

}


