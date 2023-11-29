export const metadata = {
  title: 'InterWallet',
  description: 'A next-generation crypto wallet for the next-generation of crypto adoption.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks /> */}
      {/* <Testimonials />1 */}
      <Newsletter />
    </>
  )
}
