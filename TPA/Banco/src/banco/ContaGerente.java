/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;

/**
 *
 * @author Alunos
 */
public class ContaGerente {
    private String num_conta;
    private String num_agencia;
    private int idCliente;
    private float saldo;

    public ContaGerente(String num_conta, String num_agencia,int idCliente, float saldo) {
        this.num_conta = num_conta;
        this.num_agencia = num_agencia;
        this.idCliente = idCliente;
        this.saldo = saldo;
    }

    public String getNum_conta() {
        return num_conta;
    }

    public void setNum_conta(String num_conta) {
        this.num_conta = num_conta;
    }

    public String getNum_agencia() {
        return num_agencia;
    }

    public void setNum_agencia(String num_agencia) {
        this.num_agencia = num_agencia;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }
}
