import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'ai-talim',
    titleBn: 'এ আই তালিম (AI Talim)',
    titleEn: 'AI Talim (AI Mastery & Prompting)',
    taglineBn: 'কৃত্রিম বুদ্ধিমত্তা আয়ত্ত করে দৈনন্দিন কাজ, গবেষণা ও আয়ের নতুন দিগন্ত',
    taglineEn: 'Master Artificial Intelligence for daily productivity, research & income',
    category: 'ai',
    categoryLabelBn: 'আর্টিফিশিয়াল ইন্টেলিজেন্স',
    categoryLabelEn: 'Artificial Intelligence',
    formatBn: 'অনলাইন লাইভ ক্লাস ও রেকর্ডেড সাপোর্ট',
    formatEn: 'Online Live Classes & Recorded Support',
    levelBn: 'শুরু থেকে অ্যাডভান্সড',
    levelEn: 'Beginner to Advanced',
    descriptionBn: 'কৃত্রিম বুদ্ধিমত্তা বা AI-কে সহজে বাংলা ভাষায় বুঝার এবং বাস্তব ক্ষেত্রে ব্যবহারের পূর্ণাঙ্গ প্রশিক্ষণ। প্রম্পট ইঞ্জিনিয়ারিং, কনটেন্ট তৈরি, অনুবাদ, তথ্য সাজানো এবং আধুনিক এআই টুলের মাধ্যমে কীভাবে সময় বাঁচিয়ে দ্রুত কাজ সম্পন্ন করবেন তা শেখানো হবে।',
    descriptionEn: 'A comprehensive curriculum in Bengali to demystify and apply Artificial Intelligence. Learn prompt engineering, content generation, translation, information structuring, and modern productivity tools.',
    highlightsBn: [
      'প্রম্পট ইঞ্জিনিয়ারিং এর কলাকৌশল ও সঠিক বাক্য গঠনের নিয়ম',
      'চ্যাটজিপিটি, ক্লড ও জেমিনাই এর প্রায়োগিক ব্যবহার',
      'গবেষণা, লেখালেখি ও কন্টেন্ট তৈরিতে এআই সহায়তা',
      'এআই টুলসের মাধ্যমে হালাল উপায়ে কাজের সুযোগ বৃদ্ধি'
    ],
    highlightsEn: [
      'Prompt engineering frameworks and precise command crafting',
      'Practical hands-on usage of ChatGPT, Claude, and Gemini',
      'AI-assisted research, writing, and structured synthesis',
      'Ethical and halal productivity enhancement strategies'
    ],
    syllabusBn: [
      { topic: 'মডিউল ১: এআই পরিচিতি ও মৌলিক ধারণা', details: 'এআই কীভাবে কাজ করে, কী করা সম্ভব এবং কী করা উচিত নয়' },
      { topic: 'মডিউল ২: প্রম্পট ইঞ্জিনিয়ারিং আর্ট', details: 'সঠিক ফলাফল পাওয়ার জন্য স্টেপ-বাই-স্টেপ প্রম্পট লেখার কৌশল' },
      { topic: 'মডিউল ৩: লেখালেখি ও গবেষণা অটোমেশন', details: 'সারসংক্ষেপ তৈরি, অনুবাদের মান উন্নয়ন ও তথ্য যাচাই' },
      { topic: 'মডিউল ৪: প্রোডাক্টিভিটি ও বাস্তব প্রয়োগ', details: 'দৈনন্দিন স্টাডি ও কর্মক্ষেত্রে এআই সহকারী হিসেবে কাজে লাগানো' }
    ],
    syllabusEn: [
      { topic: 'Module 1: Introduction to Modern AI', details: 'Fundamentals of LLMs, capabilities, and ethical boundaries' },
      { topic: 'Module 2: The Art of Prompt Engineering', details: 'Systematic frameworks for crafting high-precision prompts' },
      { topic: 'Module 3: Writing, Research & Translation', details: 'Document synthesis, contextual translation, and verification' },
      { topic: 'Module 4: Real-world Productivity & Workflows', details: 'Integrating AI assistants into daily study and project tasks' }
    ],
    prerequisitesBn: 'স্মার্টফোন অথবা কম্পিউটার চালানোর ন্যূনতম ধারণা এবং শেখার আগ্রহ।',
    prerequisitesEn: 'Basic familiarity with a smartphone or computer and a passion to learn.',
    outcomeBn: 'যেকোনো কাজে দ্রুত ও নির্ভুলভাবে এআই ব্যবহার করতে পারা এবং প্রম্পট ভিত্তিক কাজের দক্ষতা অর্জন।',
    outcomeEn: 'Confidence in orchestrating modern AI models to solve real-world tasks with precision.'
  },
  {
    id: 'ai-design',
    titleBn: 'এ আই ডিজাইন (AI Design)',
    titleEn: 'AI Design & Generative Art',
    taglineBn: 'টেক্সট থেকে প্রফেশনাল আর্টওয়ার্ক, পোস্টার ও ভিজ্যুয়াল কন্টেন্ট জেনারেশন',
    taglineEn: 'Generate professional visuals, posters & branding assets with AI',
    category: 'ai',
    categoryLabelBn: 'এআই ক্রিয়েটিভ আর্ট',
    categoryLabelEn: 'AI Creative Arts',
    formatBn: 'অনলাইন প্র্যাকটিক্যাল ওয়ার্কশপ',
    formatEn: 'Online Practical Workshop',
    levelBn: 'শুরু থেকে মাঝারি',
    levelEn: 'Beginner to Intermediate',
    descriptionBn: 'এআই ইমেজ জেনারেশন টুল ব্যবহার করে আকর্ষণীয় ছবি, সোশ্যাল মিডিয়া ব্যানার, ব্যাকগ্রাউন্ড ও কনসেপ্ট আর্ট তৈরি শেখার কোর্স। ডিজাইনের প্রাথমিক নিয়ম এবং এআই টুলসের মেলবন্ধনে ক্রিয়েটিভ কাজের গতি বহুগুণ বাড়ানো।',
    descriptionEn: 'Learn to produce striking visual imagery, social banners, concept graphics, and backgrounds using generative AI tools coupled with core visual design fundamentals.',
    highlightsBn: [
      'মিডজার্নি, ক্যানভা এআই এবং ফটোশপ জেনারেটিভ ফিলের বাস্তব ব্যবহার',
      'কালার থিওরি, কম্পোজিশন ও ভিজ্যুয়াল ব্যালেন্সিং',
      'সোশ্যাল মিডিয়া ব্যানার ও থাম্বনেইল তৈরির কৌশল',
      'জেনারেটেড আর্টের কোয়ালিটি বাড়ানো ও পোস্ট-প্রসেসিং'
    ],
    highlightsEn: [
      'Hands-on with Midjourney, Canva AI & Photoshop Generative Fill',
      'Color theory, composition, and visual balancing fundamentals',
      'Thumbnails, social media posts, and campaign creative workflow',
      'Upscaling, vectorization, and post-production refining'
    ],
    syllabusBn: [
      { topic: 'মডিউল ১: ভিজ্যুয়াল এআই টুলস পরিচিতি', details: 'আধুনিক ইমেজ জেনারেটর প্ল্যাটফর্ম ও তাদের শক্তি' },
      { topic: 'মডিউল ২: ইমেজ প্রম্পট মেকিং কৌশল', details: 'ক্যামেরা অ্যাঙ্গেল, লাইটিং, টেক্সচার ও স্টাইল ডিরেকশন' },
      { topic: 'মডিউল ৩: পোস্টার ও সোশ্যাল গ্রাফিক্স তৈরি', details: 'টাইপোগ্রাফি ও এআই ব্যাকগ্রাউন্ডের সমন্বয় সাধন' },
      { topic: 'মডিউল ৪: কমার্শিয়াল ব্যবহার ও কপিরাইট গাইড', details: 'ডিজাইন তৈরি করে ক্লায়েন্ট বা নিজের কাজে লাগানোর নিয়ম' }
    ],
    syllabusEn: [
      { topic: 'Module 1: Visual AI Tools Overview', details: 'Introduction to text-to-image engines and workspaces' },
      { topic: 'Module 2: Crafting Visual Prompts', details: 'Lighting, lens styles, artistic genres, and composition tags' },
      { topic: 'Module 3: Social & Poster Layout Fusion', details: 'Combining generated elements with clean typography' },
      { topic: 'Module 4: Commercial Usage Guidelines', details: 'Best practices for ethical and client-ready asset delivery' }
    ],
    prerequisitesBn: 'বেসিক ইন্টারনেট ব্রাউজিং জানা থাকতে হবে। গ্রাফিক্সের পূর্ব অভিজ্ঞতা থাকলে বাড়তি সুবিধা।',
    prerequisitesEn: 'Basic internet literacy; prior interest in visual arts is helpful but not required.',
    outcomeBn: 'অল্প সময়ে যেকোনো আইডিয়াকে আকর্ষণীয় ডিজিটাল ছবিতে রূপান্তর করার দক্ষতা।',
    outcomeEn: 'Ability to translate creative ideas into high-fidelity visuals swiftly.'
  },
  {
    id: 'online-academy',
    titleBn: 'অনলাইন একাডেমি (Online Academy)',
    titleEn: 'Online Academy (Skill Batches)',
    taglineBn: 'মাদরাসা শিক্ষার্থী ও তরুণদের জন্য পূর্ণাঙ্গ আইটি মেন্টরশিপ ও দিকনির্দেশনা',
    taglineEn: 'Structured IT mentorship and tech skill building for Madrasah students & youth',
    category: 'academy',
    categoryLabelBn: 'একাডেমিক মেন্টরশিপ',
    categoryLabelEn: 'Academic Mentorship',
    formatBn: 'অনলাইন নিয়মিত ব্যাচ ও সার্বক্ষণিক সাপোর্ট',
    formatEn: 'Regular Online Batches & Mentorship',
    levelBn: 'সকল স্তরের শিক্ষার্থীদের জন্য',
    levelEn: 'All Learners',
    descriptionBn: 'কাতিব মিডিয়ার অধীনে পরিচালিত বিশেষ একাডেমি। এখানে মাদরাসার শিক্ষার্থী ও পিছিয়ে পড়া তরুণদের ধাপে ধাপে কম্পিউটার, ইন্টারনেট, প্রডাক্টিভিটি সফটওয়্যার ও অনলাইন আয়ের বিভিন্ন মাধ্যমে দক্ষ করে গড়ে তোলা হয়।',
    descriptionEn: 'The flagship academic track by Katib Media designed to cultivate foundational digital literacy, IT competency, and practical freelancing pathways for students and underserved youth.',
    highlightsBn: [
      'মাদরাসার শিক্ষার্থীদের উপযোগী সহজবোধ্য শিক্ষাদান পদ্ধতি',
      'সরাসরি প্রশিক্ষক ইনাম বিন সিদ্দিক এর সার্বক্ষণিক গাইডেন্স',
      'প্র্যাকটিক্যাল হোমওয়ার্ক ও নিয়মিত ফিডব্যাক সেশন',
      'হালাল অনলাইন আয়ের পরিবেশ ও প্রস্তুতি'
    ],
    highlightsEn: [
      'Tailored pedagogical approach suitable for madrasah backgrounds',
      'Direct guidance from lead instructor Enam Bin Siddik',
      'Practical weekly assignments with personalized feedback',
      'Halal freelancing roadmap and ethical workplace training'
    ],
    syllabusBn: [
      { topic: 'মডিউল ১: ডিজিটাল ফান্ডামেন্টালস', details: 'কম্পিউটার ব্যবস্থাপনা, ইন্টারনেট নিরাপত্তা ও গুগল ড্রাইভ টুলস' },
      { topic: 'মডিউল ২: প্রডাক্টিভিটি ও সফট স্কিলস', details: 'ডকুমেন্টেশন, প্রেজেন্টেশন ও প্রাতিষ্ঠানিক যোগাযোগ' },
      { topic: 'মডিউল ৩: টেক স্কিল নির্বাচন ও প্র্যাকটিস', details: 'ডিজাইন ও মিডিয়ার ভিত্তি স্থাপন' },
      { topic: 'মডিউল ৪: ক্যারিয়ার ও আয়ের রূপরেখা', details: 'পোর্টফোলিও প্রস্তুত ও দেশি-বিদেশি কাজের সন্ধান' }
    ],
    syllabusEn: [
      { topic: 'Module 1: Digital Fundamentals', details: 'Operating system workflows, cloud storage, and safety' },
      { topic: 'Module 2: Productivity & Soft Skills', details: 'Document drafting, presentations, and communication' },
      { topic: 'Module 3: Core Tech Skill Foundations', details: 'Foundational creative and technical software tools' },
      { topic: 'Module 4: Career & Income Roadmaps', details: 'Portfolio preparation and remote service delivery' }
    ],
    prerequisitesBn: 'নিয়মিত ক্লাস করার মানসিকতা ও অনুশীলনের দৃঢ় প্রত্যয়।',
    prerequisitesEn: 'Commitment to attend scheduled sessions and complete practice drills.',
    outcomeBn: 'ডিজিটাল মাধ্যমে আত্মবিশ্বাস, কম্পিউটার সাক্ষরতা ও আয়ের বাস্তবসম্মত প্রস্তুতি।',
    outcomeEn: 'Digital confidence, versatile modern IT literacy, and income readiness.'
  },
  {
    id: 'graphic-design',
    titleBn: 'গ্রাফিক ডিজাইন (Graphic Design)',
    titleEn: 'Graphic Design Mastery',
    taglineBn: 'ব্র্যান্ডিং, লোগো, পোস্টার ও প্রিন্ট মিডিয়ার পেশাদার নকশা শিক্ষা',
    taglineEn: 'Professional graphic design for branding, print, and digital media',
    category: 'design',
    categoryLabelBn: 'গ্রাফিক ডিজাইন',
    categoryLabelEn: 'Graphic Design',
    formatBn: 'অনলাইন লাইভ ও অফলাইন ওয়ার্কশপ',
    formatEn: 'Online Live & Offline Workshops',
    levelBn: 'শুরু থেকে প্রফেশনাল',
    levelEn: 'Beginner to Professional',
    descriptionBn: 'একজন গ্রাফিক ডিজাইনার হিসেবে নিজের ক্যারিয়ার গড়ে তোলার পরিপূর্ণ কোর্স। লোগো ডিজাইন, সোশ্যাল মিডিয়া পোস্ট, বইয়ের প্রচ্ছদ, আইডি কার্ড, লিফলেট এবং প্রিন্ট রেডি ফাইলের কাজ হাতে-কলমে শেখানো হয়।',
    descriptionEn: 'End-to-end graphic design training covering Adobe Illustrator, Photoshop, brand identity, book cover design, social media assets, and commercial print preparation.',
    highlightsBn: [
      'অ্যাডোবি ফটোশপ ও ইলাস্ট্রেটরের গভীর টুল পরিচিতি',
      'বাংলা ও ইংরেজি টাইপোগ্রাফি এবং ক্যালিগ্রাফি বিন্যাস',
      'বই ও প্রকাশনা ডিজাইন (মাদরাসা ও প্রকাশনীর কাজের বিশেষ চাহিদা)',
      'প্রিন্ট প্রেসের নিয়মাবলী ও ক্লায়েন্ট প্রেজেন্টেশন'
    ],
    highlightsEn: [
      'Comprehensive tool mastery in Adobe Photoshop & Illustrator',
      'Bangla & Latin typography, layout hierarchy, and spacing',
      'Book cover and editorial layout for publications and institutions',
      'Print press prepress specifications and client delivery files'
    ],
    syllabusBn: [
      { topic: 'মডিউল ১: ডিজাইন নীতিমালা ও টুলস ফান্ডামেন্টাল', details: 'কালার, শেপ, গ্রিড এবং ফটোশপ-ইলাস্ট্রেটর ওয়ার্কস্পেস' },
      { topic: 'মডিউল ২: ভেক্টর আর্ট ও ব্র্যান্ড আইডেন্টিটি', details: 'লোগো তৈরি, ভেক্টরাইজেশন ও আইকনোগ্রাফি' },
      { topic: 'মডিউল ৩: পাবলিকেশন ও সোশ্যাল ব্যানার', details: 'বইয়ের কভার, ব্যানার, লিফলেট ও বিজনেস কার্ড তৈরি' },
      { topic: 'মডিউল ৪: পোর্টফোলিও ও মার্কেটপ্লেস প্রস্তুতি', details: 'বিহ্যান্স পোর্টফোলিও তৈরি ও ক্লায়েন্টের সাথে কাজের নিয়ম' }
    ],
    syllabusEn: [
      { topic: 'Module 1: Design Principles & Software Tools', details: 'Color harmony, geometry, grid layouts, and workspace tools' },
      { topic: 'Module 2: Vector Art & Brand Identity', details: 'Logo creation, pen tool precision, and vector icon design' },
      { topic: 'Module 3: Publications & Social Collaterals', details: 'Book jackets, brochures, banners, and business stationery' },
      { topic: 'Module 4: Portfolio & Client Relations', details: 'Showcase curation, Behance presentation, and handoffs' }
    ],
    prerequisitesBn: 'একটি সাধারণ কম্পিউটার বা ল্যাপটপ এবং ডিজাইনের প্রতি ভালোবাসা।',
    prerequisitesEn: 'A desktop or laptop computer and enthusiasm for visual creativity.',
    outcomeBn: 'পেশাদার মানের প্রিন্ট ও সোশ্যাল মিডিয়া ডিজাইন তৈরি করতে পারার যোগ্যতা।',
    outcomeEn: 'Skill to craft market-ready print and digital graphic assets independently.'
  },
  {
    id: 'video-editing',
    titleBn: 'ভিডিও এডিটিং (Video Editing)',
    titleEn: 'Video Editing & Content Creation',
    taglineBn: 'ভিডিও কাটছাঁট, সাউন্ড ডিজাইন, সাবটাইটেল ও আকর্ষনীয় কন্টেন্ট প্রোডাকশন',
    taglineEn: 'Video cutting, sound mixing, subtitling, and content editing',
    category: 'video',
    categoryLabelBn: 'ভিডিও ও মিডিয়া',
    categoryLabelEn: 'Video & Media Production',
    formatBn: 'অনলাইন প্র্যাকটিক্যাল ব্যাচ',
    formatEn: 'Online Practical Batch',
    levelBn: 'শুরু থেকে মাঝারি',
    levelEn: 'Beginner to Intermediate',
    descriptionBn: 'ইউটিউব, ফেসবুক ও শর্টস/রিলসের যুগে ভিডিও এডিটিং অত্যন্ত চাহিদাসম্পন্ন একটি দক্ষতা। শিক্ষামূলক কন্টেন্ট, আলোচনা, ইসলামিক বয়ান বা পণ্য প্রচারের ভিডিও আকর্ষণীয়ভাবে সম্পাদনা করার কৌশল শিখুন।',
    descriptionEn: 'Learn video editing workflows tailored for YouTube, social media reels, educational videos, and documentary content with clean audio cleanup and dynamic pacing.',
    highlightsBn: [
      'ক্যাপকাট ও প্রিমিয়ার প্রো এর সহজ ও কার্যকর ব্যবহার',
      'অডিও ক্লিনআপ ও নয়েজ দূরীকরণ পদ্ধতি',
      'বাংলা ক্যাপশন ও সাবটাইটেল দ্রুত বসানোর টেকনিক',
      'সোশ্যাল মিডিয়া উপযোগী রিদম, ট্রানজিশন ও বি-রোল ব্যবহার'
    ],
    highlightsEn: [
      'Streamlined editing with CapCut Desktop & Adobe Premiere Pro',
      'Audio leveling, noise reduction, and background music balance',
      'Fast automated and manual Bengali subtitling strategies',
      'Pacing, clean transitions, and b-roll placement for engagement'
    ],
    syllabusBn: [
      { topic: 'মডিউল ১: ভিডিও এডিটিং এর মূলনীতি', details: 'টাইমলাইন বোঝা, কাটছাঁট ও সিকোয়েন্স সাজানো' },
      { topic: 'মডিউল ২: অডিও ও সাউন্ড ডিজাইন', details: 'কণ্ঠ স্পষ্ট করা, ব্যাকগ্রাউন্ড মিউজিক লেভেলিং' },
      { topic: 'মডিউল ৩: টেক্সট, সাবটাইটেল ও গ্রাফিক্স', details: 'লোয়ার থার্ড, মোশন টেক্সট ও থাম্বনেইল ফ্রেম' },
      { topic: 'মডিউল ৪: এক্সপোর্ট ও প্ল্যাটফর্ম অপটিমাইজেশন', details: 'ইউটিউব, রিলস ও ফেসবুকের জন্য সঠিক ফরম্যাটে ভিডিও রেন্ডার' }
    ],
    syllabusEn: [
      { topic: 'Module 1: Fundamentals of Video Editing', details: 'Timeline basics, rough cuts, and narrative sequencing' },
      { topic: 'Module 2: Audio Engineering & Sound Design', details: 'Vocal enhancement, noise gating, and balance' },
      { topic: 'Module 3: Subtitles & Lower Thirds', details: 'Motion graphics, text overlays, and title cards' },
      { topic: 'Module 4: Exporting & Publishing Workflows', details: 'Optimal bitrates, aspect ratios for YouTube and Reels' }
    ],
    prerequisitesBn: 'ভিডিও এডিটিং সফটওয়্যার চলতে পারে এমন একটি সাধারণ কম্পিউটার।',
    prerequisitesEn: 'A computer capable of running entry-level video editing software.',
    outcomeBn: 'যেকোনো কাঁচা ফুটেজকে আকর্ষণীয় ও প্রফেশনাল ভিডিওতে রূপান্তর করার দক্ষতা।',
    outcomeEn: 'Competence to transform raw footage into compelling, high-quality video content.'
  }
];

export const SITE_INFO = {
  instructorNameBn: 'ইনাম বিন সিদ্দিক',
  instructorNameEn: 'Enam Bin Siddik',
  instructorPhotoUrl: 'https://res.cloudinary.com/zonyy4ot/image/upload/v1791301019/Enam_7_pjm6o6.png',
  organizationNameBn: 'কাতিব মিডিয়া',
  organizationNameEn: 'Katib Media',
  rolesBn: 'শিক্ষক · গ্রাফিক ডিজাইনার · এ আই প্রশিক্ষক',
  rolesEn: 'Teacher · Graphic Designer · AI Trainer',
  phone: '01719237720',
  whatsappNumber: '8801719237720',
  email: 'enamsiddik@gmail.com',
  locationPlaceholderBn: '[অফিস বা প্রতিষ্ঠানের ঠিকানা — প্রয়োজন অনুযায়ী আপডেট করুন]',
  locationPlaceholderEn: '[Office / Studio Address — Update as needed]',
};
