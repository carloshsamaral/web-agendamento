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
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit{

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';


  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {

  }



  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    tipofuncionario: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    logradouro: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    localidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  onKeyUp(event: any) {
    const cep = (event.target as HTMLInputElement).value;
    
    if (cep.length == 8) {
      this.httpClient.get(environment.apiCep + "/ws/" + cep + "/json/").subscribe
      (
          (result: any) => {
           this.formCadastro.patchValue(result)
          }
        )
    }
    else {
      this.formCadastro.controls['logradouro'].setValue('');
      this.formCadastro.controls['bairro'].setValue('');
      this.formCadastro.controls['localidade'].setValue('');
      this.formCadastro.controls['uf'].setValue('');
    }
  }

  onSubmit(): void {

    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
    console.log(this.formCadastro.value);
    this.httpClient.post(environment.apiFuncionario,
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
