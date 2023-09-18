
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
  result: {
    sum: number,
    resta: number,
    multiply: number,
    divide: number,
    sqrtNum1: number,
    sqrtNum2: number,
    expNum1: number,
    expNum2: number,
    power: number,
    logNum1: number,
    logNum2: number,
    gcd: number,
    secanteNum1: number,
    secanteNum2: number,
    senoNum1: number,
    senoNum2: number
  } = {
    sum: 0,
    resta: 0,
    multiply: 0,
    divide: 0,
    sqrtNum1: 0,
    sqrtNum2: 0,
    expNum1: 0,
    expNum2: 0,
    power: 0,
    logNum1: 0,
    logNum2: 0,
    gcd: 0,
    secanteNum1: 0,
    secanteNum2: 0,
    senoNum1: 0,
    senoNum2: 0
    
  };

  showResults: boolean = false;

  // Variables para controlar la visibilidad de los modales
  /*
  showSumModal: boolean = false;
  showrestaModal: boolean = false;
  showMultiplyModal: boolean = false;
  showDivideModal: boolean = false;
  showSqrtNum1Modal: boolean = false;
  showSqrtNum2Modal: boolean = false;
  showExpNum1Modal: boolean = false;
  showExpNum2Modal: boolean = false;
  showPowerModal: boolean = false;
  showLogNum1Modal: boolean = false;
  showLogNum2Modal: boolean = false;
  showRootModal: boolean = false;
  showGCDModal: boolean = false;
  */

  calculate() {
    this.result.sum = this.num1 + this.num2;
    this.result.resta = this.num1 - this.num2;
    this.result.multiply = this.num1 * this.num2;
    this.result.divide = this.num1 / this.num2;
    this.result.sqrtNum1 = Math.sqrt(this.num1);
    this.result.sqrtNum2 = Math.sqrt(this.num2);
    this.result.expNum1 = Math.exp(this.num1);
    this.result.expNum2 = Math.exp(this.num2);
    this.result.power = Math.pow(this.num1, this.num2);
    this.result.logNum1 = Math.log(this.num1);
    this.result.logNum2 = Math.log(this.num2);
    this.result.gcd = this.gcd(this.num1, this.num2);
    this.result.secanteNum1 = 1 / Math.cos(this.num1);
    
    // Mostrar los resultados
    this.showResults = true;
  }
  
  //Funcion para validar que no permita numeros null o undefined
  validarNumeros() {
    return this.num1 !== null && this.num1 !== undefined  &&
      this.num2 !== null && this.num2 !== undefined;
  }
  // funciones para mostrar los resultados Suma
  showSum() {
    if(this.validarNumeros()) {
      const suma = this.num1 + this.num2;
      Swal.fire("Suma", `${this.num1} + ${this.num2} = ${suma}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  
  // funciones para mostrar los resultados Resta
  showResta() {
    if(this.validarNumeros()) {
      const resta = this.num1 - this.num2;
      Swal.fire("Resta", `${this.num1} - ${this.num2} = ${resta}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
   // funciones para mostrar los resultados Muliplicacion
  showMultiply() {
    if(this.validarNumeros()) {
      const multiply = this.num1 * this.num2;
      Swal.fire("Resta", `${this.num1} * ${this.num2} = ${multiply}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // funciones para mostrar los resultados Division
  showDivide() {
    if(this.validarNumeros()) {
      const divide = this.num1 / this.num2;
      Swal.fire("Division", `${this.num1} / ${this.num2} = ${divide}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  
  // funciones para mostrar los resultados Raíz Cuadrada de Número 1
  showSqrtNum1() {
    if(this.validarNumeros()) {
      const sqrtNum1 = Math.sqrt(this.num1);
      Swal.fire("Raiz cuadrada Número 1", `${this.num1} = ${sqrtNum1}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // funciones para mostrar los resultados Raíz Cuadrada de Número 2
  showSqrtNum2() {
    if(this.validarNumeros()) {
      const sqrtNum2 = Math.sqrt(this.num2);
      Swal.fire("Raiz cuadrada Número 2", `${(this.num2)} = ${sqrtNum2}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // funciones para mostrar los resultados Exponencial Número 1
  showExpNum1() {
    if(this.validarNumeros()) {
      const expNum1 = Math.exp(this.num1);
      Swal.fire("Exponencial Número 1", `${(this.num1)} = ${expNum1}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
   // funciones para mostrar los resultados Exponencial Número 1
    showExpNum2() {
    if(this.validarNumeros()) {
      const expNum2 = Math.exp(this.num2);
      Swal.fire("Exponencial Número 2", `${(this.num2)} = ${expNum2}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
   // funciones para mostrar los resultados Potenciacion
    showPower() {
    if(this.validarNumeros()) {
      const power = Math.pow(this.num1, this.num2);
      Swal.fire("Potenciacion", `${Math.pow(this.num1, this.num2)} = ${power}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  } 
  
  
   // funciones para mostrar los resultados Logaritmación Número 1
    showLogNum1() {
    if(this.validarNumeros()) {
      const logNum1 = Math.exp(this.num2);
      Swal.fire("Logaritmación Número 1", `${Math.log(this.num1)} = ${logNum1}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  
  // funciones para mostrar los resultados Logaritmación Número 2
  showLogNum2() {
    if(this.validarNumeros()) {
      const logNum2 = Math.exp(this.num2);
      Swal.fire("Logaritmación Número 2", `${Math.log(this.num2)} = ${logNum2}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }
  

  
   // funciones para mostrar los resultados Factor Común
    showGCD() {
    if(this.validarNumeros()) {
      const gcd = Math.exp(this.num2);
      Swal.fire("Radicacion", `${this.gcd(this.num1, this.num2)} = ${gcd}`, "info");
    } else {
      Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
    }
  }

  gcd(a: number, b: number): number {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // En tu componente TypeScript
// Función para calcular la secante del número 1


showSecanteNum1() {
  if (this.validarNumeros()) {
    const secanteNum1 = 1 / Math.cos(this.num1);
    Swal.fire("Secante Número 1", `Secante(${this.num1}) = ${secanteNum1}`, "info");
  } else {
    Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
  }
}

// Función para calcular la secante del número 2
showSecanteNum2() {
  if (this.validarNumeros()) {
    const secanteNum2 = 1 / Math.cos(this.num2);
    Swal.fire("Secante Número 2", `Secante(${this.num2}) = ${secanteNum2}`, "info");
  } else {
    Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
  }
}

// Función para calcular el seno del número 1
showSenoNum1() {
  if (this.validarNumeros()) {
    const senoNum1 = Math.sin(this.num1);
    Swal.fire("Seno Número 1", `Seno(${this.num1}) = ${senoNum1}`, "info");
  } else {
    Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
  }
}

// Función para calcular el seno del número 2
showSenoNum2() {
  if (this.validarNumeros()) {
    const senoNum2 = Math.sin(this.num2);
    Swal.fire("Seno Número 2", `Seno(${this.num2}) = ${senoNum2}`, "info");
  } else {
    Swal.fire("Error", "Por favor, ingresa valores válidos para num1 y num2", "error");
  }
}

  
  
}

  