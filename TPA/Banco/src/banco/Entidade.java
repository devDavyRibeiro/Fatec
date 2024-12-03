/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;

import javax.swing.JOptionPane;

/**
 *
 * @author Alunos
 */
public class Entidade {
    private String nome;
    private String endereco;
    private String numero;
    private String complemento;
    private String bairro;
    private String cidade;
    private String uf;
    private String cep;
    private String cnpj;
    
   
    public Entidade(String nome,String endereco, String complemento, String numero, String bairro,String cidade, String uf,String cep,String cnpj){
        this.nome = nome;
        this.endereco = endereco;
        this.complemento = complemento;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.cep = cep;
        this.cnpj = cnpj;
    }
    public Entidade(){
        
    }
    
    public String getNome(){
        return this.nome;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        if (validaNumero(numero)){
           this.numero = numero; 
        }
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
      return cidade;  
    }

    public void setCidade(String cidade) {
        if (validaNumero(cidade)){
          this.cidade = cidade;
        }
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        if (validaNumero(uf)){
           this.uf = uf; 
        }
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        if (validaNumero(cep)){
            this.cep = cep; 
        }
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj; 

    }
    public void setNome(String nome){
        if(validaNome(nome)){
            this.nome = nome;
        }
    }
    
    public String getEndereco(){
    return this.endereco;
    }
    public void setEndereco(String endereco){
        if (validaEndereco(endereco)){
           this.endereco = endereco;
        }
        
    }

    public String getComplemento(){
        return this.complemento;
    }
    public void setComplemento(String complemento){
        this.complemento = complemento;
    }

    public boolean validaEndereco(String endereco){
        if(endereco.isEmpty() || endereco.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    
    public boolean validaNome(String nome){
        if(uf.isEmpty() || uf.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaNumero(String numero){
        if(uf.isEmpty() || uf.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaCidade(String cidade){
        if(uf.isEmpty() || uf.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaUf(String uf){
        if(uf.isEmpty() || uf.isBlank() || uf.length() != 2){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }   
    public boolean validaCEP(String cep){
        if(cep.isEmpty() ||cep.isBlank() || cep.length() != 8 ){
            JOptionPane.showMessageDialog(null, "Valor de CEP atribuido não pode ser em branco ou ter 8 caracteres");
            return false;
        }
        else{
            return true;
        }
    }
    /*
    
    public boolean validaCNPJ(String cnpj){
        if(cnpj.length() != 14 ){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou ter 14 caracteres");
            return false;
        }
        else{
            return true;
        }
    }
    */
}
