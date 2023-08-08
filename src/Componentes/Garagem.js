import Carro from "./Carro";

function Garagem(props) {

   console.log(props.carro1);
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={()=>{props.apresentacaoGaragem(props.nome) }}> Clique aqui</button>
      <Carro carro={props.carro}
        nome = {props.carro1}
    
    
    
       />
      <Carro />
      <Carro />
      <Carro />
    </div>
  );
}

export default Garagem;
