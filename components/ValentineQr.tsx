import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Flower2 } from 'lucide-react';

const ValentineQr: React.FC = () => {
  const qrValue = 'https://aaniversary-eight.vercel.app/'; // URL to be added here

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 p-4 relative overflow-hidden">
    {/* Decorative Flowers */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Top Left Flowers */}
      <div className="absolute -top-4 -left-4 transform rotate-45 text-pink-300 opacity-50">
        <Flower2 size={64} />
      </div>
      <div className="absolute top-12 left-12 transform -rotate-12 text-red-300 opacity-50">
        <Flower2 size={48} />
      </div>
      
      {/* Top Right Flowers */}
      <div className="absolute -top-4 -right-4 transform -rotate-45 text-pink-300 opacity-50">
        <Flower2 size={64} />
      </div>
      <div className="absolute top-16 right-16 transform rotate-12 text-red-300 opacity-50">
        <Flower2 size={48} />
      </div>
      
      {/* Bottom Left Flowers */}
      <div className="absolute -bottom-4 -left-4 transform -rotate-45 text-pink-300 opacity-50">
        <Flower2 size={64} />
      </div>
      <div className="absolute bottom-16 left-20 transform rotate-45 text-red-300 opacity-50">
        <Flower2 size={48} />
      </div>
      
      {/* Bottom Right Flowers */}
      <div className="absolute -bottom-4 -right-4 transform rotate-45 text-pink-300 opacity-50">
        <Flower2 size={64} />
      </div>
      <div className="absolute bottom-20 right-16 transform -rotate-12 text-red-300 opacity-50">
        <Flower2 size={48} />
      </div>
      
      {/* Center Decorative Flowers */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-pink-300 opacity-30">
        <Flower2 size={40} />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-pink-300 opacity-30">
        <Flower2 size={40} />
      </div>
    </div>

    {/* QR Code */}
    <div className="w-full max-w-[256px] aspect-square p-4 bg-white rounded-2xl shadow-lg overflow-hidden relative z-10">
      <QRCodeSVG
        value={qrValue}
        size={256}
        level="H"
        includeMargin={true}
        fgColor="#ff1493"
        className="w-full h-full"
        style={{ outline: 'none' }}
      />
    </div>
  </div>
);
};

export default ValentineQr;