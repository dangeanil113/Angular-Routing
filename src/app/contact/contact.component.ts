import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Enquiry} from '../enquiry'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  courses=["Java","Angular","React JS","Node JS"]
  enquiry1=new Enquiry('','damgeanil115@gmail.com',8855063465,'Male','java','Online');

  ngOnInit(): void {
  }

}
