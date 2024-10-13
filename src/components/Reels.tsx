'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal, ModalBody, ModalFooter, ModalContent } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import { useDisclosure } from '@nextui-org/react';

const Reels = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentReel, setCurrentReel] = useState('');

  const openModal = (reelId: string) => {
    setCurrentReel(reelId);
    onOpen();
  };

  const closeModal = () => {
    onOpenChange();
    setCurrentReel('');
  };

  const reels = ['C_3-X3WObC1', 'C_VcwxURmat', 'C-BjNgqub5U', 'C_MTDYOO40T'];

  return (
    <>
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reelId, index) => (
            <div
              key={index}
              className="relative flex justify-center cursor-pointer"
              style={{ maxWidth: '250px', maxHeight: '250px' }}
              onClick={() => openModal(reelId)}
            >
              <Image
                src={`/assets/img/reels/${reelId}.jpg`}
                alt={`Reel ${index + 1}`}
                width={250}
                height={250}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 250px"
                className="rounded-lg shadow-md object-cover hover:opacity-70 transition-opacity duration-300"
                priority={index === 0} // Prioriza la primera imagen
                loading={index === 0 ? 'eager' : 'lazy'} // Carga lenta para imágenes secundarias
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

      {/* Modal */}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="rounded-lg shadow-lg"
      >
        <ModalContent className="p-4">
          <ModalBody className="flex justify-center items-center">
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
          </ModalBody>
          <ModalFooter className="flex justify-center">
            <Button
              onPress={closeModal}
              className="bg-[#78eb2c] text-black hover:bg-[#32cddb] focus:ring"
              aria-label="Cerrar el modal de reel de Instagram"
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Reels;
