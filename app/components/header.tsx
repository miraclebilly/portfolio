import Link from 'next/link'


export default function Header() {
    const cv = "https://media.licdn.com/dms/document/media/D4D2DAQFqJyYW4JmeOQ/profile-treasury-document-pdf-analyzed/0/1718725854619?e=1719446400&v=beta&t=aJnXBfFl7jVvu3YUrWgboqTUezlqa3SmRtKgOf2g3lw"
    return (
        <div>
             <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold"></div>
                <nav className="space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
                <Link href="#section1" className="text-gray-700 hover:text-blue-500">Projects</Link>
                <a href="#section2" className="text-gray-700 hover:text-blue-500">Contact</a>
                <a href={cv} target="_blank" className="text-gray-700 hover:text-blue-500"><small>Resume</small></a>
                </nav>
                <button className="bg-gray-200 p-2 rounded-full">🌙</button>
            </div>
        </header>
        </div>
    )
}