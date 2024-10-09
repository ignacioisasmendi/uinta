"use client"

import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Player
        autoplay
        loop
        src="https://lottie.host/59d41ba0-32ef-4f41-bd72-2174fd6d9df4/Y7jO1R5Bki.json"
        style={{ height: '300px', width: '300px' }}
      >
        <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </div>
  );
}
