import { LightningElement, track } from 'lwc';

export default class Wireadapters2 extends LightningElement {
    @track attendanceColl 
       clickHandler(event){
        attMethod().then(data=>{
            this.attendanceColl=data
        }).catch(error=>{
            console.error(error)
        })
    }

}