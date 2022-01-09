import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { TypeSelectionComponent } from './tree/type-selection/type-selection.component';
import {MatSelectModule} from "@angular/material/select";
import { TreeListComponent } from './tree/tree-list/tree-list.component';
import { TreeDisplayComponent } from './tree/tree-display/tree-display.component';
import { SaleComponent } from './tree/sale/sale.component';
import { UserForm } from './tree/user-form.component.ts/user-form.component.ts.component';
import { UserFormComponent } from './tree/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeComponent,
    TypeSelectionComponent,
    TreeListComponent,
    TreeDisplayComponent,
    SaleComponent,
    UserForm.Component.TsComponent,
    UserFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        MatSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
