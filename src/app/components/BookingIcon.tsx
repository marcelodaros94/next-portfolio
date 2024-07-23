"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';

function WhatsAppIcon() {
  const { language, data } = useContent();
  const { booking } = data[language];

  return (
    <a
      href="https://wa.me/yourwhatsappphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center space-x-2"
    >
      <FaWhatsapp size={30} />
      <span>{booking}</span>
    </a>
  );
}

export default WhatsAppIcon;