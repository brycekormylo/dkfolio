"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageProps = {
  src: StaticImageData;
  className: string;
};

const ModalImage: React.FC<ImageProps> = ({ src, className }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <button onClick={toggleModal} className={`relative ${className}`}>
      <Image
        src={src}
        fill={true}
        className="object-fill"
        alt="Portfolio Image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {isModalVisible && (
        <div
          onClick={toggleModal}
          className="fixed left-0 top-0 z-50 h-full w-full bg-timber/85 backdrop-blur-lg dark:bg-smoke/85"
        >
          <Image
            src={src}
            layout="fill"
            objectFit="contain"
            alt="Fullscreen Image"
            className="p-4"
            sizes="100vw"
          />
        </div>
      )}
    </button>
  );
};

export default ModalImage;
