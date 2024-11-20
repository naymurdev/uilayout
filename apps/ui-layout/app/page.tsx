// import Header from '@/components/website/header';
import HeroSec from '@/components/website/home/hero-sec';
import HomeFooter from '@/components/website/home/home-footer';
import HomeHeader from '@/components/website/home/home-header';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main
        className="relative before:absolute before:top-0 before:left-0 before:w-full 
      before:h-full before:content-[''] before:opacity-[0.03] before:z-[100] before:pointer-events-none 
      before:bg-[url('/noise.gif')]"
      >
        <HeroSec />
        <HomeFooter />
      </main>
    </>
  );
}
