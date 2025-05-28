import React from "react";
import { BsQuote } from "react-icons/bs";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div>
      <BsQuote className="w-14 h-14 text-pink-500" />
      <p className="text-center text-gray-800 dark:text-gray-200 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat
        enim hic dicta non! Quas repudiandae tempora numquam odit quibusdam,
        quasi officiis illo nisi molestias nobis voluptatem? Veritatis, itaque
        quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        animi voluptatum numquam nostrum fuga eum quisquam corrupti eligendi
        esse repellat maxime cum. Earum deserunt aperiam alias nam harum,
        laborum quia!
      </p>
      <div className="mt-6">
        <Image
          src={image}
          alt="image"
          width={100}
          height={100}
          className="onject-center mx-auto rounded-full"
        />
        <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
        <h1 className="text-center text-gray-500">{role}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
