import Image from 'next/image';
import GitHubLogo from '../../public/github.png';
import LinkedIn from '../../public/LinkedIn.png';
import X from '../../public/x.png';

export default function Footer() {
    return (
        <footer className="dark:bg-gray-900 bg-gray-200 text-black py-6">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://github.com/miraclebilly" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
                        <Image src={GitHubLogo} alt="GitHub Logo" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/miracle-billy-35a677192/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
                        <Image src={LinkedIn} alt="Website Logo" width={30} height={30} />
                    </a>
                    <a href="https://x.com/richestmiracle" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
                        <Image src={X} alt="Website Logo" width={30} height={30} />
                    </a>

                </div>
                <p className="dark:text-white text-sm">&copy; {new Date().getFullYear()} Miracle Billy. All rights reserved.</p>
            </div>
        </footer>
    );
}
