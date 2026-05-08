const sportsOptions = [
  {
    name: "Lari",
    desc: "Meningkatkan efisiensi mekanika lari dan pencegahan cedera stres pada kaki.",
    img: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=600&h=800&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Sepak Bola",
    desc: "Pelatihan ketangkasan lateral, akselerasi, dan stabilitas ligamen lutut.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Tenis",
    desc: "Penguatan footwork eksplosif dan stabilisasi pergelangan tangan.",
    img: "https://images.unsplash.com/photo-1622279457486-62dcc4a4977b?w=800&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Padel",
    desc: "Optimalisasi kekuatan rotasi tubuh dan kesehatan sendi bahu.",
    img: "https://images.unsplash.com/photo-1626244233630-9092497645f0?w=600&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Hiking",
    desc: "Ketahanan lutut untuk medan curam dan stabilitas keseimbangan beban.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Hyrox",
    desc: "Kombinasi kekuatan fungsional dan daya tahan kardiovaskular intensitas tinggi.",
    img: "https://images.unsplash.com/photo-1599058917233-97f9342b4674?w=600&h=800&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Basket",
    desc: "Peningkatan daya ledak vertikal dan perlindungan sendi engkel.",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Voli",
    desc: "Daya ledak lompatan dan teknik pendaratan yang aman bagi persendian.",
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Renang",
    desc: "Mobilitas bahu tingkat lanjut dan efisiensi biomekanik dalam air.",
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Gym & Fitness",
    desc: "Optimasi teknik angkat beban, hipertrofi, dan stabilisasi otot inti.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Badminton",
    desc: "Kecepatan reaksi, kekuatan smash, dan kelincahan pergerakan lapangan.",
    img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Sepeda",
    desc: "Kekuatan paha (quadriceps) dan koreksi postur untuk punggung bawah.",
    img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&h=800&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
];

import Link from "next/link";

export default function SportsSection() {
  return (
    <section id="sports" className="py-20 bg-[#0C2D3D] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">Pilih Olahraga mu</h2>
          <p className="font-inter text-base text-white/60 max-w-xl mx-auto">
            Program spesifik cabang olahraga yang dirancang untuk meningkatkan output atletik dan ketahanan cedera.
          </p>
        </div>
        <div className="grid gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense">
          {sportsOptions.map((sport, idx) => (
            <Link href={`/articles?type=SPORT_TYPE&category=${encodeURIComponent(sport.name)}`} key={idx} className={`relative overflow-hidden rounded-2xl group block ${sport.className}`}>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={sport.img}
                alt={sport.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 z-10 pointer-events-none">
                <h3 className="font-oswald text-xl md:text-2xl font-bold mb-2">{sport.name}</h3>
                <p className="font-inter text-xs md:text-sm text-[white/70]">{sport.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
