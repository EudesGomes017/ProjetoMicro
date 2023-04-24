import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/Produto';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.scss']
})
export class ProdutoAtualizarComponent implements OnInit {

  //criando produto vazio para o metdo create receber
  //produtos ={} as Produto;
 produtos = {} as Produto


  form!: FormGroup;



  get f(): any {
    return this.form.controls;
  }

  constructor(private router: Router, private service: ServicesService,
    private rt: ActivatedRoute, private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.carregarEvento();
    this.validation();
  }

  Cancelar(): void {
    this.service.update(this.produtos).subscribe(() => {
    //chamando o service
    this.router.navigate([`/produtos/lista`])
    })
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

  update(): void {
    this.service.update(this.produtos).subscribe(() => {
      //chamando o service
      this.router.navigate([`/produtos/lista`])
      this.toastr.success('O Produto foi Atualizado com Sucesso.', 'Atualizado!');
      })
  }

  public carregarEvento(): void {
    const eventoIdParam = this.rt.snapshot.paramMap.get('id');

    if (eventoIdParam !== null) {


      this.service.getEventoById(+eventoIdParam).subscribe(
      /*next: */  (product: Produto) => {
          this.produtos = {...product};   //Object.assing({}, evento);
          this.form.patchValue(this.produtos);

        },
       /*erro: */
       /*complete: */
      );
    }
  }
}
