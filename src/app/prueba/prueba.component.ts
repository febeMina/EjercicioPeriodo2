import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  title = 'MiniCalculadoraApp';
  numero1:number= 0;
  numero2:number= 0;
  resultados:number= 0;
  resultador:number= 0;
  resultadom:number= 0;
  resultadod:number= 0;
  
  n1:number= 0;
  n2:number= 0;
  resultado: number = 0;
  operador = '';
  
  
  operar(){
    this.resultado = eval(this.n1 + this.operador + this.n2);
  }

  setOperador(operador:string){
    this.operador = operador;
    this.operar();
  }
  
  sumar(): void{
    this.resultados=this.numero1+this.numero2;
  }
  
  restar(): void{
    this.resultador=this.numero1-this.numero2;
  }
  
  multiplicar(): void{
    this.resultador=this.numero1*this.numero2;
  }
  
  dividir(): void{
    this.resultador=this.numero1/this.numero2;
  }
}
