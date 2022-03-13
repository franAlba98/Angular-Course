import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <button (click)="acumular(base);">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base);">- {{base}}</button>
        <button (click)="acumular(numero);">Acumular</button>
    `
})

export class ContadorComponent {

    title: string = 'Contador App';
    numero: number = 0;

    base: number = 10;

    sumar = ()=>{
        this.numero += 1
    }

    restar = ()=>{
        this.numero -= 1
    }

    acumular = (valor:number)=>{
        this.numero+=valor
    }

}