import { LightningElement, wire,api } from 'lwc';
import methodName from '@salesforce/apex/accountwire.methodName'
const colums= [
    {label:"id",fieldname :"id"},
    {label:"Name",fieldname:"Name"},
    {label:"Annual Revenue", fieldname:"AnnualRevenue"},
    {label:"Rating",fieldname:"Rating"},
    {label:"Industry",fieldname:"Industry"},
    {label:"Phone",fieldname:"Phone"}
]
export default class Wiremethod1 extends LightningElement {
@api accdetails
  @api cols=colums
@wire (methodName) 
Accountfunction(data,error){
    if(data){
        this.Accountdetails=data
    }else if(error){
        console.error(error)
    }

}




    
}