import React from 'react';
import { MessageCircle, Mail, Phone, Heart } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/coursesData';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isBn = language === 'bn';

  return (
    <footer className="bg-[#070c17] border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-orange-600 flex items-center justify-center font-extrabold text-white text-sm">
                ক
              </span>
              <span className="font-bold text-lg text-white">
                {isBn ? SITE_INFO.organizationNameBn : SITE_INFO.organizationNameEn}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              {isBn
                ? 'ইনাম বিন সিদ্দিক — শিক্ষক, গ্রাফিক ডিজাইনার ও এ আই প্রশিক্ষক। পিছিয়ে পড়া জনগোষ্ঠি ও মাদরাসার শিক্ষার্থীদের আধুনিক প্রযুক্তি ও আইটিতে দক্ষ করে গড়ে তোলার প্রয়াস।'
                : 'Enam Bin Siddik — Teacher, Graphic Designer & AI Trainer. Dedicated to empowering Madrasah students and youth with cutting-edge tech skills.'}
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              {isBn ? 'সহজ বাংলায় প্রযুক্তি শিক্ষা · হালাল আয়ের পথ' : 'Tech in Bengali · Halal Earning Pathways'}
            </div>
          </div>

          {/* Col 2: Fast Course Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isBn ? 'কোর্স ও মডিউল' : 'Courses'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">{isBn ? 'এ আই তালিম (AI Talim)' : 'AI Talim'}</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">{isBn ? 'এ আই ডিজাইন (AI Design)' : 'AI Design'}</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">{isBn ? 'অনলাইন একাডেমি' : 'Online Academy'}</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">{isBn ? 'গ্রাফিক ডিজাইন' : 'Graphic Design'}</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">{isBn ? 'ভিডিও এডিটিং' : 'Video Editing'}</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isBn ? 'যোগাযোগ' : 'Contact'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <a
                  href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-mono"
                >
                  {SITE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {SITE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {SITE_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {isBn ? SITE_INFO.organizationNameBn : SITE_INFO.organizationNameEn} · {isBn ? SITE_INFO.instructorNameBn : SITE_INFO.instructorNameEn}। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="text-[11px] text-slate-400">
            {isBn ? 'ডিজাইন ও পরিকল্পনা: কাতিব মিডিয়া' : 'Designed for Katib Media'}
          </div>
        </div>

      </div>
    </footer>
  );
};
