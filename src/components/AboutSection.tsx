import React from 'react';
import { Camera, CheckCircle2, MessageCircle, Mail, Phone, BookOpen, Sparkles, UserCheck } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/coursesData';

interface AboutSectionProps {
  language: Language;
  customProfilePhotoUrl: string | null;
  onOpenPhotoCustomizer: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  customProfilePhotoUrl,
  onOpenPhotoCustomizer,
}) => {
  const isBn = language === 'bn';

  const whatsappUrl = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isBn
      ? 'আসসালামু আলাইকুম ইনাম বিন সিদ্দিক ভাই। আমি আপনার সাথে সরাসরি কথা বলতে চাই।'
      : 'Hello Enam Bin Siddik. I would like to connect with you directly.'
  )}`;

  return (
    <section id="about" className="py-16 md:py-24 bg-[#0a1222] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Portrait with Interactive Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-[#0e172a] border border-slate-800 rounded-2xl p-6 shadow-xl">
              
              <div className="relative aspect-4/5 w-full bg-[#080d19] border border-slate-700/80 rounded-xl overflow-hidden flex flex-col items-center justify-center group shadow-inner">
                {customProfilePhotoUrl || SITE_INFO.instructorPhotoUrl ? (
                  <div className="relative w-full h-full group">
                    <img
                      src={customProfilePhotoUrl || SITE_INFO.instructorPhotoUrl}
                      alt={isBn ? `${SITE_INFO.instructorNameBn} - প্রতিকৃতি` : `${SITE_INFO.instructorNameEn} - Portrait`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-[#090f1d]/20 to-transparent opacity-90 flex items-end justify-between p-4">
                      <div>
                        <span className="text-sm font-bold text-white block drop-shadow-sm">
                          {isBn ? SITE_INFO.instructorNameBn : SITE_INFO.instructorNameEn}
                        </span>
                        <span className="text-xs text-emerald-400 font-medium">
                          {isBn ? 'শিক্ষক · ডিজাইনার · এ আই প্রশিক্ষক' : 'Teacher · Designer · AI Trainer'}
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
                    <div className="w-24 h-24 rounded-full bg-slate-800/90 border-2 border-emerald-500/70 flex items-center justify-center mb-4 shadow-inner">
                      <UserCheck className="w-12 h-12 text-emerald-400" />
                    </div>

                    <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1.5">
                      {isBn ? '[ইনাম বিন সিদ্দিক — অফিসিয়াল ছবি]' : '[Enam Bin Siddik — Official Photo]'}
                    </div>

                    <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-4">
                      {isBn
                        ? 'আপনার ছবি যুক্ত করার নির্দিষ্ট জায়গা। নিচের বাটনে ক্লিক করে নিজের ছবি আপলোড করে দেখতে পারেন।'
                        : 'Dedicated placeholder for your official portrait. Click below to preview your photo.'}
                    </p>

                    <button
                      onClick={onOpenPhotoCustomizer}
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors cursor-pointer"
                    >
                      <Camera className="w-4 h-4 text-orange-400" />
                      <span>{isBn ? 'ছবি পরিবর্তন / প্রিভিউ' : 'Change / Preview Photo'}</span>
                    </button>
                  </>
                )}
              </div>

              {/* Verified Identity Footnote */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{isBn ? 'প্রতিষ্ঠান:' : 'Institution:'} <strong className="text-white">{isBn ? SITE_INFO.organizationNameBn : SITE_INFO.organizationNameEn}</strong></span>
                <span className="text-emerald-400 font-medium">{isBn ? 'সক্রিয় শিক্ষক ও প্রশিক্ষক' : 'Active Educator'}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Purpose */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge */}
            <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              {isBn ? 'আমার সম্পর্কে' : 'About Me'}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isBn ? SITE_INFO.instructorNameBn : SITE_INFO.instructorNameEn}
            </h2>

            <div className="text-sm font-semibold text-emerald-400">
              {isBn ? SITE_INFO.rolesBn : SITE_INFO.rolesEn}
            </div>

            {/* Narrative text based exactly on user's brief */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                {isBn
                  ? 'আমি একজন শিক্ষক। দীর্ঘ সময় ধরে অনলাইন ও অফলাইনে শিক্ষার্থীদের পড়াই। তথ্যপ্রযুক্তির দ্রুত পরিবর্তনের এই যুগে তরুণ ও মাদরাসার শিক্ষার্থীদের প্রযুক্তিতে দক্ষ করে তোলাই আমার মূল ব্রত।'
                  : 'I am a teacher. I educate students both online and offline. In this era of rapid technological transformation, my primary dedication is to empower youth and Madrasah students with modern IT and AI capabilities.'}
              </p>
              <p>
                {isBn
                  ? 'কাতিব মিডিয়া প্রতিষ্ঠার পেছনে মূল উদ্দেশ্য হলো—পিছিয়ে পড়া জনগোষ্ঠিকে আইটি, এ আই তালিম, আধুনিক গ্রাফিক ডিজাইন ও ভিডিও এডিটিংয়ের মতো বাস্তবমুখী স্কিল শেখানো, যাতে তারা নৈতিক মর্যাদা বজায় রেখে ঘরে বসেই হালাল আয়ের সুযোগ তৈরি করতে পারে।'
                  : 'The driving vision behind founding Katib Media is to equip underserved learners with actionable skills in AI, Graphic Design, and Video Editing, opening doors to ethical, halal earning opportunities.'}
              </p>
            </div>

            {/* Teaching Philosophy Points */}
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                <div className="text-sm text-slate-300">
                  <strong className="text-white font-semibold">
                    {isBn ? 'সহজ ও বোধগম্য উপস্থাপনা: ' : 'Clarity & Simplicity: '}
                  </strong>
                  {isBn
                    ? 'জটিল বিষয়গুলোকে অত্যন্ত সহজ উদাহরণের মাধ্যমে শিক্ষার্থীদের সামনে তুলে ধরা।'
                    : 'Breaking down intricate technical concepts using practical, accessible analogies.'}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-sm text-slate-300">
                  <strong className="text-white font-semibold">
                    {isBn ? 'ইসলামিক ও নৈতিক মূল্যবোধ: ' : 'Ethical Framework: '}
                  </strong>
                  {isBn
                    ? 'নৈতিকতার মানদণ্ড বজায় রেখে প্রযুক্তি ব্যবহার ও আয়ের পথ প্রদর্শন।'
                    : 'Ensuring all skills and income avenues align with sound ethical principles.'}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                <div className="text-sm text-slate-300">
                  <strong className="text-white font-semibold">
                    {isBn ? 'সার্বক্ষণিক মেন্টরশিপ: ' : 'Continuous Mentorship: '}
                  </strong>
                  {isBn
                    ? 'ক্লাসের পরেও শিক্ষার্থীদের প্রশ্ন ও সমস্যার সমাধানে পাশে থাকা।'
                    : 'Personal mentorship and dedicated problem solving beyond scheduled classes.'}
                </div>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isBn ? 'ইনাম বিন সিদ্দিকের সাথে কথা বলুন' : 'Talk with Enam Bin Siddik'}</span>
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>{SITE_INFO.email}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
