class Customer_1{
    constructor(private _firstName:string,private _lastName:string){
         
    }
    
    public get firstName() : string {
        return this._firstName;
    }

    
    public set setFirstName(v : string) {
        this._firstName = v;
    }

    
    public get lastName() : string {
        return this._lastName;
    }
    
    
    
}

let myCustomer1 = new Customer_1("Tony","Stark");
console.log(myCustomer1.firstName +" "+ myCustomer1.lastName);