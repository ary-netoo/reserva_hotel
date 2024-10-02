import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [hoteis, setHoteis] = useState([]);

    useEffect(() => {
        const hoteisSalvos = localStorage.getItem('hoteis');
        if (hoteisSalvos) {
            setHoteis(JSON.parse(hoteisSalvos));
        }
    }, []);

    

    const removerHotel = (index) => {
        const novaListaHoteis = hoteis.filter((_, i) => i !== index);
        setHoteis(novaListaHoteis);
        localStorage.setItem('hoteis', JSON.stringify(novaListaHoteis));
    };





    return (
        <div>
            <h2>Lista de Hoteis</h2>
            <ul>
                {hoteis.map((hotel, index) => (
                    <li key={index}>
                        {hotel.nome} - Classificacao: {hotel.classificacao} - {hotel.cidae} - {hotel.estado} - {hotel.diaria}
                        <button onClick={() => removerHotel(index)}>Remover</button>
                    </li>
                ))}
            </ul>
            <Link to="/produtos">Cadastrar Novo Hotel</Link>
        </div>
    );
}