import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule,MatFormFieldModule, MatToolbarModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatAutocompleteModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ViewComponent } from './view/view.component';
import { CloneComponent } from './clone/clone.component';
import { TransferComponent } from './transfer/transfer.component';
import { StartComponent } from './start/start.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ItemComponent } from './item/item.component'

const appRoutes: Routes = [
  {path:'view' , component: ViewComponent},
  {path:'transfer' , component: TransferComponent},
  {path:'clone' , component: CloneComponent},
  {path:'start', component:StartComponent},
  {path:'receipt', component:ReceiptComponent},
  {path:'item', component:ItemComponent},
]; 
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CloneComponent,
    TransferComponent,
    StartComponent,
    ReceiptComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
