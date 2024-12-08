'use client';

import { useState } from 'react';

const Reels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentReel, setCurrentReel] = useState('');

  const openModal = (reelId: string) => {
    setCurrentReel(reelId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentReel('');
  };

  const reels = ['C_3-X3WObC1', 'C_VcwxURmat', 'C-BjNgqub5U', 'C_MTDYOO40T'];

  return (
    <>
      <div className="container mx-auto flex justify-center py-12">
        <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reelId, index) => (
            <div
              key={index}
              className="relative flex justify-center cursor-pointer"
              style={{ maxWidth: '250px', maxHeight: '250px' }}
              onClick={() => openModal(reelId)}
            >
              <img
                src={`/assets/img/reels/250x250/${reelId}.jpg`}
                alt={`Reel ${index + 1}`}
                className="rounded-lg shadow-md object-cover hover:opacity-70 transition-opacity duration-300"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-white hover:opacity-100 transition-opacity duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
            {currentReel ? (
              <iframe
                src={`https://www.instagram.com/reel/${currentReel}/embed`}
                width="100%"
                height="400"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Instagram Reel"
                className="rounded-lg"
              ></iframe>
            ) : (
              <p className="text-center">Cargando contenido...</p>
            )}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-dark-primary"
              aria-label="Cerrar modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Reels;
