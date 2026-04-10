'use server';

import Link from 'next/link';
import Image from 'next/image';
import Header from '~/app/components/Header';

const page = {
  heading:
    'A minimal, production-focused starter for shipping on Vercel.',
  description: `Start with Pages Router, Tailwind and strict TypeScript. 
  Tanstack Query, Zustand, ready to use Clerk and Neon Serverless via Prisma. 
  Everything you need to start building SaaS.`,
  vercelUrl: 'https://vercel.com/new',
  githubUrl: 'https://github.com/EnchantedNight/Next.js',
};

export default async () => {
  return (
    <div className="min-h-screen bg-white text-black select-none">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 pt-6 sm:px-8 sm:pt-8">
        <Header />

        <section className="pt-10 sm:pt-14">
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {page.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
            {page.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={page.vercelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/90"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vercel-light.svg"
                alt="vercel"
                width={16}
                height={16}
                className="m-0 mr-3"
                loading="eager"
              />
              Deploy on Vercel
            </Link>
            <Link
              href={page.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-black/20 px-4 py-2 text-sm font-medium text-black transition hover:bg-black/5"
            >
              View GitHub
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
