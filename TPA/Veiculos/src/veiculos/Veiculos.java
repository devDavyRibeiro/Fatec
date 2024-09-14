/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package veiculos;

/**
 *
 * @author Alunos
 */
public class Veiculos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       System.out.println("Hello World!");
        Veiculo carro = new CarroPasseio("ABC1234", "Toyota", "Corolla", "Prata", 2022, 2023, 5, 4);
        Veiculo caminhao = new Caminhao("DEF5678", "Scania", "R450", "Azul", 2021, 2022, 20.5, "Carreta");
        Veiculo onibus = new Onibus("GHI9012", "Mercedes", "O500", "Verde", 2020, 2021, 40, true);
        // exibindo informações de apenas um atributo do veículo carro
        System.out.println("Ano de fabricacao do carro: "+carro.getAnoFabricacao());
        // exibindo todas as informações dos atributos do veículo carro
        carro.exibirInformacoes();
        // fazer a exibição de todas as informações de cada classe (carro, caminhao e onibus)
        // mostrando cada um dos atributos separados e depois mostrando todas as informações de cada veículo
        
        System.out.println("Chassi: " + carro.getChassi());
        System.out.println("Marca: " + carro.getMarca());
        System.out.println("Modelo: " + carro.getModelo());
        System.out.println("Cor: " + carro.getCor());
        System.out.println("Ano Fabricação " + carro.getAnoFabricacao());
        System.out.println("Ano Modelo " + carro.getAnoModelo());
        System.out.println("Tipo: " + carro.getTipo());
        
        System.out.println("Usando o exibirInformaçoes()");
        carro.exibirInformacoes();
        
        System.out.println("Chassi: " + onibus.getChassi());
        System.out.println("Marca: " + onibus.getMarca());
        System.out.println("Modelo: " + onibus.getModelo());
        System.out.println("Cor: " + onibus.getCor());
        System.out.println("Ano Fabricação " + onibus.getAnoFabricacao());
        System.out.println("Ano Modelo " + onibus.getAnoModelo());
        System.out.println("Tipo: " + onibus.getTipo());
       
        System.out.println("Usando o exibirInformaçoes()");
        onibus.exibirInformacoes();
        
        System.out.println("Chassi: " + caminhao.getChassi());
        System.out.println("Marca: " + caminhao.getMarca());
        System.out.println("Modelo: " + caminhao.getModelo());
        System.out.println("Cor: " + caminhao.getCor());
        System.out.println("Ano Fabricação " + caminhao.getAnoFabricacao());
        System.out.println("Ano Modelo " + caminhao.getAnoModelo());
        System.out.println("Tipo: " + caminhao.getTipo());
        
       System.out.println("Usando o exibirInformaçoes()");
        caminhao.exibirInformacoes();
        
        CarroPasseio carro2 = new CarroPasseio("ABC1234", "Toyota", "Corolla", "Prata", 2022, 2023, 5, 4);
        carro2.getNumeroPassageiros();
        carro2.getNumeroPortas();
        
        
        
        
        
        
        
    }
    
}
