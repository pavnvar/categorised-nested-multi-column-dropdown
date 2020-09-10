import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'tiered-dropdown';
  proVersionArray = [];
  selectedProVersion = "";


  buildVersionArray = [];
  selectedbuildVersion = "";

  ngOnInit() {
    this.proVersionArray = [
      { label: '6.3.1', value: '6.3.1'},
      { label: '6.3.2', value: '6.3.2'},
      { label: '6.3.3', value: '6.3.3'},
      { label: '6.3.4', value: '6.3.4'},
      { label: '6.3.5', value: '6.3.5'},
      { label: '6.3.6', value: '6.3.6'},
      { label: '6.3.7', value: '6.3.7'},
      { label: '6.3.8', value: '6.3.8'},
      { label: '6.3.9', value: '6.3.9'},
      { label: '6.4.0', value: '6.4.0'}
    ];

    this.buildVersionArray = [
      { label: '3.4', value: '3.4' },
      { label: '3.5', value: '3.5' },
      { label: '3.6', value: '3.6' },
      { label: '3.7', value: '3.7' },
      { label: '3.8', value: '3.8' },
      { label: '3.9', value: '3.9' },
      { label: '4.0', value: '4.0' },
      { label: '4.1', value: '4.1' },
      { label: '4.2', value: '4.2' },
      { label: '4.3', value: '4.3'}
    ];

  }
  ValueChanged(event){
    console.log("value change event triggered",event)
  }

}

