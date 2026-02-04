import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-secao-contato',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './secao-contato.html',
  styleUrl: './secao-contato.css',
})

export class SecaoContato {

  form : FormGroup;
  
  constructor(private fb : FormBuilder){
    this.form = this.fb.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      tel : ['', [Validators.required]],
      empresa : ['', [Validators.required]],
      assunto : ['', [Validators.required]],
      messagem : ['', [Validators.required]]
    })
  }

}
