import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchVideoGame, setSearchVideoGame] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        props.filterVideoGames(searchVideoGame)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchVideoGame} onChange={(e) => setSearchVideoGame(e.target.value)} type='text' placeholder='Search for video game...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar