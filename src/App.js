import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';

const App = () => {
  
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchItems = () => {

    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res => {
      setItems(res.data);
      setIsLoading(false);
    })
    .catch(err => console.log(err));

  }

  useEffect(() => {
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={setQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
