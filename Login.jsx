import React, { useState } from 'react';

export default function Login() {
  const [activeTab, setActiveTab] = useState('integrante'); 
  const [accessCode, setAccessCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (activeTab === 'integrante') {
      console.log('Iniciando sesión con el código de acceso:', accessCode);
    } else {
      console.log('Iniciando sesión como encargado:', email);
    }
  };

  return (
    <div className="min-h-screen bg-[#12365A] flex flex-col items-center justify-center p-4 font-sans">
      {/* Cabecera */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3 text-white text-3xl">
          🎓
        </div>
        <h1 className="text-white text-2xl font-bold tracking-wide">Bichos 2026</h1>
        <p className="text-blue-200 text-sm">Administración del curso</p>
      </div>

      {/* Tarjeta del Formulario */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8">
        
        {/* Selector de Pestañas */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('integrante')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'integrante'
                ? 'bg-white text-[#12365A] shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            👤 Integrante
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('encargado')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'encargado'
                ? 'bg-white text-[#12365A] shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            🛡️ Encargado
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-4">
          {activeTab === 'integrante' ? (
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                Código de acceso
              </label>
              <input
                type="text"
                placeholder="Ej: 482913"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#12365A] text-gray-800 placeholder-gray-400"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Ingresá con el código que te entregó el encargado del curso.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-[#12365A] p-3 text-xs text-blue-900 rounded-r-lg">
                ⚠️ Solo los integrantes de la comisión encargada. Ingresá con tu correo y contraseña.
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="bichos.medicina.2026@gmail.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#12365A] text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#12365A] text-gray-800"
                  required
                />
                <div className="text-right mt-1">
                  <a href="#" className="text-xs text-[#12365A] hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 bg-[#12365A] hover:bg-[#0f2d48] text-white font-semibold rounded-xl transition-all duration-200 shadow-md mt-6"
          >
            Ingresar
          </button>
        </form>
      </div>

      <p className="text-blue-200/60 text-xs mt-8">
        Acceso seguro • 44 integrantes
      </p>
    </div>
  );
}
