import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search'
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router';
import { actionTypes } from "../context/reducer"
import { useStateValue } from "../context/StateProvider"

function Search({ hideButtons = false }) {
    const [input, setInput] = useState('');
    const history = useHistory();
    const [{ }, dispatch] = useStateValue();
    const search = e => {
        e.preventDefault();
        // console.log("tap in enter", input );
        history.push('/search') // pour aller  dans la page search 
        //dispatch the  action 
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }
    return (
        <form className="search">
            <div className="search__input">

                <SearchIcon className='search__inputIcon
'/>
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (<div className="search__buttons">

                <Button type="submit" onClick={search} variant="outlined">Recherche Google </Button>
                <Button variant="outlined">J'ai de la chance</Button>

            </div>) :
                (<div className="search__buttons">

                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Recherche Google </Button>
                    <Button className="search__buttonsHidden" variant="outlined">J'ai de la chance</Button>

                </div>)}

        </form>
    )
}

export default Search
