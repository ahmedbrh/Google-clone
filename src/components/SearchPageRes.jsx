import React from 'react'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import './SearchPageRes.css'
import Response from '../response'
import { Link } from "react-router-dom"
import Search from "../components/Search"
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";


function SearchPageRes() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    //Mock API call
    // const data = Response; // mocking the api call 
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to="/" >
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />

                </Link>


                <div className="searchPage__headerBody"> <Search hideButtons />

                    <div className="searchPage__options">

                        <div className="searchPage__optionsLeft">

                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all" > Tous </Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news" > News </Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/news" > Images </Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/Shopping" > Shopping </Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps" > maps </Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more" > plus </Link>
                            </div>

                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings" > Paramètres</Link></div>
                            <div className="searchPage__option">
                                <Link to="/tools" > Outils</Link></div>
                        </div>
                    </div>
                </div>
                <div className="searchPage__results">

                </div>
            </div>
            { term && (<div className="searchPage__results" >

                <div className="searchPage__resultCount"><p> Environ {data?.searchInformation.formattedTotalResults} résultats ({data?.searchInformation.formattedSearchTime} secondes) pour {term} </p>
                    {data?.items.map(item => (<div className="searchPage__result">
                        <a className="searchPageLink" href={item.link}> {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (<img className="searchPageImage" src={item.pagemap?.cse_image[0]?.src} />)}
                            {item.displayLink} ▷</a>
                        <a className="searchPage__resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="SearchPage__resultSnippet">{item.snippet}</p>

                    </div>))}

                </div>
            </div>)}


        </div>

    )
}

export default SearchPageRes
