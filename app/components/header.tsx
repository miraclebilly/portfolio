'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const cv = "https://media.licdn.com/dms/document/media/D4D2DAQFqJyYW4JmeOQ/profile-treasury-document-pdf-analyzed/0/1718725854619?e=1719446400&v=beta&t=aJnXBfFl7jVvu3YUrWgboqTUezlqa3SmRtKgOf2g3lw";
    const [darkMode, setDarkMode] = useState(false);
    

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

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Miracle Billy</div>
                <nav className="space-x-6">
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a>
                    <Link href="#section1" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</Link>
                    <Link href="#section3" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
                    <a href="#section2" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
                    <a href={cv} target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500"><small>Resume</small></a>
                </nav>
                <button 
                    onClick={changeMode} 
                    className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 p-2 rounded-full"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
}
