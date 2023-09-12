import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiUser } from "react-icons/bi";
import SearchBar from './searchBar';
const Header = () => {
    return (
        <header>
            <div className=' flex justify-between items-center px-4 container mx-auto '>
                <Link href="/">
                    <Image src="https://i.ibb.co/cLqGBjp/Logo-Gaming-2-removebg-preview.png" alt='logo' height={50} width={100}></Image>
                </Link>
                <div className='gap-6 flex'>
                    <Link href='/about'>Home</Link>
                    <Link href='/about'>Shop now</Link>
                    <Link href='/about'>Shop by Solutions</Link>
                    <Link href='/about'>Desi Ghee</Link>
                    <Link href='/about'>Our Story</Link>
                    <Link href='/about'>Blog</Link>
                    <Link href='/about'>Contact</Link>
                </div>
                <div className='flex  items-center gap-6 '>
                    <SearchBar></SearchBar>
                    <h1 className='text-3xl'><BiUser></BiUser></h1>
                    <h1 className='text-3xl'><LiaShoppingBagSolid></LiaShoppingBagSolid></h1>
                </div>
            </div>
        </header>
    );
};

export default Header;