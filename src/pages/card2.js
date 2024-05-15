import React from 'react';

export default function Card() {
  const publicUrl = process.env.PUBLIC_URL;
    return (
      <div className="bg-violet-400 min-h-screen py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-black text-lg leading-8 text-white font-isi py-6 drop-shadow-md">
            Kfilm Rate & Recommendation
          </h2>
          <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 sm:col-span-2 drop-shadow-xl"
              src={`${publicUrl}/aset2/20c.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/ditto.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/diva.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/minari.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/mp.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/oywd.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/pawn.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/tb.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/tn.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/tpm.png`}
              alt="foto"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-500 w-full object-contain lg:col-span-1 drop-shadow-xl"
              src={`${publicUrl}/aset2/unl.png`}
              alt="foto"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  