import React, { useState, useEffect } from 'react'
import { Card, Badge, TextInput, Dropdown, Button } from 'flowbite-react'
import { Link } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import PodcastService from "../services/podcasts.service";
import ReactCountryFlag from "react-country-flag"
import { getCountryCode, getCountry } from "language-flag-colors";
import Magnifier from "../magnifier.svg?react";

function Podcasts() {
    const [content, setContent] = useState();
    const [searchValue, setSearchValue] = useState();
    const [genre, setGenre] = useState();
    const [uniqueGenreList, setUniqueGenreList] = useState();
    const [language, setLanguage] = useState();
    const [uniqueLanguagesList, setUniqueLangugesList] = useState();
    const [filteredPodcasts, setFilteredPodcasts] = useState();
    const LanguageCodes = {
        "en": "English (US)",
        "sv": "Swedish"
    }
    useEffect(() => {
      PodcastService.getAll().then(
        response => {
            setContent(response.data);
            setUniqueGenreList([...new Set(response.data.map(item => item.genre))])
            setUniqueLangugesList([...new Set(response.data.map(item => item.language))])
        },
        error => {
            const resMessage = 
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(resMessage);
        }
      )
  
    }, [])

    useEffect(() => {
      handleFilter("search")
    }, [searchValue])

    useEffect(() => {
        handleFilter("genre")
    }, [genre])

    useEffect(() => {
        handleFilter("language")
    }, [language])

    const handleFilter = (type) => {
        let filtered = []
        if (type === "search") {
            if (searchValue === "") {
                filtered = "";
            } else {
                filtered = content?.filter(item => item.name.toLowerCase().includes(searchValue?.toLowerCase()));
                setGenre(); // Reset genre
                setLanguage(); //Reset language
            }
        }

        if (type === "genre") {
            if (genre === undefined) {
                filtered = "";
            } else {
                filtered = content?.filter(item => item.genre.includes(genre));
            }
        }

        if (type === "language") {
            filtered = content?.filter(item => item.language.includes(language));
        }

        setFilteredPodcasts(filtered);
    }

    const podcastList = (item) => {
        return (
            <Link to={"/podcasts/" + item.id} className="group">
                <li key={item.id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                            <img height="48" width="48" src={item.poster_url} className="ease-in duration-200 group-hover:scale-150" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate font-medium text-gray-900">{item.name} <ReactCountryFlag countryCode={getCountryCode(item.language)} svg /></p>
                            <p className="truncate text-sm text-gray-500">{item.genre}</p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900"><MdNavigateNext className="text-primary h-6 w-6"/></div>
                        
                    </div>
                    <hr className="mt-4"/>
                </li>
            </Link>
        )
    }

  return (
    <div className="container mx-auto py-10 px-4">
        <Card>
            <div className="mb-4">
                <h1 className="text-xl font-bold leading-none">Podcasts</h1>
                <div className="mt-4 flex items-center gap-4">
                    <Badge color="gray" onClick={() => setGenre()}  className={`hover:cursor-pointer hover:bg-secondary/30 ${!genre ? 'bg-secondary text-black' : 'text-gray-900'}`}>
                        All
                    </Badge>
                    {uniqueGenreList && 
                        uniqueGenreList.map(item => (
                            <Badge color="gray" onClick={() => setGenre(item)} className={`hover:cursor-pointer hover:bg-secondary/30 ${genre == item ? 'bg-secondary text-black' : 'text-gray-900'}`}>
                                {item}
                            </Badge>
                        ))
                    }
                    <Dropdown label="Language" value={language} inline>
                        {uniqueLanguagesList?.map(item => (
                            <>
                            <Dropdown.Item onClick={() => setLanguage(item)}><ReactCountryFlag countryCode={getCountryCode(item)} svg /> {getCountry(item)}</Dropdown.Item></>
                        ))}
                    </Dropdown>
                </div>
                
            </div>
            <div className="flow-root">
                <TextInput id="search" placeholder="Search.." type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <ul>
                    {filteredPodcasts ? (
                        filteredPodcasts.length ? (
                        filteredPodcasts.map(item => (
                            podcastList(item)
                        ))
                        ) : (
                            <div className="flex flex-col items-center gap-4 pt-10">
                            <Magnifier className="w-24 h-24"/>
                            <p className="font-semibold">No result found</p>
                            <p>We could not find anything that match with your search or selected filters.</p>
                            <Link to="/about/request">
                                <Button color="primary">Request podcast</Button>
                            </Link>
                            </div>
                        )
                    ): (
                        content?.map(item => (
                            podcastList(item)
                        ))
                    )}
                </ul>
            </div>
        </Card>
    </div>
  )
}

export default Podcasts