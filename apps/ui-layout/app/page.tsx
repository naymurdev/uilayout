import HeroSec from '@/components/website/home/hero-sec';
import HomeFooter from '@/components/website/home/home-footer';
import HomeHeader from '@/components/website/home/home-header';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className='relative  pb-8'>
        <HeroSec />
        <HomeFooter />
      </main>
    </>
  );
}
