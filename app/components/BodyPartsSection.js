"use client";

import { useState } from "react";
import Link from "next/link";

export default function BodyPartsSection() {
  const [activePoint, setActivePoint] = useState(null);

  const points = [
    {
      label: "Kepala & Leher",
      desc: "Penanganan nyeri servikogenik & optimasi postur.",
      top: "15%",
      left: "50%",
    },
    {
      label: "Bahu",
      desc: "Rotator cuff, impingement, & stabilitas sendi bahu.",
      top: "23%",
      left: "40%",
    },
    {
      label: "Dada & Punggung Atas",
      desc: "Mobilitas toraks & penanganan nyeri dada non-kardiak.",
      top: "28%",
      left: "54%",
    },
    {
      label: "Siku",
      desc: "Rehabilitasi tennis elbow & golfer's elbow.",
      top: "33%",
      left: "30%",
    },
    {
      label: "Pergelangan Tangan",
      desc: "Penanganan carpal tunnel & tendinitis.",
      top: "27%",
      left: "75%",
    },
    {
      label: "Punggung Bawah",
      desc: "Nyeri lumbal, sciatica & stabilitas inti.",
      top: "40%",
      left: "42%",
    },
    {
      label: "Pinggul & Pelvis",
      desc: "Bursitis, impingement & fleksibilitas panggul.",
      top: "46%",
      left: "47%",
    },
    {
      label: "Lutut",
      desc: "Pemulihan ACL, meniscus & nyeri patellofemoral.",
      top: "61%",
      left: "70%",
    },
    {
      label: "Betis & Shin",
      desc: "Achilles tendinitis & kram betis.",
      top: "71%",
      left: "30%",
    },
    {
      label: "Pergelangan Kaki & Kaki",
      desc: "Sprain ankle, plantar fasciitis & stabilitas kaki.",
      top: "76%",
      left: "48%",
    },
  ];

  const imageSrc = "/body.jpg";

  return (
    <section id="body-parts" className="py-20 md:py-24 bg-[#EFF7FA]">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="font-lexend text-xs md:text-sm font-semibold tracking-widest text-[#0794B9] uppercase block mb-3 reveal">
          PILIH AREA
        </span>
        <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl text-[#0C2D3D] font-bold uppercase mb-8 tracking-wide reveal">
          PILIH BAGIAN TUBUHMU
        </h2>



        <div className="relative max-w-4xl mx-auto reveal">
          <img
            className="w-full h-auto object-cover rounded-3xl shadow-xl transition-all duration-500"
            src={imageSrc}
            alt="Human muscular system"
          />

          {/* Floating Interaction Points */}
          {points.map((pt, i) => (
            <Link
              href={`/articles?type=BODY_PART&category=${encodeURIComponent(pt.label)}`}
              key={`point-${i}`}
              className="absolute group z-10 animate-fade-in block"
              style={{ top: pt.top, left: pt.left, transform: 'translate(-50%, -50%)' }}
            >
              <div
                className="w-6 h-6 md:w-8 md:h-8 bg-[#0794B9] rounded-full animate-pulse cursor-pointer shadow-lg border-2 border-white"
                onMouseEnter={() => setActivePoint(i)}
                onMouseLeave={() => setActivePoint(null)}
              ></div>

              {/* Tooltip */}
              <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 md:mb-4 transition-opacity bg-white p-3 md:p-4 rounded-xl shadow-2xl text-left w-44 md:w-52 border border-gray-100 pointer-events-none z-20 ${activePoint === i ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
                <p className="font-lexend text-[10px] md:text-xs font-semibold text-[#0794B9] mb-1 tracking-wider uppercase">
                  Area Spesifik
                </p>
                <p className="font-oswald text-base md:text-lg font-bold text-[#0C2D3D] leading-tight mb-2">
                  {pt.label}
                </p>
                <p className="font-inter text-[10px] md:text-xs text-gray-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
