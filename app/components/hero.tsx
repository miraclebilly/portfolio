import Image from 'next/image'
import profilePic from './profilePic.jpg'
import HeroImage from '../../public/background.jpg'

export default function Hero() {
    return (
        <div>
            <section 
                id="home" 
                className="bg-gray-100 py-20  relative"
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
                    <h1 className="text-4xl font-bold mt-6 text-white">Hello, I'm <span className="text-blue-700">Miracle Billy</span></h1>
                    <p className="text-xl mt-4 text-white">I provide tech solutions on the Web using Next.js, TypeScript and Tailwind.</p>
                    <a 
                        href="#contact" 
                        className="inline-block bg-blue-500 text-white mt-6 px-6 py-2 rounded-full"
                    >
                        Contact Me
                    </a>
                </div>
                <div className="absolute inset-0 bg-black opacity-80 z-0 hover:opacity-90"></div>
            </section>
        </div>
    )
}
