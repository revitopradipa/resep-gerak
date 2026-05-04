"use client";

import { useState } from "react";
import Link from "next/link";

export default function BodyPartsSection() {
  const [view, setView] = useState("front");
  const [activePoint, setActivePoint] = useState(null);

  const handleViewChange = (newView) => {
    setView(newView);
    setActivePoint(null);
  };

  const frontPoints = [
    {
      label: "KEPALA & LEHER",
      desc: "Penanganan nyeri servikogenik & optimasi postur.",
      top: "15%",
      left: "50%",
    },
    {
      label: "BAHU",
      desc: "Rotator cuff, impingement, & stabilitas sendi bahu.",
      top: "23%",
      left: "60%",
    },
    {
      label: "DADA & PUNGGUNG ATAS",
      desc: "Mobilitas toraks & penanganan nyeri dada non-kardiak.",
      top: "30%",
      left: "50%",
    },
    {
      label: "SIKU",
      desc: "Rehabilitasi tennis elbow & golfer's elbow.",
      top: "33%",
      left: "75%",
    },
    {
      label: "PERUT",
      desc: "Stabilitas inti (core), pemulihan diastasis recti & penguatan abdominal.",
      top: "42%",
      left: "50%",
    },
    {
      label: "PERGELANGAN TANGAN",
      desc: "Penanganan carpal tunnel & tendinitis.",
      top: "23%",
      left: "29%",
    },
    {
      label: "PINGGUL",
      desc: "Bursitis, impingement & fleksibilitas panggul.",
      top: "44%",
      left: "62%",
    },
    {
      label: "LUTUT",
      desc: "Pemulihan ACL, meniscus & nyeri patellofemoral.",
      top: "64%",
      left: "32%",
    },
    {
      label: "PERGELANGAN KAKI",
      desc: "Sprain ankle, plantar fasciitis & stabilitas kaki.",
      top: "83%",
      left: "29%",
    },
  ];

  const backPoints = [
    {
      label: "LEHER BELAKANG",
      desc: "Ketegangan servikal & sakit kepala tegang.",
      top: "17%",
      left: "54%",
    },
    {
      label: "TULANG BELIKAT",
      desc: "Nyeri skapula & stabilitas bahu belakang.",
      top: "23%",
      left: "50%",
    },
    {
      label: "PUNGGUNG ATAS",
      desc: "Nyeri rhomboid & perbaikan postur toraks.",
      top: "26%",
      left: "58%",
    },
    {
      label: "SIKU BELAKANG",
      desc: "Olecranon bursitis & triceps tendinopathy.",
      top: "38%",
      left: "45%",
    },
    {
      label: "PUNGGUNG BAWAH",
      desc: "Nyeri lumbal, sciatica & stabilitas inti.",
      top: "38%",
      left: "56%",
    },
    {
      label: "GLUTEUS",
      desc: "Piriformis syndrome & kelemahan glute.",
      top: "49%",
      left: "56%",
    },
    {
      label: "HAMSTRING",
      desc: "Ketegangan hamstring & tendinopathy lutut.",
      top: "67%",
      left: "64%",
    },
    {
      label: "BETIS & ACHILLES",
      desc: "Achilles tendinitis & kram betis.",
      top: "76%",
      left: "39%",
    },
  ];

  const points = view === "front" ? frontPoints : backPoints;
  const imageSrc = view === "front" ? "/fullbody.jpg" : "/bodyback.png";

  return (
    <section id="body-parts" className="py-20 md:py-24 bg-[#EFF7FA]">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="font-lexend text-xs md:text-sm font-semibold tracking-widest text-[#0794B9] uppercase block mb-3 reveal">
          PILIH AREA
        </span>
        <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl text-[#0C2D3D] font-bold uppercase mb-8 tracking-wide reveal">
          PILIH BAGIAN TUBUHMU
        </h2>

        {/* Toggle View */}
        <div className="flex justify-center mb-8 reveal">
          <div className="bg-[#0C2D3D]/10 p-1 rounded-xl inline-flex">
            <button
              onClick={() => handleViewChange("front")}
              className={`px-8 py-2.5 rounded-lg font-lexend text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${view === "front" ? "bg-[#0794B9] text-white shadow-md" : "text-[#0C2D3D]/60 hover:text-[#0C2D3D]"}`}
            >
              Depan
            </button>
            <button
              onClick={() => handleViewChange("back")}
              className={`px-8 py-2.5 rounded-lg font-lexend text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${view === "back" ? "bg-[#0794B9] text-white shadow-md" : "text-[#0C2D3D]/60 hover:text-[#0C2D3D]"}`}
            >
              Belakang
            </button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          <img
            className="w-full h-auto object-cover rounded-3xl shadow-xl transition-all duration-500"
            src={imageSrc}
            alt="Human muscular system"
          />

          {/* Floating Interaction Points */}
          {points.map((pt, i) => (
            <Link
              href={`/articles?bodyPart=${encodeURIComponent(pt.label)}`}
              key={`${view}-${i}`}
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
