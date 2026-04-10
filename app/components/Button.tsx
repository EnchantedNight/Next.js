'use server';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
  url: string;
  imageSize: number;
  imageSrc: string;
  text: string;
  variant: 'light' | 'dark';
};

export default async ({
  url,
  imageSize,
  imageSrc,
  text,
  variant,
}: Props) => {
  const className =
    variant === 'light'
      ? 'border border-black/20 px-4 py-2 text-sm text-black hover:bg-black/5'
      : 'bg-black px-4 py-2 text-sm text-white hover:bg-black/90';
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`${className} inline-flex items-center rounded-md transition font-medium`}
    >
      <Image
        src={imageSrc}
        alt="github"
        width={imageSize}
        height={imageSize}
        className="m-0 mr-3"
        loading="eager"
      />
      {text}
    </Link>
  );
};
