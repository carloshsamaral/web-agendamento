import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioConsultaComponent } from './funcionario-consulta/funcionario-consulta.component';
import { FuncionarioEdicaoComponent } from './funcionario-edicao/funcionario-edicao.component';
import { StudioCadastroComponent } from './studio-cadastro/studio-cadastro.component';
import { StudioConsultaComponent } from './studio-consulta/studio-consulta.component';
import { StudioEdicaoComponent } from './studio-edicao/studio-edicao.component';

const routes : Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'studio-consulta' },
  { path : 'studio-cadastro', component: StudioCadastroComponent},
  { path : 'studio-consulta', component: StudioConsultaComponent},
  { path : 'studio-edicao/:idStudio', component: StudioEdicaoComponent},
  { path : 'funcionario-cadastro', component: FuncionarioCadastroComponent},
  { path : 'funcionario-consulta', component: FuncionarioConsultaComponent},
  { path : 'funcionario-edicao/:idFuncionario', component: FuncionarioEdicaoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCadastroComponent,
    FuncionarioConsultaComponent,
    FuncionarioEdicaoComponent,
    StudioCadastroComponent,
    StudioConsultaComponent,
    StudioEdicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
