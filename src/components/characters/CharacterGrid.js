import React from 'react';
import CharaterItem from './CharaterItem'
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ isLoading, items }) => {
    if(isLoading){
        return <Spinner />
    }else{
        return (
            <section className="cards">
                {
                    items.map((item) => (
                        <CharaterItem key={item.char_id} item={item} />
                    ))
                }
            </section>
        )
    }
}

export default CharacterGrid
