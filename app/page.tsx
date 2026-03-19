import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Huong Pho Vietnamese Pte. Ltd.",
    "description": "Authentic Vietnamese restaurant in Singapore serving traditional Pho and noodle dishes",
    "url": "https://huongpho.com.sg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "121 Carpmael Road",
      "addressLocality": "Singapore",
      "postalCode": "429977",
      "addressCountry": "SG"
    },
    "email": "Deqi2012@gmail.com",
    "sameAs": [
      "https://www.instagram.com/huongphovietnamese"
    ]
  };

  const foodImages = [
    { src: "/food/Image1.jpeg", alt: "Vietnamese Pho 1" },
    { src: "/food/Image2.jpeg", alt: "Vietnamese Pho 2" },
    { src: "/food/Image3.jpeg", alt: "Vietnamese Cuisine 3" },
    { src: "/food/Image4.jpeg", alt: "Vietnamese Cuisine 4" },
    { src: "/food/Image5.jpeg", alt: "Vietnamese Noodles 5" },
    { src: "/food/Image6.jpeg", alt: "Vietnamese Noodles 6" },
    { src: "/food/Image7.jpeg", alt: "Vietnamese Food 7" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #1a0a00 100%)" }}>

        {/* Navigation */}
        <nav style={{ background: "rgba(20,8,0,0.97)", borderBottom: "2px solid #c9a84c" }} className="sticky top-0 z-50 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
                <div className="flex flex-col leading-tight">
                  <span className="font-extrabold text-lg tracking-wide" style={{ color: "#c9a84c" }}>
                    HUONG PHO
                  </span>
                  <span className="text-xs font-medium" style={{ color: "#e8c97a", letterSpacing: "0.1em" }}>
                    VIETNAMESE
                  </span>
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <a href="#about" className="text-sm font-medium transition" style={{ color: "#e8c97a" }}>About</a>
                <a href="#services" className="text-sm font-medium transition" style={{ color: "#e8c97a" }}>Services</a>
                <a href="#gallery" className="text-sm font-medium transition" style={{ color: "#e8c97a" }}>Gallery</a>
                <a href="#contact" className="text-sm font-medium transition" style={{ color: "#e8c97a" }}>Contact</a>
                <Link href="/privacy-policy" className="text-xs font-medium transition" style={{ color: "#9a8060" }}>Privacy Policy</Link>
                <Link href="/terms" className="text-xs font-medium transition" style={{ color: "#9a8060" }}>Terms</Link>
              </div>
              {/* Mobile */}
              <div className="md:hidden flex items-center gap-3">
                <a href="#gallery" className="text-xs font-medium" style={{ color: "#e8c97a" }}>Gallery</a>
                <a href="#contact" className="text-xs font-medium" style={{ color: "#e8c97a" }}>Contact</a>
                <Link href="/privacy-policy" className="text-xs font-medium" style={{ color: "#9a8060" }}>Privacy</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          {/* Vietnamese lantern decoration */}
          <div className="flex justify-center gap-4 mb-6">
            <span style={{ fontSize: "2rem" }}>🏮</span>
            <span style={{ fontSize: "2rem" }}>🍜</span>
            <span style={{ fontSize: "2rem" }}>🏮</span>
          </div>

          <h1 className="font-extrabold mb-3 tracking-widest" style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#c9a84c",
            textShadow: "0 2px 20px rgba(201,168,76,0.4)"
          }}>
            HUONG PHO VIETNAMESE
          </h1>
          <p className="font-semibold text-lg mb-2 tracking-widest uppercase" style={{ color: "#e8c97a", letterSpacing: "0.25em" }}>
            PTE. LTD.
          </p>
          <div className="flex justify-center mb-6">
            <div style={{ height: "2px", width: "120px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          </div>
          <p className="text-lg max-w-2xl mx-auto font-light mb-2" style={{ color: "#d4b896" }}>
            Authentic Vietnamese cuisine crafted with tradition, passion, and the finest ingredients.
          </p>
          <p className="text-sm" style={{ color: "#9a8060" }}>
            121 Carpmael Road, Singapore 429977
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://www.instagram.com/huongphovietnamese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)", color: "#1a0a00" }}
            >
              <span>📸</span> Follow on Instagram
            </a>
            <a
              href="mailto:Deqi2012@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 border-2"
              style={{ borderColor: "#c9a84c", color: "#c9a84c", background: "transparent" }}
            >
              <span>✉️</span> Contact Us
            </a>
          </div>
        </div>

        {/* Service Cards (POS System) */}
        <div id="services" className="container mx-auto px-4 pb-16">
          <h2 className="text-center font-bold text-3xl mb-2" style={{ color: "#c9a84c" }}>Our Services</h2>
          <p className="text-center text-sm mb-10" style={{ color: "#9a8060" }}>Table-service dining with a modern POS ordering experience</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Vietnamese Snacks & Sides Card */}
            <div className="rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.3)" }}>
              <div className="p-6" style={{ background: "linear-gradient(135deg, #1a5c1a, #27ae60)" }}>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">🥢</span>
                  Vietnamese Snacks &amp; Sides
                </h2>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>Nem Nyong, Thit Nuong, Ca Phe &amp; more</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 text-white" style={{ background: "#1a5c1a" }}>1</span>
                    Waiter Takes Your Order
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>Our staff takes your selection of snacks, grilled dishes or beverages at your table via our POS terminal.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 text-white" style={{ background: "#1a5c1a" }}>2</span>
                    Order Sent to Kitchen
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>The POS instantly pushes the ticket to our kitchen — your Nem Nyong, Thit Nuong or Ca Phe is prepared fresh to order.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 text-white" style={{ background: "#1a5c1a" }}>3</span>
                    Dish Delivered to You
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>Your grilled skewers, fresh spring rolls, or iced Ca Phe Muoi are served straight to your table — hot, cold, and exactly right.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    🖥️ POS System Benefits
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>Customise sides &amp; drinks precisely, faster kitchen turnaround, and seamless payment at the end of your meal.</p>
                </div>
              </div>
            </div>

            {/* Pho & Vietnamese Noodles Card */}
            <div className="rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.3)" }}>
              <div className="p-6" style={{ background: "linear-gradient(135deg, #b5620a, #c9a84c)" }}>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-3xl">🍜</span>
                  Pho &amp; Vietnamese Noodles
                </h2>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>Slow-cooked broths &amp; fresh noodle bowls</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 text-white" style={{ background: "#b5620a" }}>1</span>
                    Waiter Takes Your Order
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>Your server takes your Pho or noodle preference at your table — broth type, protein, toppings &amp; spice level.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 text-white" style={{ background: "#b5620a" }}>2</span>
                    Order Sent to Kitchen
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>The POS instantly pushes the ticket to our kitchen, where our chefs begin preparing your bowl with fresh, aromatic broth.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 text-white" style={{ background: "#b5620a" }}>3</span>
                    Dish Delivered to You
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>A steaming, fragrant bowl of Pho or noodles is served fresh to your table — exactly as you ordered it.</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <h3 className="font-semibold text-base mb-1" style={{ color: "#c9a84c" }}>
                    🖥️ POS System Benefits
                  </h3>
                  <p className="text-sm" style={{ color: "#d4b896" }}>Customisation captured precisely, faster kitchen turnaround, and seamless bill splitting &amp; payment.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Food Gallery Section */}
        <div id="gallery" className="pb-16" style={{ background: "rgba(0,0,0,0.3)" }}>
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-center font-bold text-3xl mb-2" style={{ color: "#c9a84c" }}>Our Food</h2>
            <p className="text-center text-sm mb-10" style={{ color: "#9a8060" }}>A taste of Vietnam — captured fresh</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {foodImages.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300 group"
                  style={{
                    aspectRatio: "9/16",
                    border: "1px solid rgba(201,168,76,0.25)"
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(201,168,76,0.3), transparent)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="container mx-auto px-4 py-16">
          <div className="rounded-2xl shadow-2xl p-10 text-white" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))", border: "1px solid rgba(201,168,76,0.4)" }}>
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: "#c9a84c" }}>About Huong Pho Vietnamese</h2>
            <div className="flex justify-center mb-6">
              <div style={{ height: "2px", width: "80px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            </div>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-center mb-10" style={{ color: "#d4b896" }}>
              Huong Pho Vietnamese Pte. Ltd. is a Singapore-registered restaurant dedicated to bringing authentic Vietnamese culinary traditions to the heart of Singapore. From slow-simmered Pho broths to vibrant noodle dishes, every bowl is crafted with care and heritage.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="rounded-xl p-6" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <h3 className="font-bold text-xl mb-4" style={{ color: "#c9a84c" }}>🏢 Company Information</h3>
                <p className="mb-2" style={{ color: "#d4b896" }}><strong style={{ color: "#e8c97a" }}>Company:</strong> Huong Pho Vietnamese Pte. Ltd.</p>
                <p className="mb-2" style={{ color: "#d4b896" }}><strong style={{ color: "#e8c97a" }}>UEN:</strong> Registered in Singapore</p>
                <p className="mb-2" style={{ color: "#d4b896" }}><strong style={{ color: "#e8c97a" }}>Primary Activity:</strong> Restaurants (56111)</p>
                <p className="mb-2" style={{ color: "#d4b896" }}><strong style={{ color: "#e8c97a" }}>Secondary Activity:</strong> Retail Sale of Food N.E.C. (47219)</p>
                <p className="mb-2" style={{ color: "#d4b896" }}><strong style={{ color: "#e8c97a" }}>Registered Office:</strong><br />121 Carpmael Road<br />Singapore 429977</p>
              </div>

              <div id="contact" className="rounded-xl p-6" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <h3 className="font-bold text-xl mb-4" style={{ color: "#c9a84c" }}>📞 Contact Us</h3>
                <p className="mb-3" style={{ color: "#d4b896" }}>
                  <strong style={{ color: "#e8c97a" }}>Contact Person:</strong><br />
                  Nguyen Thi Ha Lam
                </p>
                <p className="mb-3" style={{ color: "#d4b896" }}>
                  <strong style={{ color: "#e8c97a" }}>Address:</strong><br />
                  121 Carpmael Road<br />
                  Singapore 429977
                </p>
                <p className="mb-3" style={{ color: "#d4b896" }}>
                  <strong style={{ color: "#e8c97a" }}>Email:</strong>{" "}
                  <a href="mailto:Deqi2012@gmail.com" style={{ color: "#c9a84c" }} className="underline hover:opacity-80">
                    Deqi2012@gmail.com
                  </a>
                </p>
                <p className="mb-3" style={{ color: "#d4b896" }}>
                  <strong style={{ color: "#e8c97a" }}>Website:</strong>{" "}
                  <a href="https://huongpho.com.sg" style={{ color: "#c9a84c" }} className="underline hover:opacity-80">
                    huongpho.com.sg
                  </a>
                </p>
                <p style={{ color: "#d4b896" }}>
                  <strong style={{ color: "#e8c97a" }}>Instagram:</strong>{" "}
                  <a href="https://www.instagram.com/huongphovietnamese" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a84c" }} className="underline hover:opacity-80">
                    @huongphovietnamese
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram CTA Banner */}
        <div className="container mx-auto px-4 pb-16">
          <div className="rounded-2xl shadow-xl p-8 text-white text-center" style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
            <div className="text-5xl mb-4">📸</div>
            <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Stay updated with our latest dishes, promotions, and behind-the-scenes moments from our kitchen.
              Follow <strong>@huongphovietnamese</strong> for daily food inspiration!
            </p>
            <a
              href="https://www.instagram.com/huongphovietnamese"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
              style={{ color: "#833ab4" }}
            >
              @huongphovietnamese
            </a>
            <p className="text-sm mt-4 opacity-80">
              Have a question? Email us at{" "}
              <a href="mailto:Deqi2012@gmail.com" className="underline font-medium">
                Deqi2012@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-white py-12" style={{ background: "#0d0600", borderTop: "2px solid rgba(201,168,76,0.3)" }}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-extrabold tracking-wide" style={{ color: "#c9a84c" }}>HUONG PHO</h3>
                  <p className="text-xs tracking-widest" style={{ color: "#e8c97a" }}>VIETNAMESE PTE. LTD.</p>
                </div>
                <p className="text-sm" style={{ color: "#9a8060" }}>
                  Authentic Vietnamese cuisine served with passion in the heart of Singapore.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4" style={{ color: "#c9a84c" }}>Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="transition hover:opacity-80" style={{ color: "#9a8060" }}>Privacy Policy</Link></li>
                  <li><Link href="/terms" className="transition hover:opacity-80" style={{ color: "#9a8060" }}>Terms of Service</Link></li>
                  <li><Link href="/data-deletion" className="transition hover:opacity-80" style={{ color: "#9a8060" }}>Data Deletion Request</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4" style={{ color: "#c9a84c" }}>Contact</h4>
                <ul className="space-y-2 text-sm" style={{ color: "#9a8060" }}>
                  <li>Nguyen Thi Ha Lam</li>
                  <li>121 Carpmael Road</li>
                  <li>Singapore 429977</li>
                  <li>
                    <a href="mailto:Deqi2012@gmail.com" className="hover:opacity-80 transition" style={{ color: "#c9a84c" }}>
                      Deqi2012@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4" style={{ color: "#c9a84c" }}>Connect</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://www.instagram.com/huongphovietnamese"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition hover:opacity-80"
                      style={{ color: "#9a8060" }}
                    >
                      <span>📸</span> @huongphovietnamese
                    </a>
                  </li>
                  <li>
                    <a href="https://huongpho.com.sg" className="flex items-center gap-2 transition hover:opacity-80" style={{ color: "#9a8060" }}>
                      <span>🌐</span> huongpho.com.sg
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Deqi2012@gmail.com" className="flex items-center gap-2 transition hover:opacity-80" style={{ color: "#9a8060" }}>
                      <span>✉️</span> Email Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 text-center text-sm" style={{ borderTop: "1px solid rgba(201,168,76,0.2)", color: "#9a8060" }}>
              <p>&copy; {new Date().getFullYear()} Huong Pho Vietnamese Pte. Ltd. All rights reserved.</p>
              <p className="mt-1">Primary Activity: Restaurants (56111) | Secondary Activity: Retail Sale of Food N.E.C. (47219)</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
