

export default function Form() {
    
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 py-12 px-4">
              <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Send Me a Message</h1>
                <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">Got a Question or a Proposal? Go right ahead!</h2>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows="4" 
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                      required
                    />
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
    
}