'use client'

import DotGrid from "@/components/DotGrid/DotGrid";

export default function ReactBitsTesting() {
  //flex flex-col items-center justify-center space-y-4 min-h-[60vh] border-2 border-dotted
  return (
    <div className="">

        <h2 className="text-xl font-bold">Dot Grid</h2>
        <p>npx shadcn@latest add https://reactbits.dev/r/DotGrid-JS-TW</p>

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#DCE3E3"
            activeColor="#27F5EE"
            proximity={160}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
        />
        </div>

    </div>
  );
}
