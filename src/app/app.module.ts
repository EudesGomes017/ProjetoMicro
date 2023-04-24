import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';





import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { NavComponent } from '../shared/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { TituloComponent } from '../shared/titulo/titulo.component';
import { ProdutoDetalheComponent } from './components/produtos/produto-detalhe/produto-detalhe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicesService } from './services/services.service';
import { ProdutosListComponent } from './components/produtos/produtos-list/produtos-list.component';
import { DateTimeFormatPipePipe } from './util/helps/DateTimeFormatPipe.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SidnavComponent } from 'src/shared/sidnav/sidnav.component';
import { ProdutoAtualizarComponent } from './components/produtos/produto-atualizar/produto-atualizar.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { truncateSync } from 'fs';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProdutosComponent,
    TituloComponent,
    ProdutoDetalheComponent,
    DashboardComponent,
    ProdutosListComponent,
    DateTimeFormatPipePipe,
    SidnavComponent,
    ProdutoAtualizarComponent


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule,



  ],
  providers: [ServicesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
