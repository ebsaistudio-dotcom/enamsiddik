import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, BookOpen, UserCheck, Camera } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/coursesData';

interface HeroProps {
  language: Language;
  customProfilePhotoUrl: string | null;
  onOpenPhotoCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  customProfilePhotoUrl,
  onOpenPhotoCustomizer,
}) => {
  const isBn = language === 'bn';

  const whatsappHeroUrl = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isBn
      ? 'আসসালামু আলাইকুম ইনাম বিন সিদ্দিক ভাই। আমি কাতিব মিডিয়া-র প্রশিক্ষণ ও কোর্স সম্পর্কে পরামর্শ নিতে চাই।'
      : 'Hello Enam Bin Siddik. I would like to consult about Katib Media training and courses.'
  )}`;

  return (
    <section id="home" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial gradients for subtle atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Unboxed Metadata Header (No pills, clean typography) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold tracking-wide text-orange-400">
              <span>{isBn ? SITE_INFO.organizationNameBn : SITE_INFO.organizationNameEn}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{isBn ? SITE_INFO.instructorNameBn : SITE_INFO.instructorNameEn}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">{isBn ? 'প্রযুক্তি ও আইটি প্রশিক্ষণ' : 'IT & AI Training'}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-white leading-tight tracking-tight text-balance">
              {isBn ? (
                <>
                  মাদরাসা শিক্ষার্থী ও পিছিয়ে পড়া তরুণদের{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    প্রযুক্তি ও এ আই দক্ষতায়
                  </span>{' '}
                  স্বাবলম্বী করার প্রয়াস
                </>
              ) : (
                <>
                  Equipping Madrasah Students & Youth with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    Practical AI & Tech Skills
                  </span>{' '}
                  for Income
                </>
              )}
            </h1>

            {/* Supporting Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {isBn
                ? 'আমি ইনাম বিন সিদ্দিক—শিক্ষক, গ্রাফিক ডিজাইনার ও এ আই প্রশিক্ষক। সহজ বাংলা ভাষায় প্রযুক্তি শেখাই এবং অনলাইন ও অফলাইন কর্মশালার মাধ্যমে আধুনিক কাজের দক্ষতা ও হালাল উপার্জনের ক্ষেত্র তৈরি করাই আমার লক্ষ্য।'
                : 'I am Enam Bin Siddik — Teacher, Graphic Designer, and AI Trainer. Through Katib Media, I provide practical online and offline training in AI, Design, and IT to build self-reliance and ethical earning avenues.'}
            </p>

            {/* Core Track Highlights */}
            <div className="pt-2 pb-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                {isBn ? 'মূল প্রশিক্ষণ ক্ষেত্রসমূহ:' : 'Core Focus Areas:'}
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-200">
                <span className="text-white font-medium">{isBn ? 'এ আই তালিম' : 'AI Talim'}</span>
                <span className="text-slate-600">/</span>
                <span className="text-white font-medium">{isBn ? 'এ আই ডিজাইন' : 'AI Design'}</span>
                <span className="text-slate-600">/</span>
                <span className="text-white font-medium">{isBn ? 'অনলাইন একাডেমি' : 'Online Academy'}</span>
                <span className="text-slate-600">/</span>
                <span className="text-white font-medium">{isBn ? 'গ্রাফিক ডিজাইন' : 'Graphic Design'}</span>
                <span className="text-slate-600">/</span>
                <span className="text-white font-medium">{isBn ? 'ভিডিও এডিটিং' : 'Video Editing'}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA: WhatsApp */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/40 transition-all duration-150 transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>{isBn ? 'সরাসরি হোয়াটসঅ্যাপে কথা বলুন' : 'Chat on WhatsApp Directly'}</span>
              </a>

              {/* Secondary CTA: Explore Courses */}
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all whitespace-nowrap"
              >
                <span>{isBn ? 'কোর্সসমূহ দেখুন' : 'Explore Courses'}</span>
                <ArrowDown className="w-4 h-4 text-orange-400" />
              </a>
            </div>

            {/* Quiet Quick Phone and Email reference */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span>{isBn ? 'হোয়াটসঅ্যাপ / কল:' : 'WhatsApp / Phone:'} <strong className="text-slate-200 font-mono">{SITE_INFO.phone}</strong></span>
              <span className="text-slate-700">·</span>
              <span>{SITE_INFO.email}</span>
            </div>
          </div>

          {/* Right Column: Instructor & Katib Media Profile Card with Explicit Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-[#0e172a] border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-black/60">
              
              {/* Accent top bar */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-orange-500 via-emerald-500 to-navy-900 rounded-t-full" />

              {/* Visual Asset Container (Official Instructor Photo) */}
              <div className="relative aspect-4/3 sm:aspect-1/1 w-full bg-[#080d1a] border border-slate-700/80 rounded-xl overflow-hidden flex flex-col items-center justify-center group shadow-inner">
                {customProfilePhotoUrl || SITE_INFO.instructorPhotoUrl ? (
                  <div className="relative w-full h-full group">
                    <img
                      src={customProfilePhotoUrl || SITE_INFO.instructorPhotoUrl}
                      alt={isBn ? `${SITE_INFO.instructorNameBn} - প্রশিক্ষক ও প্রতিষ্ঠাতা` : `${SITE_INFO.instructorNameEn} - Trainer & Founder`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient scrim for depth and text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-[#090f1d]/20 to-transparent opacity-90 flex items-end justify-between p-3.5">
                      <div>
                        <span className="text-xs font-bold text-white block drop-shadow-sm">
                          {isBn ? SITE_INFO.instructorNameBn : SITE_INFO.instructorNameEn}
                        </span>
                        <span className="text-[11px] text-orange-400 font-medium">
                          {isBn ? 'প্রতিষ্ঠাতা ও প্রশিক্ষক, কাতিব মিডিয়া' : 'Founder & Trainer, Katib Media'}
                        </span>
                      </div>
                      <button
                        onClick={onOpenPhotoCustomizer}
                        className="p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                        title={isBn ? 'ছবি পরিবর্তন বা প্রিভিউ' : 'Change or preview photo'}
                      >
                        <Camera className="w-3.5 h-3.5 text-orange-400" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* SVG Avatar Fallback */}
                    <div className="w-24 h-24 rounded-full bg-slate-800/90 border-2 border-orange-500/60 flex items-center justify-center mb-3 shadow-inner">
                      <UserCheck className="w-12 h-12 text-orange-400" />
                    </div>

                    <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">
                      {isBn ? '[ইনাম বিন সিদ্দিক — ছবি]' : '[Enam Bin Siddik — Photo]'}
                    </div>
                    
                    <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                      {isBn
                        ? 'আপনার পোর্ট্রেট বা কর্মশালার ছবি দিয়ে পরিবর্তন করতে পারবেন।'
                        : 'Replace with your personal portrait or workshop photo.'}
                    </p>

                    {/* Interactive button to test photo upload / preview */}
                    <button
                      onClick={onOpenPhotoCustomizer}
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5 text-orange-400" />
                      <span>{isBn ? 'ছবি পরিবর্তন / প্রিভিউ দেখুন' : 'Change / Preview Photo'}</span>
                    </button>
                  </>
                )}
              </div>

              {/* Profile Details Block */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {isBn ? SITE_INFO.instructorNameBn : SITE_INFO.instructorNameEn}
                    </h3>
                    <div className="text-xs font-medium text-emerald-400 mt-0.5">
                      {isBn ? SITE_INFO.rolesBn : SITE_INFO.rolesEn}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-300 block">
                      {isBn ? SITE_INFO.organizationNameBn : SITE_INFO.organizationNameEn}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {isBn ? 'প্রতিষ্ঠাতা ও প্রশিক্ষক' : 'Founder & Trainer'}
                    </span>
                  </div>
                </div>

                {/* Core Focus Badges (Rendered cleanly as text items with separators) */}
                <div className="pt-2 border-t border-slate-800/90 text-xs text-slate-400 flex items-center justify-between">
                  <span>{isBn ? 'প্রশিক্ষণ মাধ্যম:' : 'Modes:'}</span>
                  <span className="text-slate-200 font-medium">
                    {isBn ? 'অনলাইন লাইভ · অফলাইন কর্মশালা' : 'Online Live · Offline Workshops'}
                  </span>
                </div>

                {/* Direct quick call / WhatsApp action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      isBn ? 'আসসালামু আলাইকুম। আমি প্রশিক্ষক ইনাম বিন সিদ্দিক এর সাথে কথা বলতে চাই।' : 'Hello! I want to contact instructor Enam Bin Siddik.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>{isBn ? 'হোয়াটসঅ্যাপে সরাসরি বার্তা পাঠান (01719237720)' : 'Message on WhatsApp (01719237720)'}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
