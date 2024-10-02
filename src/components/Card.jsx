import React from "react";

export default function Card({ nome, classificacao, cidade, estado, diaria, onRemove }) {
    return (
        <div className="hotel-card">
            <h3>{nome}</h3>
            <p>Classificação: {classificacao}</p>
            <p>Cidade: {cidade}, {estado}</p>
            <p>Diária: {diaria}</p>
            <button onClick={onRemove}>Remover</button>
        </div>
    );
};