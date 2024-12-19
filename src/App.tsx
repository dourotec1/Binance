import React from 'react';
import { LoginForm } from './components/LoginForm';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="rounded-lg py-10 px-8 border border-gray-700">
            <Logo />
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}