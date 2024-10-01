/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;

/**
 *
 * @author Alunos
 */
public class Movimentacao {
    private char num_conta;
    private String num_agencia;
    private String documento;
    private String dataMov;
    private char tipoTransacao;
    private int idHistorico;
    private String complementMov;
    private float valor;
    private float decimal;

    public Movimentacao(char num_conta, String num_agencia, String documento, String dataMov, char tipoTransacao, int idHistorico, String complementMov, float valor, float decimal) {
        this.num_conta = num_conta;
        this.num_agencia = num_agencia;
        this.documento = documento;
        this.dataMov = dataMov;
        this.tipoTransacao = tipoTransacao;
        this.idHistorico = idHistorico;
        this.complementMov = complementMov;
        this.valor = valor;
        this.decimal = decimal;
    }

    public char getNum_conta() {
        return num_conta;
    }

    public void setNum_conta(char num_conta) {
        this.num_conta = num_conta;
    }

    public String getNum_agencia() {
        return num_agencia;
    }

    public void setNum_agencia(String num_agencia) {
        this.num_agencia = num_agencia;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getDataMov() {
        return dataMov;
    }

    public void setDataMov(String dataMov) {
        this.dataMov = dataMov;
    }

    public char getTipoTransacao() {
        return tipoTransacao;
    }

    public void setTipoTransacao(char tipoTransacao) {
        this.tipoTransacao = tipoTransacao;
    }

    public int getIdHistorico() {
        return idHistorico;
    }

    public void setIdHistorico(int idHistorico) {
        this.idHistorico = idHistorico;
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

    public float getDecimal() {
        return decimal;
    }

    public void setDecimal(float decimal) {
        this.decimal = decimal;
    }
    
    
    
}
