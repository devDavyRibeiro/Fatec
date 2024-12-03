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
public class Movimentacao {
    private String num_conta;
    private String num_agencia;
    private String documento;
    private String dataMov;
    private String tipoTransacao;
    private int idHistorico;
    private String complementMov;
    private float valor;
    private float saldo;

    public Movimentacao(String num_conta, String num_agencia, String documento, String dataMov, String tipoTransacao, int idHistorico, String complementMov, float valor, float decimal) {
        this.num_conta = num_conta;
        this.num_agencia = num_agencia;
        this.documento = documento;
        this.dataMov = dataMov;
        this.tipoTransacao = tipoTransacao;
        this.idHistorico = idHistorico;
        this.complementMov = complementMov;
        this.valor = valor;
        this.saldo = decimal;
    }
    public Movimentacao(){
        //
    }

    public String getNum_conta() {
        return num_conta;
    }

    public void setNum_conta(String num_conta) {
        if (validaNumConta(num_conta)) {
            this.num_conta = num_conta;
        }
    }

    public String getNum_agencia() {
        return num_agencia;
    }

    public void setNum_agencia(String num_agencia) {
        if (validaNumAgencia(num_agencia)) {
           this.num_agencia = num_agencia; 
        }        
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        if (validaDocumento(documento)) {
           this.documento = documento; 
        } 
    }

    public String getDataMov() {
        return dataMov;
    }

    public void setDataMov(String dataMov) {
        if (validaData(dataMov)) {
          this.dataMov = dataMov;  
        }
        
    }

    public String getTipoTransacao() {
        return tipoTransacao;
    }

    public void setTipoTransacao(String tipoTransacao) {
        this.tipoTransacao = tipoTransacao;
    }

    public int getIdHistorico() {
        return idHistorico;
    }

    public void setIdHistorico(int idHistorico) {
        if (validaHistorico(idHistorico)) {
           this.idHistorico = idHistorico; 
        }
        
    }

    public String getComplementMov() {
        return complementMov;
    }

    public void setComplementMov(String complementMov) {
        this.complementMov = complementMov;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }
    
    public boolean validaNumConta(String num_conta){
        if(num_conta.isEmpty() || num_conta.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        } 
    }
    public boolean validaNumAgencia(String num_agencia){
        if(num_agencia.isEmpty() || num_agencia.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaIdCliente(int IdCliente){
        if(IdCliente == 0){
            JOptionPane.showMessageDialog(null, "IdCliente não pode ser em 0 ou nulo");
            return false;
        }
        else{
            return true;
        }  
    }
    public boolean validaHistorico(int historico){
        if(historico == 0){
            JOptionPane.showMessageDialog(null, "Historico não pode ser em 0 ou nulo");
            return false;
        }
        else{
            return true;
        }  
    }
    public boolean validaData(String data){
        if(data.isEmpty() || data.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaDocumento(String documento){
        if(documento.isEmpty() || documento.isBlank()){
            JOptionPane.showMessageDialog(null, "Valor atribuido não pode ser em branco ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    
    
}
