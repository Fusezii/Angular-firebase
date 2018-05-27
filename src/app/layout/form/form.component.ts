import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {AngularFireDatabase} from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit   {
    mem: any= {};
    title: string = "เพิ่มข้อมูลสมาชิก";
    defaultSex = '0';
    //submit ="ตกลง"
    id;
    constructor(private db: AngularFireDatabase, private route: ActivatedRoute,private router:Router){}
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        if(this.id){
            this.title = "แก้ไขข้อมูลสมาชิก";
            //this.submit="บันทึก";
            this.getMemberByKey(this.id).subscribe(res=>{
                console.log(res);
                this.mem = res;
            })
        }
    }

    addForm(data: NgForm){
       
       if(this.id){
           this.db.list("member").update(this.id,data.value).then(this.goToTable);
           
       }else{

        this.db.list("member").push(data.value).then(this.goToTable).then((resp) => {
            if(resp){
                alert('บันทึกข้อมูลสมาชิกเรียบร้อย');
            }
        });  
    }
    }

    getMemberByKey(id){
        console.log(id)
        return this.db.object('member/' + id).snapshotChanges().map(res => {
           return res.payload.val();
        });
    }

    goToTable=()=>{
        this.router.navigate(['tables']);
    }
}
