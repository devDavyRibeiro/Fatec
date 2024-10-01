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
public class Historico {
    private int idHistorico;
    private String historico;

    public Historico(int idHistorico, String historico) {
        this.idHistorico = idHistorico;
        this.historico = historico;
    }

    public int getIdHistorico() {
        return idHistorico;
    }

    public void setIdHistorico(int idHistorico) {
        if(validaIdhistorico(idHistorico)){
            this.idHistorico = idHistorico;
        }
    }

    public String getHistorico() {
        return historico;
    }

    public void setHistorico(String historico) {
        if(validaHistorico(historico)){
            this.historico = historico;
        }
    }
    
    public boolean validaIdhistorico(int IdHistorico){
        if(IdHistorico == 0){
            JOptionPane.showMessageDialog(null, "Valor não pode ser em branco, ou nulo");
            return false;
        }
        else{
            return true;
        }
    }
    public boolean validaHistorico(String historico){
        if(historico.isEmpty() || historico.isBlank() || historico.length()<4){
            JOptionPane.showMessageDialog(null, "Valor não pode ser em branco, ou nulo, ou tamanho da String menor"
                    + " que 4");
            return false;
        }
        else{
            return true;
        }
    }
    
}
