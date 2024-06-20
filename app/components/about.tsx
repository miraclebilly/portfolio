import Image from 'next/image';
import profilePic from '../../public/profilePic.jpg';
import GitHubLogo from '../../public/github.png';
import LinkedInLogo from '../../public/LinkedIn.png';
import XLogo from '../../public/x.png';

export default function About() {
  return (
    <div id="section3" className="min-h-screen dark:border-solid border-t-2 border-white  flex flex-col items-center justify-center dark:bg-black bg-gray-100 py-12 px-4">
      <h1 className="dark:text-white text-4xl mt-12 font-bold text-center mb-12">About Me</h1>
      
      {/* Image Section */}
      <section className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 mb-12 w-full max-w-4xl text-center">
        <Image
          src={profilePic}
          alt="Miracle Billy"
          width={300}
          height={300}
          className="object-cover mx-auto"
        />
      </section>
      
      {/* Text Section */}
      <section className="bg-white dark:bg-black shadow-md rounded-lg p-8 w-full max-w-4xl">
        <h1 className="dark:text-white text-4xl font-extrabold mb-6 text-gray-900 text-center tracking-wider">Meet Miracle Billy</h1>
        <p className="dark:text-white text-lg text-gray-700 mb-4 leading-relaxed indent-8 tracking-wide">
          I love computers, I love Technology, I love to learn and I love to explore. I design, create, and solve problems using technology. I question things and try to find out why things are the way they are. Technology affords me the opportunity to do things I love.
        </p>
        <p className="dark:text-white text-lg text-gray-700 mb-4 leading-relaxed tracking-wide indent-8">
          I listen to music, and I sing sometimes. I am very positive about life and I genuinely care for people. I write poetry sometimes and enjoy my quiet moments too.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/miraclebilly" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
            <Image src={GitHubLogo} alt="GitHub Logo" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/miracle-billy-35a677192/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
            <Image src={LinkedInLogo} alt="LinkedIn Logo" width={30} height={30} />
          </a>
          <a href="https://x.com/richestmiracle" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
            <Image src={XLogo} alt="X Logo" width={30} height={30} />
          </a>
        </div>
      </section>
    </div>
  );
}
