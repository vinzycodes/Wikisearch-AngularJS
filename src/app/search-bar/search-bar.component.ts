import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
