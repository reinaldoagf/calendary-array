import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
declare var require: any
var calendar = require('calendar-month-array')
var sprintf = require('sprintf')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	//inputs
	public day:string='';
	public value:string='';
	//inputs
	public date:Date=moment().utc().toDate();
	public year:any=moment().utc().format("yyyy");
	public month:any=moment().utc().format("MM")
	public weeks = calendar(this.date, { 
		weekStartDay: 1,
		formatHeader: (date:any) => date.toString().slice(0, 2),
		formatDate: (date:any) => sprintf('%2d', date.getDate()),
		formatSiblingMonthDate: () => '  '
	})	
	public dateResult:any=null;
	ngOnInit(){
		console.log("moment().utc().toDate():",this.date)
		console.log("weeks:",this.weeks)
	}
	getDay(){
		let index=null;
		let acum=0;
		for(let a of this.weeks){
			for(let b of a){
				if(this.day.toLowerCase()=="lunes" && b.toLowerCase()=="mo"){
					index=a.indexOf(b);
				}
				if(this.day.toLowerCase()=="martes" && b.toLowerCase()=="tu"){
					index=a.indexOf(b);
				}
				if(this.day.toLowerCase()=="miercoles" && b.toLowerCase()=="we"){
					index=a.indexOf(b);
				}
				if(this.day.toLowerCase()=="jueves" && b.toLowerCase()=="th"){
					index=a.indexOf(b);
				}
				if(this.day.toLowerCase()=="viernes" && b.toLowerCase()=="fr"){
					index=a.indexOf(b);
				}
				if(this.day.toLowerCase()=="sabado" && b.toLowerCase()=="sa"){
					index=a.indexOf(b);
				}
				if(this.day.toLowerCase()=="domingo" && b.toLowerCase()=="su"){
					index=a.indexOf(b);
				}
				if(a.indexOf(b)==index){
					if(acum==parseInt(this.value) && (b && b!="  ")){
						console.log("fecha:",`${b}/${this.month}/${this.year}`)
						this.dateResult=`${b}/${this.month}/${this.year}`
					}
					acum=(b && b!="  ")?acum+1:acum
				}
			}
		}
	}
}
