/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, Course } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { CoursesSection } from './components/CoursesSection';
import { AboutSection } from './components/AboutSection';
import { InstitutionalSection } from './components/InstitutionalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { PhotoCustomizerModal } from './components/PhotoCustomizerModal';
import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from './data/coursesData';

export default function App() {
  const [language, setLanguage] = useState<Language>('bn');
  const [customProfilePhotoUrl, setCustomProfilePhotoUrl] = useState<string | null>(null);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isPhotoCustomizerOpen, setIsPhotoCustomizerOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const isBn = language === 'bn';

  const floatingWhatsAppUrl = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isBn
      ? 'আসসালামু আলাইকুম ইনাম বিন সিদ্দিক ভাই। আমি কাতিব মিডিয়া ও আপনার কোর্স সম্পর্কে জানতে যোগাযোগ করছি।'
      : 'Hello Enam Bin Siddik! I am contacting you regarding Katib Media and your courses.'
  )}`;

  return (
    <div className="min-h-screen bg-[#090f1d] text-slate-100 flex flex-col selection:bg-orange-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenPhotoCustomizer={() => setIsPhotoCustomizerOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          customProfilePhotoUrl={customProfilePhotoUrl}
          onOpenPhotoCustomizer={() => setIsPhotoCustomizerOpen(true)}
        />

        {/* Mission & Target Audience Section */}
        <MissionSection language={language} />

        {/* Courses & Training Modules */}
        <CoursesSection
          language={language}
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        {/* About Enam Bin Siddik */}
        <AboutSection
          language={language}
          customProfilePhotoUrl={customProfilePhotoUrl}
          onOpenPhotoCustomizer={() => setIsPhotoCustomizerOpen(true)}
        />

        {/* Institutional Services & Katib Media */}
        <InstitutionalSection
          language={language}
          customLogoUrl={customLogoUrl}
          onOpenPhotoCustomizer={() => setIsPhotoCustomizerOpen(true)}
        />

        {/* Contact & WhatsApp Composer */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        language={language}
        onClose={() => setSelectedCourse(null)}
      />

      {/* Photo / Logo Preview Modal */}
      <PhotoCustomizerModal
        isOpen={isPhotoCustomizerOpen}
        language={language}
        customProfilePhotoUrl={customProfilePhotoUrl}
        customLogoUrl={customLogoUrl}
        onUpdateProfilePhoto={setCustomProfilePhotoUrl}
        onUpdateLogo={setCustomLogoUrl}
        onClose={() => setIsPhotoCustomizerOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="WhatsApp Support" className="fixed bottom-5 right-5 z-40">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Message"
          className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-200 transform hover:scale-105 group"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">
            {isBn ? 'হোয়াটসঅ্যাপে কথা বলুন' : 'Chat on WhatsApp'}
          </span>
        </a>
      </aside>
    </div>
  );
}
