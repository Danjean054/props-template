import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome ="Daniel"

  const name = "Confuso"

  const apresentacaoGaragem = (nome)=>{

    alert(`Boas vindas ${nome}`)
  }

  
  const carro ={

    nome: "lancer" ,
    cor: "branco" ,
    ano: 2014 ,
    isFlex: true
  }

  const carro2 ={

    nome: "supra" ,
    cor: "laranja" ,
    ano: 2000, 
    isFlex: false
  }

  const carros  =[
    {

      nome: "supra" ,
      cor: "laranja" ,
      ano: 2000, 
      isFlex: false


  },  {

    nome: "HR-V" ,
    cor: "red" ,
    ano: 2000, 
    isFlex: false


},{

  nome: "focus" ,
  cor: "roxo" ,
  ano: 2000, 
  isFlex: false
},{

  nome: "GTI" ,
  cor: "AZUL" ,
  ano: 2022, 
  isFlex: true

}


  ]
  return (
    <div>
      <Garagem nome={nome} 
      apresentacaoGaragem = {apresentacaoGaragem}  
      carro = {carro.nome}
       />

       <Garagem
       apresentacaoGaragem = {apresentacaoGaragem}  
       nome = {name}
       carro1 = {carros.nome}
       carro2 = {carros[1]}
       carro3 = {carros[2]}
       carro4 = {carros[3]}
       />
     
    </div>
  );
}
