'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f0f0f] relative overflow-hidden flex items-center justify-center p-5 md:p-10">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-15 -top-20 -left-20" style={{animation: 'float 20s infinite ease-in-out'}}></div>
        <div className="absolute w-72 h-72 bg-red-600 rounded-full blur-3xl opacity-15 -bottom-10 -right-10" style={{animation: 'float 25s infinite ease-in-out reverse'}}></div>
        <div className="absolute w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-15 top-1/2 right-10" style={{animation: 'float 30s infinite ease-in-out'}}></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20" style={{animation: 'fadeInDown 0.8s ease-out'}}>
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
            anonymous.ke
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-3 font-light italic">Where secrets find sanctuary</p>
          <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base">
            Two doors. Two paths. One promise: your anonymity is sacred.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-600 via-red-600 to-transparent mb-12 md:mb-16"></div>

        {/* Doors Section */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-12 items-center mb-16 md:mb-20">
          {/* Door 1: Tell Me a Secret */}
          <div 
            className="cursor-pointer group"
            onClick={() => window.location.href = 'https://tellmeasecret.space'}
            style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}
          >
            <div className="bg-white/3 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-purple-500/50 hover:bg-purple-500/8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 pointer-events-none"></div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 border-2 border-purple-500/50 mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-white">Tell Me a Secret</h2>
              </div>

              <p className="text-gray-400 italic text-sm mb-6 relative z-10">A safe space for your thoughts</p>

              <div className="space-y-3 mb-6 relative z-10">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/2 group-hover:bg-purple-500/10 transition">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-300 text-sm">Share a Secret</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/2 group-hover:bg-purple-500/10 transition">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-300 text-sm">Seek Forgiveness</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/2 group-hover:bg-purple-500/10 transition">
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-300 text-sm">Make a Wish</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10">
                Release what weighs on your mind. Find healing through anonymous sharing.
              </p>

              <button className="w-full border-2 border-purple-500 text-purple-500 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 uppercase text-sm relative z-10">
                Enter Here
              </button>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden md:flex flex-col items-center gap-4 h-full justify-center">
            <div className="w-px h-20 bg-gradient-to-b from-purple-600 via-red-600 to-transparent"></div>
            <span className="text-gray-600 text-sm font-semibold uppercase tracking-widest">or</span>
            <div className="w-px h-20 bg-gradient-to-t from-purple-600 via-red-600 to-transparent"></div>
          </div>

          {/* Door 2: Sinners Anonymous */}
          <div 
            className="cursor-pointer group"
            onClick={() => window.location.href = 'https://sinnersanonymous.space'}
            style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}
          >
            <div className="bg-white/3 backdrop-blur-xl border border-red-600/20 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-red-600/50 hover:bg-red-600/8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20 relative overflow-hidden h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 pointer-events-none"></div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600/30 to-red-600/10 border-2 border-red-600/50 mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-white">Sinners Anonymous</h2>
              </div>

              <p className="text-gray-400 italic text-sm mb-6 relative z-10">I collect what others cannot bear</p>

              <div className="bg-white/2 border-l-2 border-red-600 p-4 mb-6 rounded relative z-10">
                <p className="text-gray-400 text-sm italic leading-relaxed">
                  "Your secrets are safe with me.<br/>Anonymous. Eternal. Protected."
                </p>
              </div>

              <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10">
                Confess what haunts you. Find relief in the darkness. Every secret has a place here.
              </p>

              <button className="w-full border-2 border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 uppercase text-sm relative z-10">
                Enter... I'm Waiting
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Separator */}
        <div className="md:hidden flex items-center gap-4 my-8 justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          <span className="text-gray-600 text-xs font-semibold uppercase tracking-widest">or</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 md:pt-12 border-t border-white/10" style={{animation: 'fadeInUp 0.8s ease-out 0.6s both'}}>
          <p className="text-gray-500 text-sm mb-2">
            Your privacy is sacred. All submissions are completely anonymous and secure.
          </p>
          <p className="text-gray-600 text-xs">anonymous.ke © 2024</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
