import React, { useState } from 'react';
import { MessageCircle, Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/coursesData';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenPhotoCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  onOpenPhotoCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBn = language === 'bn';

  const navLinks = [
    { href: '#home', label: isBn ? 'হোম' : 'Home' },
    { href: '#courses', label: isBn ? 'কোর্সসমূহ' : 'Courses' },
    { href: '#mission', label: isBn ? 'আমাদের লক্ষ্য' : 'Our Mission' },
    { href: '#about', label: isBn ? 'আমার সম্পর্কে' : 'About Me' },
    { href: '#institutional', label: isBn ? 'কাতিব মিডিয়া' : 'Katib Media' },
    { href: '#contact', label: isBn ? 'যোগাযোগ' : 'Contact' },
  ];

  const whatsappUrl = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isBn
      ? 'আসসালামু আলাইকুম। আমি কাতিব মিডিয়া ও আপনার কোর্স সম্পর্কে জানতে আগ্রহী।'
      : 'Hello! I am interested in Katib Media and your courses.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#090f1d]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white hover:text-orange-400 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-extrabold text-white text-base shadow-sm">
            ক
          </span>
          <span className="font-semibold text-lg sm:text-xl">
            {isBn ? SITE_INFO.organizationNameBn : SITE_INFO.organizationNameEn}
          </span>
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-orange-400 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Actions + Language Switch */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 rounded-lg border border-slate-700/60 transition-colors whitespace-nowrap"
            title={isBn ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
          >
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span>{isBn ? 'EN (English)' : 'বাংলা (BN)'}</span>
          </button>

          {/* Primary Action: Direct WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isBn ? 'হোয়াটসঅ্যাপে যোগাযোগ' : 'WhatsApp'}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-md border border-slate-700"
          >
            {isBn ? 'EN' : 'বাং'}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white bg-emerald-600 rounded-md hover:bg-emerald-500"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-md bg-slate-800/80 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#090f1d] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-orange-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-slate-300 bg-slate-800/60"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
              <span>{SITE_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotoCustomizer();
              }}
              className="text-left px-3 py-2 rounded-md text-xs font-medium text-orange-300 bg-orange-950/40 border border-orange-900/60"
            >
              {isBn ? '📷 ছবি ও লোগো প্রিভিউ সেট করুন' : '📷 Set Photo & Logo Preview'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
