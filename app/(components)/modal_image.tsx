"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageProps = {
  src: StaticImageData;
};

const ModalImage: React.FC<ImageProps> = ({ src }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <button
      onClick={toggleModal}
    >
      <Image
        src={src}
        fill={true}
        className="object-fill"
        alt="Portfolio Image"
      />
      {isModalVisible && (
        <div
          onClick={toggleModal}
          className="fixed top-0 left-0 z-50 w-full h-full bg-timber/85 dark:bg-smoke/85 backdrop-blur-lg"
        >
          <Image
            src={src}
            layout="fill"
            objectFit="contain"
            alt="Fullscreen Image"
            className="p-4"
          />
        </div>
      )}
    </button>
  );
};

export default ModalImage;
