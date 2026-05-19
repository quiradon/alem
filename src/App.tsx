import { motion } from "motion/react";
import { Download, Info, Ghost, MapPin, Gamepad2, Menu, X, Sun, Heart, Skull, Instagram, Video } from "lucide-react";
import { useState } from "react";

// Fallback pixel art SVGs to guarantee a "pixel art" feel even if images fail to generate.
const defaultPixelHero = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzaGFwZS1yZW5kZXJpbmc9ImNyaXNwRWRnZXMiPjxyZWN0IHg9IjUiIHk9IjIiIHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IiM4QjQ1MTMiLz48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iOCIgaGVpZ2h0PSIyIiBmaWxsPSIjOEI0NTEzIi8+PHJlY3QgeD0iNiIgeT0iNiIgd2lkdGg9IjQiIGhlaWdodD0iMyIgZmlsbD0iI0ZGRTRDNCIvPjxyZWN0IHg9IjYiIHk9IjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSI5IiB5PSI3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iNSIgeT0iMTAiIHdpZHRoPSI2IiBoZWlnaHQ9IjQiIGZpbGw9IiM5OTFiMWIiLz48cmVjdCB4PSI2IiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMiIgZmlsbD0iIzhCNDUxMyIvPjxyZWN0IHg9IjkiIHk9IjEzIiB3aWR0aD0iMSIgaGVpZ2h0PSIyIiBmaWxsPSIjOEI0NTEzIi8+PC9zdmc+";

const characters = [
  { name: "NICOLY", role: "STREAMER - LVL 01", image: "/nicoly.png", bio: "JOVEM TRANS DA PERIFERIA QUE PROCURA FANTASMAS PARA SEU CANAL." },
  { name: "DONA MARIA", role: "VIZINHA - LVL 99", image: "/dona_maria.png", bio: "CONHECE OS SEGREDOS DO RN." },
  { name: "LU", role: "MODERADORA - LVL 12", image: "/lu.png", bio: "NAMORADA DE NICOLY. CUIDA DO CHAT DA LIVE E PESQUISA O LORE." },
  { name: "FREI CANECA", role: "FANTASMA - LVL 45", image: "/frei_caneca.png", bio: "ESPÍRITO QUE GUARDA A IGREJA ABANDONADA." },
  { name: "O LICANTROPO", role: "CHEFE - ???", image: "/licantropo.png", bio: "A MALDIÇÃO DO SÉTIMO FILHO HOMEM. UMA FERA SEDENTA POR SANGUE." },
];

