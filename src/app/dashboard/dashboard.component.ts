import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressbookService } from '../addressbook.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addressbookangular: any;
  http: any;

  constructor(private router:Router, private service:AddressbookService) { }

  ngOnInit(): void {
    this.getAllAddressBookAngular();
  }

  onAddUser(){
    this.router.navigate(["form"]);
  }

  getAllAddressBookAngular(){
    this.service.getAddressbookangular().subscribe((data:any) => {
      this.addressbookangular = data.data;
    })
  }

  deleteAddresssBookById(id:number){
    this.service.deleteAddressBookById(id).subscribe((data)=>{
      this.ngOnInit();
      this.router.navigate(["dashboard"]);
    });

  }

    updateById(id:number){
      this.router.navigate(['update',id]);
    }


}



