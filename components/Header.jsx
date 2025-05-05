"use client"
import Link from 'next/link'
import React from 'react'
import { Heart, Menu, Search, ShoppingBag, Smile, X } from 'lucide-react'
import UserProfile from '../components/UserProfile'
const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
        <header className="w-full border-b border-gray-200">
            {/* Top Notification Strip */}
            <div className="bg-black text-red-400 text-sm text-center py-1 hidden md:flex justify-center space-x-4">
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor</p>
            </div>

            {/* Main Header */}
            <div className="flex items-center justify-between px-4 md:px-10 py-4">
                {/* Left: Menu toggle + Logo */}

                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Icon */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo */}
                    <div className="text-xl font-bold tracking-wider"> <Link href="/" > nxtWave-plp </Link></div>
                </div>

                {/* Center: Menu (hidden on small devices) */}


                {/* Right: Icons + Lang */}
                <div className="flex items-center space-x-4">
                    <button><span role="img" aria-label="search"><Search /> </span></button>
                    <button><span role="img" aria-label="heart"><Heart /> </span></button>
                    <button><span role="img" aria-label="cart"><ShoppingBag /> </span></button>
                    <div className="text-sm font-medium max-sm:hidden">ENG ⌄</div>
                    <UserProfile />
                </div>
            </div>
            <nav className="hidden md:flex justify-center space-x-6 text-sm font-semibold tracking-wide">
                <a href="#">SHOP</a>
                <a href="#">SKILLS</a>
                <a href="#">STORIES</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT US</a>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden  font-bold flex flex-col items-center space-y-10 bg-gray-200 rounded-md mt-3  pb-4">
                    <a href="#">SHOP</a>
                    <a href="#">SKILLS</a>
                    <a href="#">STORIES</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT US</a>
                </nav>
            )}
            <hr className='border-blue-500 mt-3 border-2' />
        </header>
    )
}

export default Header
