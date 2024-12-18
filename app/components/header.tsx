'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const cv = "https://drive.google.com/file/d/1xsO1HwHjVak2FBwETFzS9EeHfjuNG52r/view?usp=sharing";
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const changeMode = () => {        
        setDarkMode(!darkMode)
        return;
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className=" flex container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white"><Link href="/">Miracle Billy</Link></div>
                <nav className="hidden md:flex lg:flex space-x-6">
                    <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link>
                    <Link href="#section1" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</Link>
                    <Link href="#section3" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
                    <Link href="#section2" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
                    <Link href={cv} target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500"><small>Resume</small></Link>
                </nav>
                <button 
                    onClick={changeMode} 
                    className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-2 rounded-full"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
                <button
                    onClick={toggleMenu}
                    className="lg:hidden md:hidden items-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-2 rounded-full"
                >
                    {isOpen ? '✖️' : '☰'}
                </button>
            </div>
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md">
                    <nav className="flex flex-col space-y-4 px-4 py-4">
                    <Link href="#section1"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500" 
                        onClick={toggleMenu}>Projects
                    </Link>
                    <Link href="#section3"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500" 
                        onClick={toggleMenu}>
                        About
                        
                    </Link >
                    <Link href="#section2" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={toggleMenu}>Contact</Link>
                    <Link href={cv} target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={toggleMenu}><small>Resume</small></Link>
                    </nav>

                </div>
            )}
        </header>
    );
}
