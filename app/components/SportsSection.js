const sportsOptions = [
  {
    name: "Lari & Atletik",
    desc: "Mekanika lari efisien dan pencegahan cedera stres.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLYL5t8MTIrbdGs_3uSOvd7fO_SH4SKNmo4qwNgP9f-z1miPUPlYDGENII1BTB7c8_G74RjjNV3waaoknTuwhxtaLbj6lDN6n74RLDJlzPrEyOOVZW_c3D7PAC6wa8XJ_nlMh0DoJG7jJ0NLFWtB3wKh2AdMxdcK28J1tqHxQ3NguKoswD6Nx9_qACvMtYYDB9xEoWZh_sn92o_iixrVLfw6X3fgzFteH8J7TynG-V6cFvtPxEL95kzue5sb3IXvZjLq2DxqVhPuVt",
    className: "md:row-span-2",
  },
  {
    name: "Crossfit & Powerlifting",
    desc: "Optimasi teknik angkat beban dan stabilisasi inti.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxQH13nXRUTmC8B_kebYJOqy45pyFx8isJwIMvVC6KaMTXo0fRQrK5vYbDbp_ymZ7VzcfRucMK4ee_saVL7piFKNrM0xEsJTA37u1kQSCap_Nf0oeWmUDI01KOAMdVkyq045WTK_5Lyc219ojQcKhQ7-VDhWA1JvaxqEuGm0HSPRwmcKQm-CX4YGAdDUlPG0QglV8pufK37egU9S5jvZF9KrcZrNhyZAoGwavb553ao13smq1f0dDCN9BQ_jLnR2EkjloiMBC7stJj",
    className: "md:col-span-2",
  },
  {
    name: "Olahraga Raket",
    desc: "Kekuatan rotasi dan kesehatan sendi bahu.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJeRdEYh0cly0CgqDK6EsBZOUggz1x9YSokBZG5lVaJlcEIl5EkUAe9Payq2N7LPkT7NJzVXIcJeBqkwconNabwrcbAUPJvV2MDpUo9Ye-A1j0MTFuw3cuVMsXwFi8cLJDkKK5yBOcO_5UHtXrRKdigA9ZG-JkYB32uU4fKt5nlWwHVc9dPLLcPE1yIGMhaNwFwG9r_Mb0FDglb8nal3gNODrF9E3CVBnNNV6im3mhiurawkEmcXPUyqBg9RXdpvNxOZXbNG3bG0ns",
    className: "",
  },
  {
    name: "Sepak Bola",
    desc: "Ketangkasan lateral dan pemulihan lutut.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5hG53spJiOcp9n1XRoe1RaMaWFn3qKTXRTjXc27SHDrwt0BVGcqF0wR8km8PChKWGlYvOTCzBnO_wsJRglfBA5VGFf01JCTm1SOQzFh6HXnKlc95SHnEMmSVN5vHicjZ4oQd6UXdlFW5XzlMRQDVZh-dTAkSDF8r0TV6If2nITkUAnxmPyovDo5GOaE3YDYvZuwrTojMCWpjBwNTRVg5r8N_hcwTbooPxm6H4VV5UWa79U3gToAh78AXPaubcKGverJJM-t9fFN20",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Pelatihan Umum",
    desc: "Kebugaran holistik dan mobilitas harian.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3c3HVv8U4QSWk_7DZggy4a0MH0rs5SSP1zrJnOojEnT43kiK1eLGazatJWhYhz21yh0BVctBw5WzOipjJ5WqCPycdMYPr81Fl82pBy7D44qiSXgcA4icMM44S92miHPUJCv_dEYnSCqQducWE31y2z3QroEWCYlh9fCoKR4ObJ0iFYWmSeIMUFFV_62FzEh68yFWNn-X6hIMJ1w5AxpUBqnMZuo-b84KaI5Nce1R11q8ud9EE6xzD4chqbRNx83-wF4J3791x4m_w",
    className: "md:row-span-2",
  },
  {
    name: "Basket",
    desc: "Lompatan vertikal dan kesehatan engkel.",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    name: "Renang",
    desc: "Stabilitas bahu dan biomekanik air.",
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
    className: "md:col-span-2",
  },
  {
    name: "Sepeda",
    desc: "Kekuatan paha dan postur punggung bawah.",
    img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&h=400&fit=crop",
    className: "md:row-span-2",
  },
  {
    name: "Voli",
    desc: "Daya ledak dan ketahanan persendian.",
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=400&fit=crop",
    className: "",
  },
  {
    name: "Hiking & Outdoor",
    desc: "Ketahanan lutut dan stabilitas core.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
    className: "md:col-span-2",
  }
];

import Link from "next/link";

export default function SportsSection() {
  return (
    <section id="sports" className="py-20 bg-[#0C2D3D] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">Optimalkan Performa Anda</h2>
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
