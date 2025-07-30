import { FaGithub, FaLinkedin, FaEnvelope, FaCamera, FaRunning } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Matt Enarle
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Marathoner, coder, and film photographer from Bacolod City 🇵🇭
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            I build things that matter. My focus is on creating applications that solve real problems, 
            whether it's safety systems for wheelchairs or platforms that connect people.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/mattenarle10" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/matthew-enarle" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:enarlem10@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tech I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">AI/ML</h3>
              <p className="text-gray-600 text-sm">TensorFlow, Python, OpenCV, FastAPI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Web</h3>
              <p className="text-gray-600 text-sm">Next.js, Vue.js, React</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Mobile</h3>
              <p className="text-gray-600 text-sm">Flutter, Android (Java)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Cloud</h3>
              <p className="text-gray-600 text-sm">AWS, DynamoDB, RDS, S3, Amplify</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Things I've Built</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🧠 NeuroWarn BCI</h3>
              <p className="text-gray-600 mb-3">AI-powered safety system for smart wheelchairs. My undergrad thesis!</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">AI/ML</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">TensorFlow</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🛒 Anik.3D</h3>
              <p className="text-gray-600 mb-3">Cloud-Native ecommerce platform for high-quality 3D Aniks using Next.js and AWS.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">AWS</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">E-commerce</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🍽️ Reserba</h3>
              <p className="text-gray-600 mb-3">Platform for food stall reservation and management built with Flutter.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Flutter</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Mobile</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Reservation System</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🏔️ Off the Grid</h3>
              <p className="text-gray-600 mb-3">Hike tracking app for mountaineers in Negros Occidental using Google Maps API.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Flutter</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Google Maps</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Location Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Interests */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">When I'm Not Coding</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaCamera className="text-2xl text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Film Photography</h3>
              </div>
              <p className="text-gray-600">Capturing moments on 35mm film, exploring the art of analog photography.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FaRunning className="text-2xl text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Marathon Running</h3>
              </div>
              <p className="text-gray-600">Training for marathons and pushing physical limits on the road.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://linkedin.com/in/matthew-enarle" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:enarlem10@gmail.com" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Email
            </a>
            <a href="https://github.com/mattenarle10" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              GitHub
            </a>
          </div>
          <p className="text-gray-500">
            © 2024 Matt Enarle. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </section>
    </div>
  );
}
