import { NgModule } from '@angular/core';
import { firebaseConfig } from '../../app.module';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { CommonModule } from '@angular/common';
import {DataTableModule} from "angular2-datatable";

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,  AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    TablesRoutingModule,
    DataTableModule,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ AngularFireDatabase ],
  declarations: [ TablesComponent ]
})
export class TablesModule { }
