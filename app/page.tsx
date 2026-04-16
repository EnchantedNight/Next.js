import { githubUrl, vercelUrl } from '~/shared/constants';
import Header from '~/app/components/Header';
import Button from './components/Button';

const page = {
  heading:
    'A minimal, production-focused starter for shipping on Vercel.',
  description: `Start with App Router, Tailwind and strict TypeScript. 
  Tanstack Query, Zustand, ready to use Clerk and Neon Serverless via Prisma. 
  Everything you need to start building SaaS.`,
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
            <Button
              url={vercelUrl}
              imageSize={16}
              imageSrc="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vercel-light.svg"
              imageAlt="vercel"
              text="Deploy on Vercel"
              variant="dark"
            />
            <Button
              url={githubUrl}
              imageSize={16}
              imageSrc="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github.svg"
              imageAlt="github"
              text="View on Github"
              variant="light"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
