export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyApp</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Next.js + Tailwind Site
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          This is your starter layout with a navbar and hero section.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">About Nyxardrop</h3>
        <p className="text-gray-600 leading-relaxed">
          This is a simple starter site built with Next.js and Tailwind CSS.
          You can customize it to showcase your project, portfolio, or business.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}
