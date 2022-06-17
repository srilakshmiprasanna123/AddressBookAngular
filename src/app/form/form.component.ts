import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookService } from '../addressbook.service';
import { AddressBookAngular } from './Model/addressbookangular';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router, private service:AddressbookService, private route:ActivatedRoute) { } 
  addressbookangular:AddressBookAngular=new AddressBookAngular("","","","","","","")
  id: any = this.route.snapshot.paramMap.get("id");

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addressbookangular);
     this.service.addAddressbookangular(this.addressbookangular).subscribe((data: any)=> 
    {
      this.router.navigate(["dashboard"])
    })
}

  onCancle(){
    this.router.navigate(["dashboard"]);
  }

  updateAddressBookAngular() {
    this.service.updateAddressBookById(this.addressbookangular, this.id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });  
  }
}