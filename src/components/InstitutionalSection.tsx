import React from 'react';
import { Building2, Laptop, Award, Calendar, MessageCircle, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/coursesData';

interface InstitutionalSectionProps {
  language: Language;
  customLogoUrl: string | null;
  onOpenPhotoCustomizer: () => void;
}

export const InstitutionalSection: React.FC<InstitutionalSectionProps> = ({
  language,
  customLogoUrl,
  onOpenPhotoCustomizer,
}) => {
  const isBn = language === 'bn';

  const services = [
    {
      titleBn: 'মাদরাসায় বিশেষ এআই ও টেক সেমিনার',
      titleEn: 'Madrasah AI & Tech Seminars',
      descBn: 'মাদরাসার শিক্ষক ও শিক্ষার্থীদের জন্য বিশেষায়িত ১-২ দিনের হ্যান্ডস-অন কর্মশালা। কম্পিউটার ও স্মার্টফোনের মাধ্যমে প্রযুক্তির সঠিক ব্যবহার ও আয়ের পথপ্রদর্শন।',
      descEn: 'Custom 1-2 day intensive workshops for madrasahs covering practical AI utility, digital literacy, and ethical online earnings.'
    },
    {
      titleBn: 'প্রাতিষ্ঠানিক ডিজাইন ও মিডিয়া সহায়তা',
      titleEn: 'Institutional Design & Media Services',
      descBn: 'মাদরাসা, শিক্ষা প্রতিষ্ঠান ও প্রকাশনীর জন্য লোগো, পোস্টার, বইয়ের প্রচ্ছদ ও ব্যানার তৈরির সেবা ও দিকনির্দেশনা।',
      descEn: 'Professional identity design, publication covers, and event promotional collaterals for educational centers.'
    },
    {
      titleBn: 'অনলাইন লাইভ ব্যাচ ও প্রাইভেট একাডেমি',
      titleEn: 'Online Cohorts & Private Academy',
      descBn: 'দূরবর্তী শিক্ষার্থীদের জন্য স্ক্রিন-শেয়ারিংয়ের মাধ্যমে লাইভ ব্যাচে যত্নসহকারে এআই ও গ্রাফিক ডিজাইন তালিম।',
      descEn: 'Interactive live cohorts and screen-shared practical training sessions for remote learners across the country.'
    }
  ];

  const whatsappInquiryUrl = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isBn
      ? 'আসসালামু আলাইকুম। আমাদের মাদরাসা বা প্রতিষ্ঠানে কাতিব মিডিয়া-র ওয়ার্কশপ আয়োজন করার জন্য পরামর্শ করতে চাই।'
      : 'Hello! We would like to consult about organizing a Katib Media workshop at our institution.'
  )}`;

  return (
    <section id="institutional" className="py-16 md:py-24 bg-[#090f1d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            {isBn ? 'প্রতিষ্ঠান পরিচিতি ও সেবা' : 'Institutional Services'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isBn ? 'কাতিব মিডিয়া (Katib Media)' : 'Katib Media — Training & Studio'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isBn
              ? 'শিক্ষা প্রতিষ্ঠান, মাদরাসা ও আগ্রহী তরুণদের আইটি ও এআই প্রশিক্ষণ দিয়ে দক্ষ মানবসম্পদে রূপান্তর করার বিশ্বস্ত উদ্যোগ।'
              : 'Empowering institutions, madrasahs, and ambitious learners with future-ready AI, graphic design, and media production.'}
          </p>
        </div>

        {/* Institution Brand & Logo Placeholder Block */}
        <div className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
          
          {/* Logo Placeholder Box */}
          <div className="w-full md:w-56 aspect-square bg-[#080d19] border-2 border-dashed border-slate-700 rounded-xl flex flex-col items-center justify-center p-4 text-center shrink-0">
            {customLogoUrl ? (
              <img
                src={customLogoUrl}
                alt="Katib Media Logo"
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <>
                <div className="w-16 h-16 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-extrabold text-2xl mb-2">
                  ক
                </div>
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
                  {isBn ? '[কাতিব মিডিয়া — লোগো]' : '[Katib Media — Logo]'}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {isBn ? 'আপনার লোগো ফাইল দিয়ে পরিবর্তন করুন' : 'Replace with your logo file'}
                </p>
                <button
                  onClick={onOpenPhotoCustomizer}
                  className="mt-2 text-[11px] font-semibold text-slate-300 hover:text-white underline cursor-pointer"
                >
                  {isBn ? 'লোগো প্রিভিউ টেস্ট করুন' : 'Test Logo Preview'}
                </button>
              </>
            )}
          </div>

          {/* Institutional Information */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isBn ? 'কাতিব মিডিয়া এর কর্মপরিধি ও ভিশন' : 'Scope of Work & Vision'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isBn
                ? 'কাতিব মিডিয়া শুধু একটি ট্রেনিং প্ল্যাটফর্ম নয়, এটি মাদরাসার তরুণদের জন্য প্রযুক্তিগত অগ্রগতির একটি মঞ্চ। এখানে গ্রাফিক ডিজাইন, এআই তালিম ও ভিডিও এডিটিং শেখানোর পাশাপাশি কন্টেন্ট তৈরি ও প্রচারের ক্ষেত্রেও প্রাতিষ্ঠানিক সহায়তা দেওয়া হয়।'
                : 'Katib Media is more than a training platform; it is a movement to integrate Islamic scholarship and madrasah youth with modern IT excellence, ethical freelancing, and creative digital media.'}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{isBn ? 'নৈতিক ও হালাল কারিকুলাম' : 'Ethical & Halal Standards'}</span>
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-orange-400" />
                <span>{isBn ? 'অনলাইন ও অফলাইন কর্মশালা' : 'Online & Offline Workshops'}</span>
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>{isBn ? 'সার্টিফিকেট ও মেন্টরশিপ' : 'Mentorship Support'}</span>
              </span>
            </div>
          </div>

        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-2.5">
                  {isBn ? service.titleBn : service.titleEn}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isBn ? service.descBn : service.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-orange-400 font-semibold flex items-center gap-1">
                <span>{isBn ? 'আলোচনা সাপেক্ষে নির্ধারিত' : 'Available by inquiry'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institution Workshop Call to Action */}
        <div className="mt-12 text-center">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>{isBn ? 'প্রতিষ্ঠানে কর্মশালা আয়োজনের জন্য হোয়াটসঅ্যাপ করুন' : 'Inquire for Institutional Workshop'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
