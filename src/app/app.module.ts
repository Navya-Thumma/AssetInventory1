import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
// import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {MatInputModule,MatFormFieldModule, MatToolbarModule, MatCheckboxModule, MatSelectModule,
// MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatAutocompleteModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ViewComponent } from './view/view.component';
import { CloneComponent } from './clone/clone.component';
import { TransferComponent } from './transfer/transfer.component';
import { StartComponent } from './start/start.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ItemComponent } from './item/item.component';
import { Start1Component } from './start1/start1.component';
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
// import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { DetailsComponent } from './details/details.component';
//import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxBarcodeModule } from 'ngx-barcode';
import { Clone1Component } from './clone1/clone1.component';

const appRoutes: Routes = [
  {path: 'view' , component: ViewComponent},
  {path: 'transfer' , component: TransferComponent},
  {path: 'clone' , component: CloneComponent},
  {path: 'clone1' , component: Clone1Component},
  {path: 'start', component: StartComponent},
  {path: 'start1', component: Start1Component},
  {path: 'receipt', component: ReceiptComponent},
  {path: 'item', component: ItemComponent},
  {path: 'details', component: DetailsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CloneComponent,
    TransferComponent,
    StartComponent,
    ReceiptComponent,
    ItemComponent,
    Start1Component,
    DetailsComponent,
    Clone1Component,
   // BrowserAnimationsModule
  ],
  imports: [
    NgxBarcodeModule,
   
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    // MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
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
  exports: [A11yModule,
    // ClipboardModule,
    BrowserAnimationsModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
