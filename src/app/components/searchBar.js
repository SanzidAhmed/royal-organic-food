'use client'
import React from 'react';
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
    const handleRefresh = (event) => {
        event.preventDefault();
    }
    return (
        <form className='w-[250px] relative'>
            <div className="relative">
                <input type='search' placeholder='search...' className='w-full px-4 py-2 rounded-lg outline-none bg-white border border-black'></input>
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white' onClick={handleRefresh}>
                    <BsSearch></BsSearch>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;