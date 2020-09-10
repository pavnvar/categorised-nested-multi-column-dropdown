import { Component, OnInit, ElementRef, ViewChild ,EventEmitter,Output,Input} from '@angular/core';

@Component({
  selector: 'app-multicat-nested-dropdown',
  templateUrl: './multicat-nested-dropdown.component.html',
  styleUrls: ['./multicat-nested-dropdown.component.css']
})
export class MulticatNestedDropdownComponent implements OnInit {
  

  
  @Input() proVersionArray:Array<Object>;
  @Input() buildVersionArray:Array<Object>;
  @Input() selectedProVersion:string;
  @Input() selectedbuildVersion :string;
  
  button_toggle = false;

  @Output() dropdownValueChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
   

  }

  ChangeparentDropdown(event){
    
 
    this.dropdownValueChanged.emit({
      selectedProVersion:this.selectedProVersion,
      selectedbuildVersion:this.selectedbuildVersion});

  }

  ChangechildDropdown(event){
    
    this.dropdownValueChanged.emit({
      selectedProVersion:this.selectedProVersion,
      selectedbuildVersion:this.selectedbuildVersion});
  }

  toggleListBox(event) {
    this.button_toggle = !this.button_toggle;
    

  }
  


}



