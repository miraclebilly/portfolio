'use client'
import Image from 'next/image'
import profilePic from './profilePic.jpg'
import HeroImage from '../../public/background.jpg'
import Typed from 'typed.js'
import { useEffect } from 'react'

export default function Hero() {

    useEffect(() => {
        const typed = new Typed('.heroName',{
            strings: ["Miracle Billy", "a Frontend Developer"],
            typeSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section 
                id="home" 
                className="bg-gray-100 py-32 px-24  relative"
                style={{ backgroundImage: `url(${HeroImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Image 
                        src={profilePic} 
                        alt="Profile Picture" 
                        className="rounded-full mx-auto" 
                        width={150} 
                        height={150} 
                    />
                    <h1 className="text-4xl font-bold mt-6 text-white">Hello, I'm <span className="text-blue-700 heroName"></span></h1>
                    <p className="text-xl mt-4 text-white">I provide Tech Solutions on the Web using Next.js, TypeScript, Tailwind and Supabase.</p>
                    
                </div>
                <div className="absolute inset-0 bg-black opacity-90 z-0 hover:opacity-80"></div>
            </section>
        </div>
    )
}
