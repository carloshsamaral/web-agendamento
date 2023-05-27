import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}
@Component({
  selector: 'app-studio-cadastro',
  templateUrl: './studio-cadastro.component.html',
  styleUrls: ['./studio-cadastro.component.css']
})
export class StudioCadastroComponent implements OnInit {

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';


  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {

  }


  formCadastro = new FormGroup({
    nomeFantasia: new FormControl('', [Validators.required]),
    razaoSocial: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {

    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
    
    this.httpClient.post(environment.apiStudio,
      this.formCadastro.value,
      { responseType: 'text' })
      .subscribe(
        {
          next: (result) => {
            this.mensagem_sucesso = result;
            this.formCadastro.reset;
          },
          error: (e) => {
            this.mensagem_erro = e.error;

          }
        }
      )
      ;
  }
}
