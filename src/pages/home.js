import React from 'react';

export default function Home() {
    return (
      <div className="bg-violet-400 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold leading-2 text-white font-judul drop-shadow-md">
            WELCOME TO KDRAMA & KFILM RECOMMENDATION
          </h1>
          <h2 className="text-xl px-4 py-8 text-white font-isi">
            Seluruh rate dan rekomendasi ini adalah berdasarkan pandangan diri saya sendiri. Setiap orang pasti memiliki ratingnya masing-masing berdasarkan apa yang dia suka dan tidak dia sukai. Semoga rate dan rekomendasi ini bisa membantu kamu ketika bingung memilih apa yang ingin ditonton!
          </h2>
          <h3 className="italic font-bold px-4 py-8 text-white font-isi">Created by ibnu</h3>
        </div>
      </div>
    );
}
