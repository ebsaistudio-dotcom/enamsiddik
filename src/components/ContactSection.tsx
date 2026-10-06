import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/coursesData';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const isBn = language === 'bn';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Quick message builder state
  const [senderName, setSenderName] = useState('');
  const [inquiryType, setInquiryType] = useState('ai-talim');
  const [customNote, setCustomNote] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SITE_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendWhatsAppMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const inquiryLabels: Record<string, { bn: string; en: string }> = {
      'ai-talim': { bn: 'এ আই তালিম (AI Talim)', en: 'AI Talim' },
      'ai-design': { bn: 'এ আই ডিজাইন (AI Design)', en: 'AI Design' },
      'online-academy': { bn: 'অনলাইন একাডেমি', en: 'Online Academy' },
      'graphic-design': { bn: 'গ্রাফিক ডিজাইন', en: 'Graphic Design' },
      'video-editing': { bn: 'ভিডিও এডিটিং', en: 'Video Editing' },
      'workshop': { bn: 'মাদরাসা বা প্রতিষ্ঠানে কর্মশালা আয়োজন', en: 'Host Institutional Workshop' },
      'general': { bn: 'সাধারণ পরামর্শ ও জিজ্ঞাসা', en: 'General Consultation' },
    };

    const selectedLabel = inquiryLabels[inquiryType] || inquiryLabels['general'];
    const chosenSubject = isBn ? selectedLabel.bn : selectedLabel.en;

    let text = isBn
      ? `আসসালামু আলাইকুম ইনাম বিন সিদ্দিক ভাই।\n`
      : `Hello Enam Bin Siddik,\n`;

    if (senderName.trim()) {
      text += isBn ? `আমার নাম: ${senderName.trim()}\n` : `My Name: ${senderName.trim()}\n`;
    }

    text += isBn
      ? `বিষয়: ${chosenSubject} সম্পর্কে জানতে চাই।\n`
      : `Subject: Inquiring about ${chosenSubject}.\n`;

    if (customNote.trim()) {
      text += isBn ? `বার্তা: ${customNote.trim()}\n` : `Message: ${customNote.trim()}\n`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a1120] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            {isBn ? 'যোগাযোগ ও তথ্য' : 'Contact & Inquiries'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isBn ? 'সরাসরি যোগাযোগ করুন' : 'Get in Touch Directly'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isBn
              ? 'কোর্স ভর্তি, প্রাতিষ্ঠানিক কর্মশালা বা যেকোনো পরামর্শের জন্য হোয়াটসঅ্যাপ, কল বা ইমেইলের মাধ্যমে যোগাযোগ করতে পারেন।'
              : 'For course admissions, madrasah workshop bookings, or advice, connect directly via WhatsApp, phone, or email.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Channels & Address Placeholder */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Highlight Card */}
            <div className="bg-[#0f172a] border-2 border-emerald-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{isBn ? 'হোয়াটসঅ্যাপে দ্রুত উত্তর' : 'Fast WhatsApp Response'}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-mono">
                    {SITE_INFO.phone}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {isBn
                      ? 'যেকোনো সময় হোয়াটসঅ্যাপে বার্তা পাঠাতে পারেন।'
                      : 'Send a message anytime for direct consultation.'}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2.5">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isBn ? 'সরাসরি চ্যাট খুলুন' : 'Open WhatsApp Chat'}</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-2.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
            </div>

            {/* Phone & Email Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isBn ? 'সরাসরি কল' : 'Phone Call'}</span>
                </div>
                <div className="font-mono text-sm font-bold text-white">
                  {SITE_INFO.phone}
                </div>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="mt-3 inline-block text-xs font-medium text-slate-300 hover:text-white underline"
                >
                  {isBn ? 'কল করুন' : 'Call Now'}
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{isBn ? 'অফিসিয়াল ইমেইল' : 'Email Address'}</span>
                </div>
                <div className="text-xs font-medium text-white truncate" title={SITE_INFO.email}>
                  {SITE_INFO.email}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="text-xs font-medium text-slate-300 hover:text-white underline"
                  >
                    {isBn ? 'মেইল পাঠান' : 'Send Mail'}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer ml-auto flex items-center gap-1"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'কপি হয়েছে' : 'কপি'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Address Placeholder Box (Required by user constraint) */}
            <div className="bg-[#0e172a] border border-dashed border-slate-700 rounded-xl p-5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>{isBn ? '[ঠিকানা প্লেসহোল্ডার / Address Placeholder]' : '[Physical Address Placeholder]'}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isBn
                  ? 'আপনার অফিস, স্টুডিও বা মাদরাসার ঠিকানা প্রয়োজন অনুযায়ী এখানে যুক্ত করতে পারবেন।'
                  : 'Add your physical office, studio or institution location as needed.'}
              </p>
              <div className="mt-2 text-xs text-slate-500 font-mono">
                {isBn ? SITE_INFO.locationPlaceholderBn : SITE_INFO.locationPlaceholderEn}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Message Builder */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>{isBn ? 'হোয়াটসঅ্যাপ বার্তা প্রস্তুত করুন' : 'Compose WhatsApp Inquiry'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {isBn
                    ? 'আপনার পছন্দের বিষয় সিলেক্ট করে সরাসরি ইনাম বিন সিদ্দিক ভাইয়ের হোয়াটসঅ্যাপে মেসেজ পাঠান।'
                    : 'Select your interest and launch WhatsApp directly with your message.'}
                </p>
              </div>

              <form onSubmit={handleSendWhatsAppMessage} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isBn ? 'আপনার নাম (ঐচ্ছিক):' : 'Your Name (Optional):'}
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={isBn ? 'যেমন: মোহাম্মদ আব্দুল্লাহ' : 'e.g. Mohammad Abdullah'}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                {/* Inquiry Subject */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isBn ? 'আগ্রহের বিষয় / কোর্স সিলেক্ট করুন:' : 'Select Course / Inquiry Topic:'}
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="ai-talim">{isBn ? 'এ আই তালিম (AI Talim) কোর্স' : 'AI Talim Course'}</option>
                    <option value="ai-design">{isBn ? 'এ আই ডিজাইন (AI Design) কোর্স' : 'AI Design Course'}</option>
                    <option value="online-academy">{isBn ? 'অনলাইন একাডেমি ব্যাচ' : 'Online Academy Batch'}</option>
                    <option value="graphic-design">{isBn ? 'গ্রাফিক ডিজাইন কোর্স' : 'Graphic Design Course'}</option>
                    <option value="video-editing">{isBn ? 'ভিডিও এডিটিং কোর্স' : 'Video Editing Course'}</option>
                    <option value="workshop">{isBn ? 'মাদরাসা বা প্রতিষ্ঠানে কর্মশালা আয়োজন' : 'Host Workshop at Madrasah/Institution'}</option>
                    <option value="general">{isBn ? 'সাধারণ পরামর্শ ও জিজ্ঞাসা' : 'General Inquiry'}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {isBn ? 'বার্তা বা বিশেষ প্রশ্ন (ঐচ্ছিক):' : 'Message or Question (Optional):'}
                  </label>
                  <textarea
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder={isBn ? 'ক্লাসের সময়, ফি বা অন্য যেকোনো তথ্য জানতে লিখুন...' : 'Ask about schedule, fee, or any questions...'}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                {/* Action Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isBn
                      ? '০১৭১৯২৩৭৭২০ নাম্বারে হোয়াটসঅ্যাপে পাঠান'
                      : 'Send via WhatsApp to 01719237720'}
                  </span>
                </button>
              </form>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-slate-400">
                  {isBn
                    ? 'বাটনে ক্লিক করলে আপনার ডিভাইসের হোয়াটসঅ্যাপ অ্যাপ বা ওয়েবে চ্যাট ওপেন হবে।'
                    : 'Clicking opens WhatsApp with this pre-formatted message on your device.'}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
