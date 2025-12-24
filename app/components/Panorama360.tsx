"use client";

import dynamic from "next/dynamic";

const Pannellum = dynamic(
  () => import("pannellum-react").then((m) => m.Pannellum),
  { ssr: false }
);

export default function Panorama360() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Pannellum
        width="100%"
        height="100%"
        image="/images/room360.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl
        showFullscreenCtrl
      />
    </div>
  );
}
