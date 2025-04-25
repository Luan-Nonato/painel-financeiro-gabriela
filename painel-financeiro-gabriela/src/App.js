import React, { useState } from "react";

function App() {
  const [gastos, setGastos] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const adicionarGasto = () => {
    if (descricao && valor) {
      const novoGasto = { descricao, valor: parseFloat(valor) };
      setGastos([...gastos, novoGasto]);
      setDescricao("");
      setValor("");
    }
  };

  const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Painel Financeiro da Gabriela 💖</h1>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={adicionarGasto}>Adicionar</button>
      <h2>Gastos</h2>
      <ul>
        {gastos.map((g, i) => (
          <li key={i}>
            {g.descricao} - R$ {g.valor.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}

export default App;