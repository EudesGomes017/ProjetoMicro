import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl =  'http://localhost:3001/products';

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>(this.baseUrl);

  }

  public getEventoById(id: number): Observable<Produto> {
    return this.http
      .get<Produto>(`${this.baseUrl}/${id}`)

  }

  create(product: Produto): Observable<Produto> {

    return this.http.post<Produto>(this.baseUrl, product);

  }

  update(product: Produto):Observable<Produto> {

    const url = `${this.baseUrl}/${product.id}`; // vamos interpolar o valor
    return this.http.put<Produto>(url, product)
  }

  public deleteProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
