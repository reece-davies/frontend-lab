'use client'
import DecryptedText from '@/components/DecryptedText/DecryptedText.jsx';
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
    </div>
  );
}
