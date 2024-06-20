import Image from 'next/image'
import Link from 'next/link'
import EpicSass from '../../public/epic-sass.png'
import YoutubeClone from '../../public/youtube clone.png'
import Mimistore from '../../public/mimistores.png'
import GitHubLogo from '../../public/github.png'
import WebLogo from '../../public/webLogo.png'


export default function Project() {

    const projects =  [
        {
            title: 'Youtube Clone',
            image: YoutubeClone,
            description: 'This is a clone of the popular video sharing platform "Youtube".',
            githubUrl: 'https://github.com/miraclebilly/youtube_clone',
            liveUrl: 'https://youtube-clone-psi-smoky.vercel.app/'
        }
        ,{
            title: 'MimiStore',
            image: Mimistore,
            description: 'Mimistores is a market place app that allows users to view, select and checkout their favourite travel item(s).',
            githubUrl: 'https://github.com/miraclebilly/mimistores',
            liveUrl: 'https://mimistores.vercel.app'
        },
        
        {
            title: 'Epic Sass',
            image: EpicSass,
            description: 'The epic_saas app provides authentication users, users can make payments, subscribe to courses, view course.',
            githubUrl: 'https://github.com/miraclebilly/epic_saas',
            liveUrl: 'https://epic-saas-sepia.vercel.app'
        }
    ]

    return (
        <div id="section1" className="container mt-24 mb-24 mx-auto px-4 py-8">
        <h1 className="dark:text-white text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mt-8"
                layout="responsive"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Image src={WebLogo} alt="Live URL" width={24} height={24} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Image src={GitHubLogo} alt="GitHub" width={24} height={24} />
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}