import React from 'react'

export const Contacto = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-gray-200 rounded-xl p-8 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Contactos</h2>
        <form>
          <input type="email" placeholder="nombre@ejemplo.com" className="w-full p-2 mb-4 text-white bg-transparent border-b border-gray-300 focus:outline-none" />
          <input type="text" placeholder="Nombre" className="w-full p-2 mb-4 text-white bg-transparent border-b border-gray-300 focus:outline-none" />
          <input type="tel" placeholder="Teléfono" className="w-full p-2 mb-4 text-white bg-transparent border-b border-gray-300 focus:outline-none" />
          <textarea placeholder="Mensaje" className="w-full p-2 mb-4 text-white bg-transparent border-b border-gray-300 focus:outline-none"></textarea>
          <button type="submit" className="w-full p-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}
