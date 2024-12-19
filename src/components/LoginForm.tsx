import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { SocialButtons } from './SocialButtons';
import { VerificationScreen } from './VerificationScreen';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
  };

  const handleSocialLogin = () => {
    setIsVerifying(true);
  };

  if (isVerifying) {
    return <VerificationScreen />;
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email/Phone Number
          </label>
          <div className="mt-2 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-500" />
            </div>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              className="block w-full pl-10 pr-3 py-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F0B90B] focus:border-[#F0B90B] text-white"
              placeholder="Email/phone (without country code)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#F0B90B] hover:bg-[#F0B90B]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F0B90B]"
          >
            Claim Gift
          </button>
          
          <a 
            href="#" 
            className="block text-center text-sm font-medium text-[#F0B90B] hover:text-[#F0B90B]/90"
          >
            Create a Binance Account
          </a>
        </div>
      </form>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[rgb(22,26,30)] text-gray-400">or</span>
          </div>
        </div>

        <div className="mt-8">
          <SocialButtons onSocialLogin={handleSocialLogin} />
        </div>
      </div>
    </div>
  );
}
