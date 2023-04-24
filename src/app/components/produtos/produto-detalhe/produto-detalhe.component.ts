import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/Produto';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  form!: FormGroup;
  //criando produto vazio para o metdo create receber
  produtos ={} as Produto;

  estadoSalvar = 'post';

  get f(): any {
    return this.form.controls;
  }


  constructor(private router: Router, private service: ServicesService, private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      NameProduto: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      NameColaborador: ['', Validators.required],
      dataProdut: ['', Validators.required],
      qtdProduto: ['', [Validators.required]],
      opcaoes: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imagemURL: ['', Validators.required],
    });

  }

  public cssValidator(campoForm: FormControl): any {
    return {'is-invalid': campoForm.errors && campoForm.touched};
  }

  createProduct(): void {

    if (this.form.valid) {
      let service = {} as Observable<Produto>;

    if (this.estadoSalvar == 'post') {
        this.produtos = { ...this.form.value };
        service = this.service.create(this.produtos);
        console.log(this.estadoSalvar )
      }

    service.subscribe({
      next: () => {
        this.toastr.success('Evento salvo com Sucesso!', 'Sucesso');
      },

      error: (e: any) => {
        console.error(e);
        this.spinner.hide();
        this.toastr.error('Erro ao salvar evento', 'Erro');
      },

      complete: () => this.spinner.hide(),
    });

      }
    }


  }









