import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/Produto';
import { ServicesService } from 'src/app/services/services.service';



@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {

  modalRef!: BsModalRef;
  public produtos: Produto[] = [];
  public produtosFiltrados: Produto[] = [];
  produtosId = 0


  public larguraImagem = 30;
  public margemImagem = 2;
  public exibirImagem = true;
  public filtroListado = '';

  public get filtroLista(): string {
    return this.filtroListado;
  }

  public set filtroLista(value: string) {
    this.filtroListado = value;
    this.produtosFiltrados = this.filtroLista ? this.filtrarProdutos(this.filtroLista) : this.produtos;
  }

  public filtrarProdutos(filtrarPor: string): Produto[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.produtos.filter(
      produtos => produtos.NameProduto.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      produtos.qtdProduto.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private service: ServicesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

    public ngOnInit(): void {
      this.spinner.show();
      this.getProdutos();

    }

    public alterarImagem(): void {
      this.exibirImagem = !this.exibirImagem;
    }

    openModal(product: any, template: TemplateRef<any>, produtoId: number): void {
      product.stopPropagation();
      this.produtosId = produtoId;
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    public getProdutos(): void {
      this.service.getProdutos().subscribe({
        next: (produto: Produto[]) => {
          this.produtos = produto;
          this.produtosFiltrados = this.produtos;
        },
        error: (error: any) => {
          this.spinner.hide();
          this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
        },
        complete: () => this.spinner.hide()
      });
    }

   //Delete
   confirm(): void {
    this.modalRef.hide();
    this.spinner.show();

    this.service.deleteProduto(this.produtosId).subscribe(
      (result: string) => {
        console.log(result)
          this.toastr.success('O Produto foi deletado com Sucesso.', 'Deletado!');
          this.getProdutos();

      },
      (error: any) => {
        console.error(error);
        this.toastr.error(`Erro ao tentar deletar o Produto ${this.produtosId}`, 'Erro');
      }
    ).add(() => this.spinner.hide());
  }

  decline(): void {
    this.modalRef.hide();
  }

  Atualiza(id: number): void{
    this.router.navigate([`/produtos/atualizar/${id}`]);
  }

  }




