
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent {
    num1: number = 0;
    num2: number = 0;
    sum: number= 0;
    resta: number =0;
    multiply: number=0;
    divide: number=0;
    sqrtNum1: number=0;
    sqrtNum2: number=0;
    expNum1: number=0;
    expNum2: number=0;
    power: number=0;
    GCD: number=0;
    secanteNum1: number=0;
    secanteNum2: number=0;
    senoNum1: number=0;
    senoNum2: number=0;
    tangenteNum1: number = 0;
    tangenteNum2: number = 0;
    
    
  //Funcion para validar que no permita numeros null o undefined
  validarNumeros() {
    return this.num1 !== null && this.num1 !== undefined  &&
      this.num2 !== null && this.num2 !== undefined;
  }
  // funcion para mostrar el resultado Suma
  showSum() {
    if(this.validarNumeros()) {
      const suma = this.num1 + this.num2;
      Swal.fire("Suma", `${this.num1} + ${this.num2} = ${suma}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  
  // funcion para mostrar el resultado Resta
  showResta() {
    if(this.validarNumeros()) {
      const resta = this.num1 - this.num2;
      Swal.fire("Resta", `${this.num1} - ${this.num2} = ${resta}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
   // funcion para mostrar el resultado Muliplicacion
  showMultiply() {
    if(this.validarNumeros()) {
      const multiply = this.num1 * this.num2;
      Swal.fire("Resta", `${this.num1} * ${this.num2} = ${multiply}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // funcion para mostrar el resultado Division
  showDivide() {
    if(this.validarNumeros()) {
      const divide = this.num1 / this.num2;
      Swal.fire("Division", `${this.num1} / ${this.num2} = ${divide}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  
  // funcion para mostrar el resultados Raíz Cuadrada de Número 1
  showSqrtNum1() {
    if(this.validarNumeros()) {
      const sqrtNum1 = Math.sqrt(this.num1);
      Swal.fire("Raiz cuadrada Número 1", `raíz cuadrada(${this.num1}) = ${sqrtNum1}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // funcion para mostrar el resultado Raíz Cuadrada de Número 2
  showSqrtNum2() {
    if(this.validarNumeros()) {
      const sqrtNum2 = Math.sqrt(this.num2);
      Swal.fire("Raiz cuadrada Número 2", `raíz cuadrada(${this.num2}) = ${sqrtNum2}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // funcion para mostrar el resultado Exponencial Número 1
  showExpNum1() {
    if(this.validarNumeros()) {
      const expNum1 = Math.exp(this.num1);
      Swal.fire("Exponencial Número 1", `exponencial(${this.num1})= ${expNum1}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
   // funcion para mostrar el resultado Exponencial Número 1
    showExpNum2() {
    if(this.validarNumeros()) {
      const expNum2 = Math.exp(this.num2);
      Swal.fire("Exponencial Número 2", `exponencial(${this.num2}) = ${expNum2}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
   // funcion para mostrar el resultado Potenciacion
    showPower() {
    if(this.validarNumeros()) {
      const power = Math.pow(this.num1, this.num2);
      Swal.fire("Potenciación", `${this.num1} elevado a la ${this.num2} = ${power}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  } 
  
// Función para calcular la secante del número 1
  showSecanteNum1() {
    if (this.validarNumeros()) {
      const secanteNum1 = 1 / Math.cos(this.num1);
      Swal.fire("Secante Número 1", `Secante(${this.num1}) = ${secanteNum1}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }

// Función para calcular la secante del número 2
  showSecanteNum2() {
    if (this.validarNumeros()) {
      const secanteNum2 = 1 / Math.cos(this.num2);
      Swal.fire("Secante Número 2", `Secante(${this.num2}) = ${secanteNum2}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }

// Función para calcular el seno del número 1
  showSenoNum1() {
    if (this.validarNumeros()) {
      const senoNum1 = Math.sin(this.num1);
      Swal.fire("Seno Número 1", `Seno(${this.num1}) = ${senoNum1}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }

// Función para calcular el seno del número 2
  showSenoNum2() {
    if (this.validarNumeros()) {
      const senoNum2 = Math.sin(this.num2);
      Swal.fire("Seno Número 2", `Seno(${this.num2}) = ${senoNum2}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // Función para calcular la tangente del número 1
  showTangenteNum1() {
    if (this.validarNumeros()) {
      const tangenteNum1 = Math.tan(this.num1);
      Swal.fire("Tangente Número 1", `Tangente(${this.num1}) = ${tangenteNum1}`, "success");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
}

  