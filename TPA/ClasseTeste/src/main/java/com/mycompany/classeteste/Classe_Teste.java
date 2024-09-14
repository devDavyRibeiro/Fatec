/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.classeteste;

/**
 *
 * @author Alunos
 */
public class Classe_Teste {
    public Classe_Teste(int numero){
        super();
        this.numero = numero;
    }
    public Classe_Teste(int numero, int numero2){
        super();
        this.numero = numero;
        this.numero2 = numero2;
    }
    public int getNumero(){
        return numero2;
    }
    public void setNumero(int numero){
        this.numero = numero;
    }
        public int getNumero2(){
        return numero;
    }
    public void setNumero2(int numero2){
        this.numero2 = numero2;
    }
    
        public int getResultado(){
        return numero2;
    }
    public void setResultado(int numero){
        this.numero = numero;
    }
    
    private int numero;
    private int numero2;
    private int resultado;
    
    public int getDobro()
    {
        resultado = getNumero() * 2;
        return resultado;
    }
    public int getMultiplica()
    {
        resultado = getNumero() * getNumero2();
        return resultado;
    }
}
