import React, { useEffect } from 'react';
import { Course, Language } from '../types';
import { SITE_INFO } from '../data/coursesData';
import { X, MessageCircle, PhoneCall, Check, BookOpen, Layers, Award, Sparkles } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  language: Language;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  language,
  onClose,
}) => {
  const isBn = language === 'bn';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const courseTitle = isBn ? course.titleBn : course.titleEn;
  const whatsappUrl = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isBn
      ? `আসসালামু আলাইকুম। আমি "${courseTitle}" কোর্সের পরবর্তী ব্যাচে ভর্তি ও ফি সম্পর্কে জানতে আগ্রহী।`
      : `Hello! I would like to inquire about fee and schedule for "${courseTitle}".`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div className="relative bg-[#0d1627] border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-2">
          <span>{isBn ? course.categoryLabelBn : course.categoryLabelEn}</span>
          <span className="text-slate-600">·</span>
          <span className="text-emerald-400">{isBn ? course.formatBn : course.formatEn}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white pr-8">
          {courseTitle}
        </h3>

        <p className="mt-1 text-sm font-medium text-emerald-400">
          {isBn ? course.taglineBn : course.taglineEn}
        </p>

        {/* Full Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          {isBn ? course.descriptionBn : course.descriptionEn}
        </p>

        {/* Syllabus / Module Breakdown */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-orange-400" />
            <span>{isBn ? 'সিলেবাস ও মডিউল রূপরেখা' : 'Syllabus & Course Modules'}</span>
          </h4>

          <div className="space-y-3">
            {(isBn ? course.syllabusBn : course.syllabusEn).map((mod, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5"
              >
                <div className="text-xs font-bold text-orange-400">
                  {mod.topic}
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  {mod.details}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>{isBn ? 'কোর্সের বিশেষত্ব' : 'Course Features'}</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(isBn ? course.highlightsBn : course.highlightsEn).map((hl, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites & Outcomes */}
        <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
            <div className="font-semibold text-slate-200 mb-1">
              {isBn ? 'পূর্বশর্ত / যোগ্যতা:' : 'Prerequisites:'}
            </div>
            <div className="text-slate-400 leading-relaxed">
              {isBn ? course.prerequisitesBn : course.prerequisitesEn}
            </div>
          </div>

          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
            <div className="font-semibold text-emerald-300 mb-1 flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>{isBn ? 'অর্জিত ফলাফল:' : 'Expected Outcome:'}</span>
            </div>
            <div className="text-slate-400 leading-relaxed">
              {isBn ? course.outcomeBn : course.outcomeEn}
            </div>
          </div>
        </div>

        {/* Modal CTA Buttons */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isBn ? 'হোয়াটসঅ্যাপে আসন নিশ্চিত করুন' : 'Enroll via WhatsApp'}</span>
          </a>

          <a
            href={`tel:${SITE_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-orange-400" />
            <span>{SITE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
