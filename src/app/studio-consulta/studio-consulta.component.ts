import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-studio-consulta',
  templateUrl: './studio-consulta.component.html',
  styleUrls: ['./studio-consulta.component.css']
})
export class StudioConsultaComponent implements OnInit {

  studios: any[] = [];
  mensagem_sucesso = '';
  mensagem_erro = '';

  constructor(private httpClient : HttpClient){

  }

  ngOnInit(): void {
    
    this.httpClient.get(environment.apiStudio)
                    .subscribe({
                     next: (result) => {
                      this.studios = result as any[];
                      console.log(result)
                     },
                    error: (e) => {
                      console.log(e);
                    }
                    })

  }

  onDelete (idStudio: number): void{
    if(window.confirm('Deseja realmente excluir o studio selecionado?')){
      
      this.httpClient.delete(environment.apiStudio + "/" + idStudio, {responseType:"text"})
                      .subscribe(
                        {
                          next: (result) => {
                            this.mensagem_sucesso = result;
                            this.ngOnInit();
                          },
                          error: (e) => {
                            this.mensagem_erro = e;
                          }
                        }
                      )


      window.alert("Studio excluido com sucesso");
    }

  }

  onEdit (idStudio: number): void{
    
      console.log(idStudio);

  }

}
