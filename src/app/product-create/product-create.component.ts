import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  prodForm;
  prodDetails:[];
  
  constructor(private fb:FormBuilder) { 
    this.prodForm = this.fb.group({  
      'Productname' : this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      'Product-price':this.fb.control('',[Validators.required,Validators.maxLength(10)]),
      'product-stock-availability':this.fb.control('',[Validators.required,Validators.max(3)]),


    })

    


  }

  submitForm(){
    if(this.prodForm.valid){
       console.log(this.prodForm.value);
      
    }}

  ngOnInit() {
    

  }

}