const galleryImages = [
  { src: "/Captura%20de%20tela%202026-05-19%20105900.png", alt: "Captura do jogo - exploração urbana" },
  { src: "/Captura%20de%20tela%202026-05-19%20110226.png", alt: "Captura do jogo - transmissão de Nicoly" },
  { src: "/Captura%20de%20tela%202026-05-19%20110250.png", alt: "Captura do jogo - encontro sobrenatural" },
  { src: "/Captura%20de%20tela%202026-05-19%20113608.png", alt: "Captura do jogo - investigação no cenário" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sertao-900 overflow-x-hidden font-pixel text-paper selection:bg-rn-red selection:text-white">
      {/* Navigation (RPG Command Menu Style) */}
      <nav className="relative w-full z-30 bg-sertao-900 border-b-4 border-paper px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo_ca.png" 
              alt="Logo Caçadora do Além" 
              className="w-auto h-24 object-contain pixelated"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultPixelHero; }}
            />
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-2xl">
            <a href="#inicio" className="hover:text-rn-red transition-colors flex items-center gap-2"><span className="text-rn-red animate-blink">►</span> START</a>
            <a href="#lendas" className="hover:text-rn-red transition-colors">LORE</a>
            <a href="#personagens" className="hover:text-rn-red transition-colors">PARTY</a>
            <a href="#galeria" className="hover:text-rn-red transition-colors">GALERIA</a>
            <a href="https://static.erpg.app/game.zip" download className="pixel-box px-6 py-2 hover:bg-rn-red hover:text-white transition-colors text-2xl uppercase">
              Download
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-paper">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-sertao-900 p-6 flex flex-col gap-4 text-2xl border-b-4 border-paper z-50 pixel-box-dark"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2"><span className="text-rn-red">►</span> START</a>
            <a href="#lendas" onClick={() => setIsMenuOpen(false)}>LORE</a>
            <a href="#personagens" onClick={() => setIsMenuOpen(false)}>PARTY</a>
            <a href="#galeria" onClick={() => setIsMenuOpen(false)}>GALERIA</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - The Title Screen */}
      <section id="inicio" className="pt-16 pb-20 px-6 relative paper-texture !bg-sertao-800 border-b-8 border-sertao-900">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiPjwvcmVjdD4KPC9zdmc+')] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 z-10"
          >
            <h2 className="text-6xl md:text-8xl text-paper uppercase leading-[0.8] tracking-tighter pixel-text-shadow">
              ROGUELIKE <br/><span className="text-rn-red">PIXEL ART</span><br/> POTIGUAR.
            </h2>
            
            <p className="text-paper/80 text-2xl leading-relaxed max-w-xl pixel-box-dark p-6">
              <span className="text-rn-red animate-blink mr-2">►</span>
              ACOMPANHE AS LIVES DE NICOLY, JOVEM TRANS DA PERIFERIA, EXPLORANDO LOCAIS ASSOMBRADOS. A CADA IDA, A PLANTA DO PRÉDIO MUDA. SOBREVIVA E GANHE VISUALIZAÇÕES NESTE ROGUELIKE DE EXPLORAÇÃO URBANA NO RN.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="https://static.erpg.app/game.zip" download className="pixel-box px-8 py-4 text-3xl flex items-center gap-4 hover:bg-rn-red hover:text-white transition-colors cursor-pointer uppercase">
                <Download size={32} />
                BAIXAR JOGO
              </a>
              <a
                href="https://www.instagram.com/cacadora.do.alem/"
                target="_blank"
                rel="noreferrer"
                className="pixel-box px-8 py-4 text-3xl flex items-center gap-4 hover:bg-rn-gold hover:text-sertao-900 transition-colors cursor-pointer uppercase"
                aria-label="Ver Instagram"
              >
                <Instagram size={32} />
                VER INSTAGRAM
              </a>
            </div>
          </motion.div>

          {/* CRT Game Screen container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full relative z-10"
          >
             <div className="pixel-box-dark border-8 border-sertao-900 aspect-video relative group overflow-hidden bg-black">
                <img 
                  src="/banner_land.png" 
                  alt="Game Scene Placeholder" 
                  className="w-full h-full object-contain pixelated opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultPixelHero; e.currentTarget.className = "w-full h-full object-contain p-12 bg-sertao-800 pixelated"; }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 pixel-box-dark text-rn-gold px-3 py-1 flex items-center gap-2">
                   <Heart size={16} fill="currentColor" />
                   HP 100/100
                </div>
                {/* Scanline overlay in CSS */}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Retro Features Section */}
      <section id="lendas" className="py-24 bg-sertao-900 border-b-8 border-sertao-800 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl text-paper uppercase pixel-text-shadow mb-6">A CADA RUN, UM NOVO MISTÉRIO</h2>
            <div className="pixel-box-dark px-8 py-4 max-w-4xl text-2xl md:text-3xl uppercase text-left">
              <span className="text-rn-gold">CHAT:</span> "NICOLY, CUIDADO COM ESSE PRÉDIO ABANDONADO... NA ÚLTIMA LIVE VOCÊ PERDEU TODOS OS SEUS ITENS AÍ!"
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "DUNGEONS PROCEDURAIS", desc: "EXPLORE MASMORRAS URBANAS (PRÉDIOS, HOSPITAIS E CEMITÉRIOS) QUE MUDAM DE LAYOUT A CADA TRANSMISSÃO.", icon: <Gamepad2 size={32} /> },
              { title: "LOCAIS HISTÓRICOS", desc: "LEVE SUA LIVE PARA AS RUÍNAS DO HOTEL REIS MAGOS E OUTROS PONTOS HISTÓRICOS ASSOMBRADOS DO RIO GRANDE DO NORTE.", icon: <Ghost size={32} /> },
              { title: "MITOS URBANOS", desc: "ENFRENTE AS VERDADEIRAS LENDAS URBANAS POTIGUARES... E TENTE NÃO PERDER SUA PROGRESSÃO QUANDO O SINAL CAIR.", icon: <Skull size={32} /> }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 pixel-box-dark hover:border-rn-red transition-colors group relative"
              >
                <div className="text-rn-red mb-6 bg-paper inline-block p-3">
                  {feature.icon}
                </div>
                <h3 className="text-3xl text-paper mb-4 uppercase">{feature.title}</h3>
                <p className="text-paper/80 text-xl rpg-dialogue-text">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters - RPG Status Screens */}
      <section id="personagens" className="py-24 px-6 paper-texture border-b-8 border-sertao-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-6xl text-sertao-900 uppercase pixel-text-shadow">STATUS DA PARTY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((char, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="flex flex-col bg-sertao-900 text-paper p-6 pixel-box-dark h-full relative"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-24 h-24 pixel-box bg-rn-gold shrink-0 overflow-hidden flex items-center justify-center">
                    <img 
                      src={char.image} 
                      alt={char.name} 
                      className="w-full h-full object-cover pixelated scale-[1.15]"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultPixelHero; e.currentTarget.className="w-full h-full object-contain p-2 pixelated"; }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center">
                    <h4 className="text-3xl text-rn-gold uppercase mb-1">{char.name}</h4>
                    <div className="text-paper/80 text-lg uppercase tracking-widest">{char.role}</div>
                  </div>
                </div>

                <p className="rpg-dialogue-text text-xl flex-1 text-paper/90 border-t-4 border-paper/20 pt-4">
                   "{char.bio}"
                </p>
                {i === characters.length - 1 && (
                  <div className="absolute -top-4 -right-4 bg-rn-red text-white pixel-box px-4 py-1 text-xl animate-pulse rotate-6">
                    WARNING!
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Art Gallery Section */}
      <section id="galeria" className="py-24 px-6 bg-sertao-900 border-b-8 border-sertao-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-7xl text-paper uppercase pixel-text-shadow mb-6">CAPTURAS DO JOGO</h2>
            <div className="pixel-box-dark px-8 py-4 inline-block text-xl md:text-2xl uppercase">
              <span className="text-rn-red">ARQUIVOS CONFIDENCIAIS:</span> REGISTROS DIRETOS DA BUILD EM DESENVOLVIMENTO.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pixel-box p-2 bg-black"
              >
                 <div className="relative w-full h-full overflow-hidden group aspect-video">
                   <img 
                     src={img.src} 
                     alt={img.alt} 
                     className="w-full h-full object-contain pixelated transform transition-transform duration-500 group-hover:scale-[1.03]"
                     onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultPixelHero; e.currentTarget.className = "w-full h-full object-contain p-8 bg-[#000] pixelated cursor-not-allowed"; }}
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-black/60 p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-paper text-2xl uppercase border-l-4 border-rn-red pl-4 shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {img.alt}
                      </p>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Retro Footer */}
      <footer className="py-12 bg-sertao-900 text-paper/60 px-6 text-xl">
        <div className="max-w-7xl mx-auto flex justify-center">
          <a href="https://www.instagram.com/cacadora.do.alem/" target="_blank" rel="noreferrer" className="hover:text-rn-gold cursor-pointer transition-colors" aria-label="Instagram">
            <Instagram size={32} />
          </a>
        </div>
      </footer>
    </div>
  );
}
