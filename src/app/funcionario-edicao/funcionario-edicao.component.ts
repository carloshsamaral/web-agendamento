import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-funcionario-edicao',
  templateUrl: './funcionario-edicao.component.html',
  styleUrls: ['./funcionario-edicao.component.css']
})
export class FuncionarioEdicaoComponent implements OnInit{

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
  meuArray: any[] = [];

  constructor ( 
    private httpClient : HttpClient,
    private activatedRoute : ActivatedRoute
  ) {
    
  }

  formEdicao = new FormGroup({
    id_funcionario : new FormControl('', [Validators.required]),
    nome : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    telefone : new FormControl('', [Validators.required]),
    cpf : new FormControl('', [Validators.required]),
    tipofuncionario : new FormControl('', [Validators.required]),
    cep : new FormControl('', [Validators.required]),
    logradouro : new FormControl('', [Validators.required]),
    })


    get form() : any {
      return this.formEdicao.controls;
    }

    ngOnInit(): void {
      
      var idFuncionario = this.activatedRoute.snapshot.paramMap.get('idFuncionario');
      this.httpClient.get(environment.apiFuncionario + '/' + idFuncionario).subscribe(
        {
          next: (result) => {
            
            console.log()
            this.formEdicao.patchValue(result)
            
          },
          error: (e) => {
            console.log(e)
          }
        }
      )
    }

    onSubmit():void {

      this.mensagem_erro = ''
      this.mensagem_sucesso =''
      this.httpClient.put(environment.apiStudio, this.formEdicao.value, { responseType:'text'})
      .subscribe(
        {
        next: (result) => {
          this.mensagem_sucesso = result;
        },
        error: (e) => {
          this.mensagem_erro = e;
          console.log(e);
        }
        }
      )

    }
    onKeyUp(event: any) {
      const cep = (event.target as HTMLInputElement).value;
      
      if (cep.length == 8) {
        this.httpClient.get(environment.apiCep + "/ws/" + cep + "/json/").subscribe
        (
            (result: any) => {
             this.formEdicao.patchValue(result)
             this.formEdicao.controls['logradouro'].setValue(result[0].enderecoList.logradouro);
             console.log('teste')
            }
          )
      }
      else {
        /*this.formEdicao.controls['logradouro'].setValue('');
        this.formEdicao.controls['bairro'].setValue('');
        this.formEdicao.controls['localidade'].setValue('');
        this.formEdicao.controls['uf'].setValue('');*/
    }
  }
}
