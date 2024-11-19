import React from "react";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hallo ITGROWUP</h1>
        <p className="text-gray-600 text-lg">
          SELAMAT DATANG DI TESTING APP CREATED BY ITGROWUP
        </p>
        <button
          onClick={() => alert("Hallo kembali!")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
        >
          Klik Saya
        </button>
      </div>
    </div>
  );
}

export default App;
