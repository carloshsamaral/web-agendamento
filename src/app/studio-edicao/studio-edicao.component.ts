import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-studio-edicao',
  templateUrl: './studio-edicao.component.html',
  styleUrls: ['./studio-edicao.component.css']
})
export class StudioEdicaoComponent implements OnInit{

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  constructor ( 
    private httpClient : HttpClient,
    private activatedRoute : ActivatedRoute
  ) {
    
  }

  formEdicao = new FormGroup({
    id_studio : new FormControl('', [Validators.required]),
    nomeFantasia : new FormControl('', [Validators.required]),
    razaoSocial : new FormControl('', [Validators.required]),
    cnpj : new FormControl('', [Validators.required]),
    })


    get form() : any {
      return this.formEdicao.controls;
    }

    ngOnInit(): void {
      //this.activatedRoute.snapshot.paramMap.get('idStudio')
      var idStudio = this.activatedRoute.snapshot.paramMap.get('idStudio');
      this.httpClient.get(environment.apiStudio + '/' + idStudio).subscribe(
        {
          next: (result) => {
            console.log(result)
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
      console.log(this.formEdicao.value);
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

}
