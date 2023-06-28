import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-funcionario-consulta',
  templateUrl: './funcionario-consulta.component.html',
  styleUrls: ['./funcionario-consulta.component.css']
})
export class FuncionarioConsultaComponent implements OnInit{
  funcionarios: any[] = [];
  mensagem_sucesso = '';
  mensagem_erro = '';
  pagina: number =1;


  handlePageChange(event: any): void{
    this.pagina = event;
  }

  constructor(private httpClient : HttpClient){

  }

  ngOnInit(): void {
    
    this.httpClient.get(environment.apiFuncionario)
                    .subscribe({
                     next: (result) => {
                      this.funcionarios = result as any[];
                      console.log(result)
                     },
                    error: (e) => {
                      console.log(e);
                    }
                    })

  }

  onDelete (idFuncionario: number): void{
    if(window.confirm('Deseja realmente excluir o funcionário selecionado?')){
      
      this.httpClient.delete(environment.apiStudio + "/" + idFuncionario, {responseType:"text"})
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


      window.alert("Funcionário excluido com sucesso");
    }

  }

  onEdit (idStudio: number): void{
    
      console.log(idStudio);

  }


}
