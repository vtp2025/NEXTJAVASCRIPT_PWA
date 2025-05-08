export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      {/* Wrapper berukuran HP */}
      <div className="w-full max-w-[430px] min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100 shadow-xl">
        
        {/* Top Bar Lokasi */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Surakarta</h2>
            <p className="text-sm text-gray-500">Jawa Tengah, Indonesia</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 0c-4 0-7 1.5-7 4v2h14v-2c0-2.5-3-4-7-4z" />
            </svg>
          </div>
        </header>

        {/* Konten Utama */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          {/* Card Utama */}
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md mb-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-3">Hello, PWA!</h1>
            <p className="text-gray-700">Ini PWA dengan Next.js dan Tailwind CSS.</p>
          </div>

          {/* Card Primera Map Token */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-5 rounded-2xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Primera Map Token</h2>
            <p className="text-sm leading-relaxed">
              Gunakan token ini untuk menavigasi sistem PWA dengan presisi tinggi dan peta dinamis.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="bg-white shadow-lg shrink-0">
          <ul className="flex justify-between p-4">
            {/* Home */}
            <li className="flex-1 text-center">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
                </svg>
                <span className="text-sm">Home</span>
              </a>
            </li>

            {/* Location */}
            <li className="flex-1 text-center">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 0c-4 0-7 1.5-7 4v2h14v-2c0-2.5-3-4-7-4z" />
                </svg>
                <span className="text-sm">Location</span>
              </a>
            </li>

            {/* Scan Barcode */}
            <li className="flex-1 text-center">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto -mt-8 shadow-lg border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </a>
            </li>

            {/* Order */}
            <li className="flex-1 text-center">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 9V5a1 1 0 00-1-1H5a1 1 0 00-1 1v4m12 0h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
                </svg>
                <span className="text-sm">Order</span>
              </a>
            </li>

            {/* Profile */}
            <li className="flex-1 text-center">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A8 8 0 0112 4a8 8 0 016.879 13.804M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Profile</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
