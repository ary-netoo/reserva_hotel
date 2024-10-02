import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card.jsx";

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
            <div>
                {hoteis.map((hotel, index) => (
                    <li key={index}>
                        <Card
                            nome={hotel.nome}
                            classificacao={hotel.classificacao}
                            cidade={hotel.cidade}
                            estado={hotel.estado}
                            diaria={hotel.diaria}
                            onRemove={() => removerHotel(index)}
                        />
                    </li>
                ))}
            </div>
            <button><Link to="/produtos">Cadastrar Novo Hotel</Link></button>
        </div>
    );
}