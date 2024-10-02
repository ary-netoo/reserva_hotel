import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Produtos() {

    const [nome, setNome] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [diaria, setDiaria] = useState('');
    const navigate = useNavigate();

    const adicionarHotel = () => {
        const novoHotel = { nome, classificacao, cidade, estado, diaria };
        const hoteisSalvos = localStorage.getItem('hoteis');
        const hoteis = hoteisSalvos ? JSON.parse(hoteisSalvos) : [];
        const novaListaHoteis = [...hoteis, novoHotel];

        localStorage.setItem('hoteis', JSON.stringify(novaListaHoteis));

        navigate('/')

    
    };


    return (
        <div>
            <h1>Cadastra Hotel</h1>
            <label>Nome do Hotel</label>
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
             />

             <label>Classificacao do Hotel</label>
             <input
             type="text"
             value={classificacao}
             onChange={(e) => setClassificacao(e.target.value)}
              />

            <label>Cidade do Hotel</label>
             <input
             type="text"
             value={cidade}
             onChange={(e) => setCidade(e.target.value)}
              />

            <label>Estado do Hotel</label>
             <input
             type="text"
             value={estado}
             onChange={(e) => setEstado(e.target.value)}
              />

            <label>Diaria do Hotel</label>
             <input
             type="text"
             value={diaria}
             onChange={(e) => setDiaria(e.target.value)}
              />

            <button onClick={adicionarHotel}>Adicionar Hotel</button>

        </div>
    );
}