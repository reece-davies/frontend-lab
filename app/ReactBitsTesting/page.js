'use client'
import DecryptedText from '@/components/DecryptedText/DecryptedText.jsx';
import Carousel from '@/components/Carousel/Carousel.jsx'
import TextType from '@/components/TextType/TextType.jsx';
//console.log('TEST:', require('@/components/DecryptedText/DecryptedText.jsx'));

export default function ReactBitsTesting() {
  //flex flex-col items-center justify-center space-y-4 min-h-[60vh] border-2 border-dotted
  return (
    <div className="">
      <h2 className="text-xl font-bold">DecryptedText</h2>
      <p>npx jsrepo add https://reactbits.dev/tailwind/TextAnimations/DecryptedText</p>
      <DecryptedText
        text="THIS IS THE DECRYPTED TEXT"
        className="revealed"
        speed="180"
        animateOn="view"
        revealDirection="start"
      />


      <h2 className="text-xl font-bold">Carousel</h2>
      <p>npx jsrepo add https://reactbits.dev/tailwind/Components/Carousel</p>
      <div style={{ position: 'relative' }}>
        <Carousel
          baseWidth={300}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>


      <h2 className="text-xl font-bold">Text type</h2>
      <p>npx jsrepo add https://reactbits.dev/tailwind/TextAnimations/TextType</p>
      <TextType 
        text={["Text typing effect", "for your websites"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className='text-2xl font-bold'
      />

    </div>
  );
}
