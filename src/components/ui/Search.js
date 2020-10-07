import React, { useState } from 'react'

const Search = ({ setQuery }) => {

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
        setQuery(text);
    }
    
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search characters" 
                    value={text}
                    onChange={onChange}
                />
            </form>
        </section>
    )
}

export default Search
