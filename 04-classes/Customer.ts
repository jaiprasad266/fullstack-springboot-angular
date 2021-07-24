class Customer{
    private _firstName:string
    private _lastName:string
    constructor(theFirst:string,theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
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

let myCustomer = new Customer("Tony","Stark");
console.log(myCustomer.firstName +" "+ myCustomer.lastName);