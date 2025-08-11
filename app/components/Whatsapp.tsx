import React from 'react';
import Image from 'next/image';

const WhatsappContact: React.FC = () => {
  const whatsappNumber = '+254793042033';
  const message = 'Hello, I would like to know more about your services.';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow hover:bg-gray-200 transition"
        aria-label="Chat with us on WhatsApp"
      >
        <Image
          src="/icons/whatsapp.svg" 
          alt="WhatsApp"
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="text-gray-700 font-medium">Chat with us</span>
      </a>
    </div>
  );
};

export default WhatsappContact;
