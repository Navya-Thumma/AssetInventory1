/*import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-start1',
  templateUrl: './start1.component.html',
  styleUrls: ['./start1.component.scss']
})
export class Start1Component implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','indicator'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  indicator:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 10012, name: 'laptop-Electronics', weight: 'Hyderabad', symbol: 'H',indicator:'low'},
  {position: 10013, name: 'Broiler-productions', weight: 'Bangalore', symbol: 'He',indicator:'In'},
  {position: 10014, name: 'Watch-Accessories', weight: 'Indore', symbol: 'Li',indicator:'Out'},
  {position: 10015, name: 'Sofa-Furniture', weight: 'Mumbai', symbol: 'Be',indicator:'In'},
  {position: 10016, name: 'Phone-Electronics', weight: 'Delhi', symbol: 'B',indicator:'Out'},
  {position: 10017, name: 'Jacket-Clothing', weight: 'chennai', symbol: 'C',indicator:'low'},
  {position: 10018, name: 'Iron-Appliancies', weight: 'Hyderabad', symbol: 'N',indicator:'In'},
  {position: 10019, name: 'TV-Appliances', weight: 'Mumbai', symbol: 'O',indicator:'In'},
  {position: 10020, name: 'Table-Furniture', weight: 'pune', symbol: 'F',indicator:'Out'},
  {position: 10021, name: 'PowerBank-Electronics', weight: 'pune', symbol: 'Ne',indicator:'low'},
  {position: 10022, name: 'Bed-Furniture', weight: 'chennai', symbol: 'Na',indicator:'In'},
  {position: 10023, name: 'Mac-Electronics', weight: 'Hyderabad', symbol: 'Mg',indicator:'Out'},
  {position: 10024, name: 'Shoes-Sportswear', weight: 'Bangalore', symbol: 'Al',indicator:'Out'},
  {position: 10025, name: 'chain-Accessories', weight: 'Mumbai', symbol: 'Si',indicator:'low'},
 /* {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},*/
/*];*/

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router } from '@angular/router';
@Component({
  selector: 'app-start1',
  templateUrl: './start1.component.html',
  styleUrls: ['./start1.component.scss']
})
export class Start1Component implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight','indicator', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  indicator:string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 10012, name: 'laptop-Electronics', weight: 'Hyderabad',indicator:'low', symbol: 'H'},
  {position: 10013, name: 'Chair-Furniture', weight: 'Bangalore',indicator:'In', symbol: 'H'},
  {position: 10014, name: 'Watch-Accessories', weight: 'Indore',indicator:'Out', symbol: 'Li'},
  {position: 10015, name: 'Sofa-Furniture', weight: 'Mumbai',indicator:'In', symbol: 'Be'},
  {position: 10016, name: 'Phone-Electronics', weight: 'Delhi',indicator:'Out', symbol: 'B'},
  {position: 10017, name: 'Jacket-Clothing', weight: 'chennai',indicator:'low', symbol: 'C'},
  {position: 10018, name: 'Iron-Appliancies', weight: 'Hyderabad',indicator:'In', symbol: 'N'},
  {position: 10019, name: 'TV-Appliances', weight: 'Mumbai',indicator:'In', symbol: 'O'},
  {position: 10020, name: 'Table-Furniture', weight: 'pune',indicator:'Out', symbol: 'F'},
  {position: 10021, name: 'PowerBank-Electronics', weight: 'pune',indicator:'low', symbol: 'Ne'},
  {position: 10022, name: 'Bed-Furniture', weight: 'chennai',indicator:'In', symbol: 'Na'},
  {position: 10023, name: 'iPod-Electronics', weight: 'Hyderabad',indicator:'Out', symbol: 'Mg'},
  {position: 10024, name: 'Shoes-Sportswear', weight: 'Bangalore',indicator:'Out', symbol: 'Al'},
  {position: 10025, name: 'Bracelet-Accessories', weight: 'Mumbai',indicator:'low', symbol: 'Si'},
 /* {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},*/
];

