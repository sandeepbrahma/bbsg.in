import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

  ngOnInit(): void {
  }

  public m_message  = false;
  public apply_class  = {
    "open_menu": this.m_message ,
  }

  onClick() {
    console.log(this.m_message );
    this.m_message  = !this.m_message ;
  }


  // public m_button = false;

  // public apply_class = {
  //   "crapping": this.m_button,
  // }

  // constructor() { }

  // ngOnInit(): void {
  // }

  // onClick() {
  //   this.m_button = !this.m_button;
  //   console.log(this.m_button);


  // }

}
