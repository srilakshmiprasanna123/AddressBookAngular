export class AddressBookAngular {
    firstName:String;
    lastName:String;
    phone:String;
    email:String;
    city:String;
    state:String;
    zip:String;
    
    constructor( firstName:String,lastName:String,phone:String, email:String, city:String, state:String,zip:String){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.city = city;
        this.state = state;
        this.zip = zip;
        
    }
}