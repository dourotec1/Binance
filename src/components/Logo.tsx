import React from 'react';

export function Logo() {
  return (
    <div className="flex flex-col items-start mb-8">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/1280px-Binance_logo.svg.png"
        alt="Binance"
        className="h-6 mb-6"
      />
      <h2 className="text-2xl font-bold text-white">
        Sign in
      </h2>
    </div>
  );
}