import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    memberList: AngularFireList<any>;
    member: any[];
    constructor(db: AngularFireDatabase, private router: Router) {
    this.memberList = db.list('member');
}
    ngOnInit() {
        this.memberList.snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, value: action.payload.val() }));
        }).subscribe(items => {
            this.member = items;
        });
    }
    editmember(data) {
        this.router.navigate([`/editmember/${data.key}`]);
    }
    delmember(data) {
        this.memberList.remove(data.key);
    }
   
}
