import React from 'react';
import { Target, Users, BookMarked, Coins, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/coursesData';

interface MissionSectionProps {
  language: Language;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ language }) => {
  const isBn = language === 'bn';

  const pillars = [
    {
      icon: BookMarked,
      titleBn: '১. সহজ ভাষায় প্রযুক্তি শিক্ষা',
      titleEn: '1. Accessible Tech Education',
      descBn: 'জটিল ইংরেজি পরিভাষা ও কঠিন সিলেবাসের ভীতি দূর করে, মাদরাসার শিক্ষার্থীদের উপযোগী করে সহজ মাতৃভাষায় প্রযুক্তি ও এআই ধারণা উপস্থাপন করা হয়।',
      descEn: 'Removing the intimidation of complex jargon by presenting advanced AI and IT concepts in clear, intuitive native Bengali language.'
    },
    {
      icon: Target,
      titleBn: '২. ব্যবহারিক ও প্রোজেক্ট-ভিত্তিক তালিম',
      titleEn: '2. Practical & Project-Based Learning',
      descBn: 'শুধুমাত্র তাত্ত্বিক আলোচনা নয়; কম্পিউটার ও ফোনে নিজে হাতে ডিজাইন, প্রম্পট লেখা ও ভিডিও তৈরি করে পোর্টফোলিও তৈরি নিশ্চিত করা হয়।',
      descEn: 'Beyond dry theory: building tangible portfolios through hands-on design, prompt engineering, and video workflows.'
    },
    {
      icon: Coins,
      titleBn: '৩. হালাল উপার্জনের ক্ষেত্র তৈরি',
      titleEn: '3. Ethical & Halal Income Generation',
      descBn: 'ইসলামিক ও নৈতিক মূল্যবোধ অক্ষুণ্ণ রেখে কীভাবে প্রযুক্তিকে কাজে লাগিয়ে অনলাইন ও অফলাইনে হালালভাবে উপার্জন করা যায় তার বাস্তবসম্মত দিকনির্দেশনা।',
      descEn: 'Guiding students toward honorable, halal freelancing and local work opportunities while maintaining ethical and Islamic values.'
    }
  ];

  const whatsappInquiryUrl = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isBn
      ? 'আসসালামু আলাইকুম। মাদরাসা শিক্ষার্থীদের আইটি প্রশিক্ষণ বা কাতিব মিডিয়া-র মিশন সম্পর্কে বিস্তারিত জানতে চাই।'
      : 'Hello! I would like to learn more about Katib Media mission and IT training for Madrasah students.'
  )}`;

  return (
    <section id="mission" className="py-16 md:py-24 bg-[#0a1120] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            {isBn ? 'আমাদের লক্ষ্য ও দর্শন' : 'Our Mission & Audience'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            {isBn
              ? 'মাদরাসার শিক্ষার্থীদের আইটিতে দক্ষ করে স্বাবলম্বী করা'
              : 'Empowering Madrasah Students with Tech Competency & Income'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isBn
              ? 'প্রযুক্তির এই স্বর্ণযুগে পিছিয়ে পড়া জনগোষ্ঠি ও কওমি-আলিয়া মাদরাসার তরুণদের আধুনিক এআই ও আইটি শক্তিতে বলীয়ান করে গড়ে তোলা কাতিব মিডিয়ার প্রধান অঙ্গীকার।'
              : 'Katib Media is dedicated to bridging the technological divide by empowering Madrasah students and underserved communities with modern AI and creative digital proficiencies.'}
          </p>
        </div>

        {/* 3 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 lg:p-7 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {isBn ? pillar.titleBn : pillar.titleEn}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {isBn ? pillar.descBn : pillar.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-orange-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isBn ? 'বাস্তবধর্মী কারিকুলাম' : 'Practical curriculum'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Outreach & Madrasah Collaboration Box */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-[#0d1829] to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Users className="w-5 h-5 text-orange-400" />
              <span>
                {isBn
                  ? 'আপনার মাদরাসা বা প্রতিষ্ঠানে এআই ও আইটি ওয়ার্কশপ আয়োজন করতে চান?'
                  : 'Interested in hosting an AI & IT workshop at your madrasah or institution?'}
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {isBn
                ? 'কাতিব মিডিয়া সরাসরি প্রতিষ্ঠানে গিয়ে অথবা অনলাইনে বিশেষ সেমিনার ও কর্মশালা পরিচালনা করে থাকে।'
                : 'Katib Media conducts specialized offline seminars and interactive online workshops for educational centers.'}
            </p>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isBn ? 'কর্মশালার জন্য হোয়াটসঅ্যাপ করুন' : 'Inquire for Workshop'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
