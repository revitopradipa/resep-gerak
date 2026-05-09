export default function PillarsSection() {
  return (
    <section id="pillars" className="py-20 md:py-24 px-8 bg-[#0C2D3D] text-white">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <span className="font-lexend text-xs md:text-sm font-semibold tracking-widest text-[#0794B9] uppercase block mb-3">
          FONDASI KAMI
        </span>
        <h2 className="font-oswald text-2xl md:text-3xl lg:text-4xl text-white uppercase font-bold tracking-wide">
          PILIH GERAK BERDASARKAN TUBUH, OLAHRAGA, ATAU KONDISI MEDIS
        </h2>
      </div>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="bg-[#EFF7FA] text-[#1d1c16] p-8 md:p-10 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#0794B9] flex flex-col h-full">
          <div className="w-14 h-14 rounded-xl bg-[#0C2D3D] flex items-center justify-center mb-6 mx-auto">
            <span className="material-symbols-outlined text-[#0794B9] text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>accessibility_new</span>
          </div>
          <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-center mb-4">Bagian Tubuh</h3>
          <p className="font-inter text-base text-[#42474b] text-center mb-8 flex-grow">Resep terarah untuk sendi dan kelompok otot spesifik.</p>
          <div className="text-center mt-auto">
            <a href="#body-parts" className="inline-block font-lexend text-sm font-semibold text-[#0C2D3D] border-2 border-[#0C2D3D] px-8 py-2.5 rounded hover:bg-[#0C2D3D] hover:text-white transition-colors">
              Jelajahi
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#EFF7FA] text-[#1d1c16] p-8 md:p-10 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#0794B9] flex flex-col h-full">
          <div className="w-14 h-14 rounded-xl bg-[#0C2D3D] flex items-center justify-center mb-6 mx-auto">
            <span className="material-symbols-outlined text-[#0794B9] text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>directions_run</span>
          </div>
          <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-center mb-4">Olahraga</h3>
          <p className="font-inter text-base text-[#42474b] text-center mb-8 flex-grow">Protokol pemulihan dan optimasi spesifik berdasarkan aktivitas.</p>
          <div className="text-center mt-auto">
            <a href="#sports" className="inline-block font-lexend text-sm font-semibold text-[#0C2D3D] border-2 border-[#0C2D3D] px-8 py-2.5 rounded hover:bg-[#0C2D3D] hover:text-white transition-colors">
              Jelajahi
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#EFF7FA] text-[#1d1c16] p-8 md:p-10 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-[#0794B9] flex flex-col h-full">
          <div className="w-14 h-14 rounded-xl bg-[#0C2D3D] flex items-center justify-center mb-6 mx-auto">
            <span className="material-symbols-outlined text-[#0794B9] text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>monitor_heart</span>
          </div>
          <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-center mb-4">Kondisi Medis</h3>
          <p className="font-inter text-base text-[#42474b] text-center mb-8 flex-grow">Strategi gerak berbasis bukti klinis untuk kondisi kronis.</p>
          <div className="text-center mt-auto">
            <a href="#conditions" className="inline-block font-lexend text-sm font-semibold text-[#0C2D3D] border-2 border-[#0C2D3D] px-8 py-2.5 rounded hover:bg-[#0C2D3D] hover:text-white transition-colors">
              Jelajahi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
