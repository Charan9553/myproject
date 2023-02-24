import id from '@salesforce/user/Id';
import { LightningElement, wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'

const Fields =[
    'contact.cname',
    'contact.ctittle',
    'contact.cphone',
    'contact.cemail',
    'contact.department'];
    


export default class Wireadapters extends LightningElement {
    @api recordId;
    
    

    @wire (getRecord, { recordID : '0035i00000Gk48uAAB' , fields : Fields })

    contact;
    get name (){
      
        return this.contact.data.fields.name.value
    }
    get tittle (){
        return this.contact.data.fields.tittle.value
    }
    get phone (){
        return this.contact.data.fields.pone.value
    }
    
    get email (){
        return this.contact.data.fields.email.value
    }
    get department (){
        return this.contact.data.fields.email.value
    }
    

}