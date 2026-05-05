"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// ─── Custom Select Component ───
const CustomSelect = ({ value, onChange, options, disabled, icon, primary }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectedOption = options.find(o => o.value === value) || options[0];

  return (
    <div className="relative w-full sm:w-60" ref={ref}>
      <button 
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-300 font-lexend font-bold text-sm outline-none focus:ring-4 focus:ring-[#0794B9]/20 ${
          primary 
            ? 'bg-[#0794B9] text-white hover:bg-[#068AA6] shadow-lg shadow-[#0794B9]/30 hover:shadow-xl hover:-translate-y-0.5' 
            : 'bg-white border-2 border-[#0794B9]/20 text-[#0794B9] hover:border-[#0794B9] shadow-sm hover:shadow-md hover:-translate-y-0.5'
        } ${disabled ? 'opacity-50 cursor-not-allowed hover:transform-none hover:shadow-sm' : ''}`}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
          <span className="truncate">{selectedOption?.label || "Pilih"}</span>
        </div>
        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      
      {isOpen && !disabled && (
        <div className="absolute z-50 top-full mt-2 left-0 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up py-2 max-h-72 overflow-y-auto hide-scrollbar">
          {options.length > 0 ? options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
              className={`w-full text-left px-5 py-3 font-inter text-sm transition-colors ${
                value === opt.value ? 'bg-[#0794B9]/10 text-[#0794B9] font-bold border-l-4 border-[#0794B9]' : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
              }`}
            >
              {opt.label}
            </button>
          )) : (
            <div className="px-5 py-3 text-sm text-gray-400 italic">Belum ada pilihan</div>
          )}
        </div>
      )}
    </div>
  );
};

export default function ArticleFilterBar({ availableCategories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read current URL params
  const currentType = searchParams.get('type') || 'ALL';
  const currentCategory = searchParams.get('category') || 'ALL_CATEGORIES';

  // Handle Type Change
  const handleTypeChange = (newType) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (newType === 'ALL') {
      params.delete('type');
      params.delete('category');
    } else {
      params.set('type', newType);
      // RESET logic: delete category when type changes
      params.delete('category');
    }
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Handle Category Change
  const handleCategoryChange = (newCat) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (newCat === 'ALL_CATEGORIES') {
      params.delete('category');
    } else {
      params.set('category', newCat);
    }
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const typeOptions = [
    { value: 'ALL', label: 'Semua Artikel' },
    { value: 'BODY_PART', label: 'Bagian Tubuh' },
    { value: 'SPORT_TYPE', label: 'Olahraga' },
    { value: 'MEDICAL_CONDITION', label: 'Kondisi Medis' }
  ];

  const categoryOptions = [
    { value: 'ALL_CATEGORIES', label: 'Semua Kategori' },
    ...availableCategories
      .filter(c => c.type === currentType)
      .map(c => ({ value: c.name, label: c.name }))
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
      <CustomSelect 
        value={currentType}
        onChange={handleTypeChange}
        options={typeOptions}
        primary={true}
        icon="category"
      />
      
      {currentType !== 'ALL' && (
        <CustomSelect 
          value={currentCategory}
          onChange={handleCategoryChange}
          options={categoryOptions}
          primary={false}
          icon="filter_list"
        />
      )}
    </div>
  );
}
