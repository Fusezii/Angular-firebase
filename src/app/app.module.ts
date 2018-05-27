import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//firebase
import { AngularFireModule} from 'angularfire2';
import { firebaseCon } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormComponent } from './layout/form/form.component';
import { EditmemberComponent } from './layout/editmember.component';
import { Route } from '@angular/compiler/src/core';



// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//const routes:Routes =[

     //{ path: 'editmember/:id', component: FormComponent}
//]


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseCon),
        AngularFireDatabaseModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
