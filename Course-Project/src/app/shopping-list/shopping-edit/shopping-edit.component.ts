import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    //  Take the input field values and create a new Ingredient Object
    //  then pass this new instance of the Ingredient to the event
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    //  Check if the input fields were written
    if(ingName && ingAmount) {
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.ingredientAdded.emit(newIngredient);
    } else {
      alert('Please, write the name and amount of the ingredients!');
    }
    
    // Clean the input fields
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

}
