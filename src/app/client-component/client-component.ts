import { Component, OnInit } from '@angular/core';
import { Clients } from '../client';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../client-service';

@Component({
  selector: 'app-client-component',
  standalone: false,
  templateUrl: './client-component.html',
  styleUrl: './client-component.css'
})
export class ClientComponent implements OnInit {
  clients: Clients[] = [];
  formGroupClients: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ClientService) {
    this.formGroupClients = formBuilder.group({
      idClient: [''],
      nameClient: [''],
      phoneClient: [''],
      emailClient: ['']
    })
  }
  ngOnInit(): void {
    this.service.getAllClients().subscribe();
  }
  save() {
    this.clients.push(this.formGroupClients.value);
    this.formGroupClients.reset();
  }

}
