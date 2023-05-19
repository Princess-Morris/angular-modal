import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
public getJsonValue: any;
public displayColumn: string[] = ["issuId", "loggedData", "actor", "action"];
public dataSource: any = [];

constructor(private http: HttpClient){}

ngOnInit(): void{
   this.getMethod();
}

public getMethod(){
  this.http.get("http://localhost:5000/lists").subscribe((data) => {
    console.log(data);
    this.getJsonValue = data;
    this.dataSource = data;
  })
}
}
