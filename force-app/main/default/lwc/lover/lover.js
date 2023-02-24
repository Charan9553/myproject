import { LightningElement } from 'lwc';

export default class Lover extends LightningElement {
    alpha = ''
    changeHandler(event){
this.alpha=event.target.value
    }
}