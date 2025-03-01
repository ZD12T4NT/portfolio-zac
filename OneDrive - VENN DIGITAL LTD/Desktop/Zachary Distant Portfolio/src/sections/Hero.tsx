import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from '@/components/HeroOrbit'
import SparkleIcon from '@/assets/icons/sparkle.svg'

export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent,black_10%,black_70%,transparent)]">

    <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}></div>
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    
    <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s'>
    <SparkleIcon className="size-8 text-emerald-300/20" />
   </HeroOrbit>

   <HeroOrbit size={440} rotation={79} shouldOrbit shouldSpin spinDuration='3s' orbitDuration='32s'>
    <SparkleIcon className="size-5 text-emerald-300/20" />
   </HeroOrbit>
   
   <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
    <div className="size-2 bg-emerald-300/20 rounded-full"></div>
   </HeroOrbit>

   <HeroOrbit size={530} rotation={178} shouldOrbit shouldSpin spinDuration='3s' orbitDuration='36s'>
    <SparkleIcon className="size-10 text-emerald-300/20" />
   </HeroOrbit>

   <HeroOrbit size={550} rotation={20} shouldOrbit shouldSpin spinDuration='10s' orbitDuration='38s'>
    <StarIcon className="size-12 text-emerald-300"/>
   </HeroOrbit>

   <HeroOrbit size={590} rotation={98} shouldOrbit shouldSpin spinDuration='6s' orbitDuration='40s'>
    <StarIcon className="size-8 text-emerald-300" />
   </HeroOrbit>

   <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
    <div className="size-3 bg-emerald-300/20 rounded-full"></div>
   </HeroOrbit>

   <HeroOrbit size={710} rotation={144} shouldOrbit shouldSpin spinDuration='3s' orbitDuration='44s'>
    <SparkleIcon className="size-14 text-emerald-300/20" />
   </HeroOrbit>
  
   <HeroOrbit size={720} rotation={85} shouldOrbit  orbitDuration='46s'>
    <div className="size-3 bg-emerald-300/20 rounded-full"></div>
   </HeroOrbit>

   <HeroOrbit size={800} rotation={-72} shouldOrbit shouldSpin spinDuration='8s' orbitDuration='48s'>
    <StarIcon className="size-28 text-emerald-300" />
   </HeroOrbit>
   </div>



    <div className="container z-10 relative" >
      <div className='flex flex-col items-center'>
  <Image src={memojiImage} className='size-[100px]' alt=''/>
  <div className='bg-gray-950 border border-gray-900 px-4 py-1.5 inline-flex items-center gap-4 rounded-large'>
    <div className='bg-green-500 size-2.5 rounded-full relative'>
      <div className="bg-green-500 inset-0 absolute rounded-full animate-ping-large "></div>
    </div>
    <div className='text-sm font-medium'>Available for work</div>
  </div>
  </div>
  <div className='max-w-lg mx-auto'>
  <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
  <p className='mt-4 text-center text-white/60 md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum dolore distinctio laudantium corporis libero numquam aspernatur nobis quisquam optio!</p>
  </div>
  <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
    <a href="#projects" className='inline-flex items-center gap-2 border border-white/15 hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out px-6 h-12 rounded-xl'>
      <span className='font-semibold'>Explore my Work</span>
      <ArrowDown className="size-4" />
    </a>
    <a href="#contact" className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 hover:bg-transparent hover:border-white/15 transition duration-500 ease-in-out hover:text-white h-12 px-6 rounded-xl'>
      <span>🤙</span>
      <span className='font-semibold'>Lets Connect</span>
    </a>
  </div>
    </div>
  </div>;
};
