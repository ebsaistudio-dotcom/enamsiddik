import React, { useState } from 'react';
import { Course, Language } from '../types';
import { COURSES, SITE_INFO } from '../data/coursesData';
import { MessageCircle, BookOpen, Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface CoursesSectionProps {
  language: Language;
  onSelectCourse: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  language,
  onSelectCourse,
}) => {
  const isBn = language === 'bn';
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'design_video' | 'academy'>('all');

  const filteredCourses = COURSES.filter((course) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') return course.category === 'ai';
    if (activeCategory === 'design_video') return course.category === 'design' || course.category === 'video';
    if (activeCategory === 'academy') return course.category === 'academy';
    return true;
  });

  const getWhatsAppEnrollUrl = (course: Course) => {
    const courseTitle = isBn ? course.titleBn : course.titleEn;
    const text = isBn
      ? `আসসালামু আলাইকুম ইনাম বিন সিদ্দিক ভাই। আমি কাতিব মিডিয়ার "${courseTitle}" কোর্সে ভর্তি এবং পরবর্তী ব্যাচের শিডিউল জানতে আগ্রহী।`
      : `Hello Enam Bin Siddik. I am interested in enrolling in Katib Media's "${courseTitle}" course. Please share schedule details.`;
    return `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#090f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              {isBn ? 'কোর্স ও প্রশিক্ষণ মডিউল' : 'Courses & Training Modules'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {isBn
                ? 'দক্ষতা গড়ে তোলার বাস্তবমুখী কোর্সসমূহ'
                : 'Skill-Building Practical Curriculum'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {isBn
                ? 'প্রত্যেকটি কোর্স বাস্তব প্রজেক্ট ও প্রয়োগের উপর ভিত্তি করে সাজানো। অনলাইন লাইভ ক্লাস ও অফলাইন কর্মশালার সুযোগ।'
                : 'Every track is tailored for practical implementation and real-world results. Choose your path to learn.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isBn ? 'সকল কোর্স (৫টি)' : 'All Courses (5)'}
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'ai'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isBn ? 'এ আই কোর্স' : 'AI Modules'}
            </button>
            <button
              onClick={() => setActiveCategory('design_video')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'design_video'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isBn ? 'ডিজাইন ও ভিডিও' : 'Design & Video'}
            </button>
            <button
              onClick={() => setActiveCategory('academy')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'academy'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isBn ? 'অনলাইন একাডেমি' : 'Online Academy'}
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course, index) => {
            return (
              <div
                key={course.id}
                className="bg-[#0f172a] border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group shadow-lg shadow-black/30"
              >
                <div>
                  {/* Clean unboxed metadata header (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-3">
                    <span className="text-orange-400 font-semibold">
                      {isBn ? course.categoryLabelBn : course.categoryLabelEn}
                    </span>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <span>{isBn ? course.formatBn : course.formatEn}</span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {isBn ? course.titleBn : course.titleEn}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1.5 text-xs font-medium text-emerald-400">
                    {isBn ? course.taglineBn : course.taglineEn}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {isBn ? course.descriptionBn : course.descriptionEn}
                  </p>

                  {/* Highlights (Key topics) */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-800/80">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      {isBn ? 'কী কী শিখবেন:' : 'Key Learnings:'}
                    </div>
                    {(isBn ? course.highlightsBn : course.highlightsEn).slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Level & Mode metadata */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <span>{isBn ? 'লেভেল:' : 'Level:'} <strong className="text-slate-200">{isBn ? course.levelBn : course.levelEn}</strong></span>
                    <span>{isBn ? 'ব্যাচ ভিত্তিক' : 'Cohort Based'}</span>
                  </div>
                </div>

                {/* Call to action buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5">
                  {/* Primary WhatsApp Action */}
                  <a
                    href={getWhatsAppEnrollUrl(course)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isBn ? 'হোয়াটসঅ্যাপে আসন নিশ্চিত করুন' : 'Enroll via WhatsApp'}</span>
                  </a>

                  {/* Secondary Details Action (Modal trigger) */}
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700/80 rounded-xl border border-slate-700/60 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                    <span>{isBn ? 'সিলেবাস ও বিস্তারিত দেখুন' : 'View Syllabus & Details'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Guidance Banner */}
        <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-xl p-5 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-300">
            {isBn ? (
              <>
                কোর্স ফি ও ব্যাচ শিডিউল সম্পর্কে জানতে সরাসরি কল বা হোয়াটসঅ্যাপ করুন:{' '}
                <strong className="text-orange-400 font-mono text-sm">{SITE_INFO.phone}</strong>
              </>
            ) : (
              <>
                For batch schedule and enrollment fees, reach out on WhatsApp / Phone:{' '}
                <strong className="text-orange-400 font-mono text-sm">{SITE_INFO.phone}</strong>
              </>
            )}
          </div>
          <a
            href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>{isBn ? 'সরাসরি ইনবক্স করুন' : 'Direct WhatsApp Chat'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
