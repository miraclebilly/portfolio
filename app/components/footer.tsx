import Image from 'next/image';
import GitHubLogo from '../../public/github.png';
import WebLogo from '../../public/webLogo.png';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-6">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
                        <Image src={GitHubLogo} alt="GitHub Logo" width={40} height={40} />
                    </a>
                    <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
                        <Image src={WebLogo} alt="Website Logo" width={40} height={40} />
                    </a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Miracle Billy. All rights reserved.</p>
            </div>
        </footer>
    );
}
