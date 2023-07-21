import React, { useEffect, useState } from 'react';
import Card from '../card/';
import './CardList.scss';
import data from './../../datas/data.json'; 

const CardList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, []);

    return (
        <div className="card-list">
            {items.map(item => (
                <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
            ))}
        </div>
    );
}

export default CardList;