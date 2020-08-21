//Wizard form data class Starts
export class FormData {
    first_name: string = '';
    last_name : string = '';
    email: string = '';
    password : string ='';
    company_name : string ='';
    country_id :string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.company_name='';
        this.password='';
        this.country_id='';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
//Wizard form data class Ends

//Personal tab data class starts
export class Personal {
    first_name: string = '';
    last_name : string = '';
    email: string = '';
    password : string ='';
    company_name : string ='';
    country_id :string = '';
}
//Personal tab data class ends

//Address tab data class starts
export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}
//Address tab data class Ends