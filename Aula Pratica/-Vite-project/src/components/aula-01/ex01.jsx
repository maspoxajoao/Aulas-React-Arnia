import Ex1Item from "./item";

const tarefas = [
  "Escovar os dentes",
  "Ir ao trabalho",
  "Dar banho no cachorro",
  "Aprendendo ReactJs",
];

const Ex1 = () => {
  return (
    <ul className="minhas-tarefas">
      {tarefas.map((tarefa,index)=>(
        <Ex1Item  key={index}
        tarefa = {tarefa}
        name = {`tarefa-${index}`}/>
      ))}
    </ul>
  );
};
export default Ex1;
