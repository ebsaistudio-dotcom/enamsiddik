import React, { useRef } from 'react';
import { X, Upload, Image as ImageIcon, RotateCcw, Check, Info } from 'lucide-react';
import { Language } from '../types';

interface PhotoCustomizerModalProps {
  isOpen: boolean;
  language: Language;
  customProfilePhotoUrl: string | null;
  customLogoUrl: string | null;
  onUpdateProfilePhoto: (url: string | null) => void;
  onUpdateLogo: (url: string | null) => void;
  onClose: () => void;
}

export const PhotoCustomizerModal: React.FC<PhotoCustomizerModalProps> = ({
  isOpen,
  language,
  customProfilePhotoUrl,
  customLogoUrl,
  onUpdateProfilePhoto,
  onUpdateLogo,
  onClose,
}) => {
  const isBn = language === 'bn';
  const profileInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      onUpdateProfilePhoto(objectUrl);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      onUpdateLogo(objectUrl);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative bg-[#0d1627] border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-orange-400" />
              <span>{isBn ? 'ছবি ও লোগো প্লেসহোল্ডার কাস্টমাইজার' : 'Photo & Logo Placeholder Setup'}</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {isBn
                ? 'আপনার ডিভাইসের আসল ছবি দিয়ে প্রিভিউ দেখে নিশ্চিত হতে পারেন।'
                : 'Preview how your personal photo and logo will look live on the site.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Enam Bin Siddik Profile Photo */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-white block">
                {isBn ? '১. ইনাম বিন সিদ্দিক — প্রোফাইল ছবি' : '1. Enam Bin Siddik — Profile Photo'}
              </span>
              <span className="text-[11px] text-slate-400">
                {customProfilePhotoUrl
                  ? (isBn ? 'কাস্টম ছবি সক্রিয়' : 'Custom photo loaded')
                  : (isBn ? 'অফিসিয়াল ছবি সক্রিয়' : 'Official photo active')}
              </span>
            </div>
            {customProfilePhotoUrl && (
              <button
                onClick={() => onUpdateProfilePhoto(null)}
                className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isBn ? 'রিসেট' : 'Reset'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="file"
              ref={profileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleProfilePhotoChange}
            />
            <button
              onClick={() => profileInputRef.current?.click()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-orange-400" />
              <span>{isBn ? 'কম্পিউটার/ফোন থেকে ছবি বেছে নিন' : 'Choose Photo from Device'}</span>
            </button>
          </div>
        </div>

        {/* Section 2: Katib Media Logo */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-white block">
                {isBn ? '২. কাতিব মিডিয়া — লোগো' : '2. Katib Media — Logo'}
              </span>
              <span className="text-[11px] text-slate-400">
                {customLogoUrl
                  ? (isBn ? 'কাস্টম লোগো সক্রিয়' : 'Custom logo loaded')
                  : (isBn ? 'প্লেসহোল্ডার সিলেক্টেড' : 'Default placeholder active')}
              </span>
            </div>
            {customLogoUrl && (
              <button
                onClick={() => onUpdateLogo(null)}
                className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isBn ? 'রিসেট' : 'Reset'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="file"
              ref={logoInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleLogoChange}
            />
            <button
              onClick={() => logoInputRef.current?.click()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-orange-400" />
              <span>{isBn ? 'লোগো ফাইল আপলোড করুন' : 'Choose Logo from Device'}</span>
            </button>
          </div>
        </div>

        {/* Help Tip */}
        <div className="bg-emerald-950/40 border border-emerald-900/60 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-300">
          <Info className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            {isBn
              ? 'এখানে আপলোড করা ছবি সাথে সাথে হোমপেজে প্রিভিউ হবে। পরবর্তীতে স্থায়ীভাবে ওয়েবসাইটে যুক্ত করতে চাইলে ফোল্ডারে ফাইল সেভ করা যাবে।'
              : 'Uploaded files will immediately render across all sections for previewing.'}
          </p>
        </div>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-colors cursor-pointer"
        >
          {isBn ? 'ঠিক আছে / বন্ধ করুন' : 'Done / Close'}
        </button>

      </div>
    </div>
  );
};
