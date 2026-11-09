'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronDown, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'

const products = [
  { id: 1, name: 'The Essential Hoodie', category: 'Hoodies', price: '1,290 EGP', oldPrice: '1,690 EGP', tag: '30% OFF', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85', color: 'Washed black' },
  { id: 2, name: 'Alpine Puffer Jacket', category: 'Jackets', price: '2,490 EGP', oldPrice: '3,200 EGP', tag: 'SALE', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85', color: 'Stone' },
  { id: 3, name: 'Heavyweight Zip-Up', category: 'Hoodies', price: '1,490 EGP', oldPrice: '1,850 EGP', tag: '20% OFF', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85', color: 'Oat' },
  { id: 4, name: 'Transit Overshirt', category: 'Jackets', price: '1,890 EGP', oldPrice: '2,290 EGP', tag: 'NEW PRICE', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85', color: 'Olive' },
]

const categories = ['All pieces', 'Hoodies', 'Jackets']

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('All pieces')
  const [menuOpen, setMenuOpen] = useState(false)
  const [bagCount, setBagCount] = useState(0)
  const [liked, setLiked] = useState<number[]>([])
  const filtered = useMemo(() => activeCategory === 'All pieces' ? products : products.filter((p) => p.category === activeCategory), [activeCategory])

  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#181817]">
      <div className="bg-[#b5ff4a] px-5 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
        Complimentary delivery across Egypt on orders over 2,000 EGP
      </div>

      <header className="mx-auto max-w-[1440px] px-5 pb-5 pt-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between border-b border-black/15 pb-5">
          <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] lg:hidden">
            {menuOpen ? <X size={18} /> : <Menu size={18} />} Menu
          </button>
          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] lg:flex">
            <a href="#shop" className="transition-opacity hover:opacity-50">Shop</a>
            <a href="#story" className="transition-opacity hover:opacity-50">Our story</a>
            <a href="#journal" className="transition-opacity hover:opacity-50">Journal</a>
          </div>
          <a href="#top" className="absolute left-1/2 -translate-x-1/2 text-2xl font-black tracking-[-0.08em] sm:text-3xl">HMLY<span className="text-[#e34a2f]">.</span></a>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.16em]">
            <button aria-label="Search" className="hidden sm:block"><Search size={18} strokeWidth={1.7} /></button>
            <button className="flex items-center gap-2" aria-label={`Shopping bag with ${bagCount} items`}><ShoppingBag size={18} strokeWidth={1.7} /><span className="hidden sm:inline">Bag ({bagCount})</span></button>
          </div>
        </nav>
        {menuOpen && <div className="flex gap-6 border-b border-black/15 py-5 text-xs font-bold uppercase tracking-[0.18em] lg:hidden"><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a></div>}
      </header>

      <section id="top" className="mx-auto max-w-[1440px] px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <div className="relative overflow-hidden rounded-sm bg-[#25342f] px-6 pb-8 pt-14 text-[#f4f1eb] sm:px-12 sm:pt-20 lg:min-h-[530px] lg:px-20 lg:pt-24">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b5ff4a]">Winter '25 / Cairo</p>
            <h1 className="max-w-3xl text-[clamp(3.6rem,10vw,9.2rem)] font-black leading-[.82] tracking-[-0.1em]">BUILT<br />FOR THE<br /><span className="text-[#b5ff4a]">COLD.</span></h1>
            <p className="mt-8 max-w-sm text-sm leading-6 text-white/65">The layers you reach for every day. Designed in Egypt, made to move with you.</p>
            <a href="#shop" className="mt-8 inline-flex items-center gap-3 bg-[#f4f1eb] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#181817] transition-colors hover:bg-[#b5ff4a]">Shop winter edit <ArrowUpRight size={16} /></a>
          </div>
          <div className="absolute -right-16 top-0 h-full w-[58%] bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center opacity-65 mix-blend-screen lg:right-0 lg:w-[46%]" />
          <div className="absolute bottom-5 right-6 text-right text-[9px] uppercase tracking-[0.22em] text-white/50 sm:right-12"><p>01 / 03</p><p className="mt-1">The winter edit</p></div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-5 border-t border-black/15 pt-5 sm:flex-row sm:items-end">
          <div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e34a2f]">Curated for the season</p><h2 className="text-4xl font-black tracking-[-0.07em] sm:text-6xl">Winter uniform<span className="text-[#e34a2f]">.</span></h2></div>
          <div className="flex gap-5 text-xs font-bold uppercase tracking-[0.16em]">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`pb-2 transition-colors ${activeCategory === category ? 'border-b-2 border-[#e34a2f] text-[#e34a2f]' : 'text-black/40 hover:text-black'}`}>{category}</button>)}</div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
          {filtered.map((product) => <article key={product.id} className="group"><div className="relative aspect-[.82] overflow-hidden bg-[#e7e2da]"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#b5ff4a] px-2 py-1 text-[9px] font-bold uppercase tracking-wider">{product.tag}</span><button onClick={() => setLiked((current) => current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id])} aria-label={`Add ${product.name} to wishlist`} className="absolute right-3 top-3 rounded-full bg-[#f4f1eb]/85 p-2 backdrop-blur-sm"><Heart size={16} fill={liked.includes(product.id) ? '#e34a2f' : 'none'} color={liked.includes(product.id) ? '#e34a2f' : '#181817'} /></button><button onClick={() => setBagCount((count) => count + 1)} className="absolute bottom-3 left-3 right-3 translate-y-14 bg-[#f4f1eb] py-3 text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">Add to bag</button></div><div className="flex justify-between gap-3 pt-3 text-xs"><div><h3 className="font-bold">{product.name}</h3><p className="mt-1 text-black/45">{product.color}</p></div><div className="text-right"><p className="font-bold">{product.price}</p><p className="mt-1 text-[10px] text-black/35 line-through">{product.oldPrice}</p></div></div></article>)}
        </div>
      </section>

      <section id="story" className="border-y border-black/15 bg-[#e7e2da] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end"><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e34a2f]">From Cairo, with intention</p><h2 className="max-w-xl text-4xl font-black leading-[.95] tracking-[-0.07em] sm:text-6xl">Everyday pieces.<br />Nothing ordinary<span className="text-[#e34a2f]">.</span></h2></div><div className="max-w-md lg:justify-self-end"><p className="text-base leading-7 text-black/65">HMLY is a new Egyptian essentials label built around better fabric, stronger silhouettes, and the confidence to keep things simple.</p><a href="#journal" className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-xs font-bold uppercase tracking-[0.18em]">Read our story <ArrowUpRight size={15} /></a></div></div></section>

      <section id="journal" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12"><div className="flex flex-col items-start justify-between gap-8 border-b border-black/15 pb-12 md:flex-row md:items-end"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e34a2f]">Coming next</p><h2 className="text-4xl font-black tracking-[-0.07em] sm:text-6xl">Summer, loaded<span className="text-[#e34a2f]">.</span></h2><p className="mt-4 max-w-md text-sm leading-6 text-black/55">A lighter chapter is on its way. Join the list for first access to the summer collection.</p></div><form className="flex w-full max-w-md border-b border-black pb-3" onSubmit={(event) => event.preventDefault()}><label htmlFor="email" className="sr-only">Email address</label><input id="email" type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-black/35" required /><button type="submit" className="text-xs font-bold uppercase tracking-[0.16em]">Notify me <span aria-hidden="true">↗</span></button></form></div></section>

      <footer className="bg-[#181817] px-5 py-8 text-[#f4f1eb] sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] sm:flex-row"><p className="text-lg font-black tracking-[-0.08em]">HMLY<span className="text-[#b5ff4a]">.</span></p><div className="flex gap-6 text-white/55"><span>© 2025 HMLY Egypt</span><a href="#top" className="hover:text-white">Instagram ↗</a><a href="#top" className="hover:text-white">Shipping & returns</a></div><p className="text-white/55">Summer collection managed via .NET API</p></div></footer>
    </main>
  )
}
