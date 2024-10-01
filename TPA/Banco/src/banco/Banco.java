/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package banco;

/**
 *
 * @author Alunos
 */
public class Banco {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Usuario user = new Usuario(7,"login","senha",1);
        System.out.println(user.getIdUsuario());
        user.setIdUsuario(0);
        System.out.println(user.getIdUsuario());
    }
    
}
