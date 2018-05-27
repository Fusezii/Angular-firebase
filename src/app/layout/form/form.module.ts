import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';




@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,FormsModule,AngularFireDatabaseModule],
    declarations: [FormComponent],
    exports: [FormComponent]
})
export class FormModule {}
