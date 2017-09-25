import {Component} from '@angular/core';
import {register } from './register/register.component';

@Component ({
    selector: ,
    templateUrl:[`<div>
    <table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Number</th>
        <th>City</th>
        <th>Country</th>
    </tr>
</thead>
<tbody>
    <tr *ngfor="let group of RegForm">
        <td>{{group.myname}}</td>
        <td>{{group.mynumber}}</td>
        <td>{{group.mycity}}</td>
        <td>{{group.myCountry}}</td>
    </tr>
</tbody>
</table>`]
    style:[

    ]
})