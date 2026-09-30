import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { X, Phone, Send, CheckCircle, Paperclip } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [projectType, setProjectType] = useState<'commercial' | 'residential'>('commercial');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceNeeded: initialService || 'Curtain Wall Systems',
    projectLocation: '',
    projectDetails: '',
    fileName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commercialServices = [
    'Curtain Wall Systems',
    'Storefront Systems',
    'Unitized Curtain Wall',
    'Window Wall Systems',
    'Radius / Curved Glass Walls',
    'ACM Panels & Metal Cladding',
    'Commercial Entrance Doors',
    'Other Commercial Glazing'
  ];

  const residentialServices = [
    'Frameless Shower Enclosures',
    'Architectural Windows & Doors',
    'Fixed & Retractable Skylights',
    'Custom Residential Glass & Railings',
    'Glass Replacement / Renovation',
    'Other Residential Glass'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+()-\s.]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'City or Zip is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111315]/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#DDE2E4] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#111315]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7B8388] hover:text-[#111315] bg-[#F5F4F0] rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#527187]/10 border border-[#527187]/30 flex items-center justify-center mx-auto text-[#527187]">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#111315]">
              Quote Request Sent Successfully
            </h3>
            <p className="text-xs sm:text-sm text-[#7B8388] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#111315] font-semibold">{formData.name}</span>. An Empire Glass representative will review your request for <span className="text-[#111315] font-semibold">{formData.serviceNeeded}</span> and follow up promptly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="btn-steel inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-medium text-[#7B8388] hover:text-[#111315] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-1">
                Fast Glazing Estimate
              </div>
              <h2 id="quote-modal-title" className="text-2xl font-bold text-[#111315]">
                Request a Project Proposal
              </h2>
              <p className="text-xs text-[#7B8388] mt-1">
                Furnishing shop fabrication &amp; installation across Greensboro &amp; the Triad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* Type Switcher */}
              <div>
                <label className="block text-xs font-medium text-[#111315] mb-1.5">
                  Sector *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setProjectType('commercial');
                      setFormData(prev => ({ ...prev, serviceNeeded: commercialServices[0] }));
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold tracking-wide uppercase transition-all cursor-pointer border ${
                      projectType === 'commercial'
                        ? 'btn-steel shadow-sm'
                        : 'bg-[#FFFFFF] text-[#111315] border-[#DDE2E4] hover:border-[#527187]'
                    }`}
                  >
                    Commercial Glazing
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProjectType('residential');
                      setFormData(prev => ({ ...prev, serviceNeeded: residentialServices[0] }));
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold tracking-wide uppercase transition-all cursor-pointer border ${
                      projectType === 'residential'
                        ? 'btn-steel shadow-sm'
                        : 'bg-[#FFFFFF] text-[#111315] border-[#DDE2E4] hover:border-[#527187]'
                    }`}
                  >
                    Residential Glass
                  </button>
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-medium text-[#111315] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className={`w-full bg-[#FFFFFF] border rounded-lg px-3 py-2 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] ${
                      errors.name ? 'border-rose-500' : 'border-[#DDE2E4]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="modal-company" className="block text-xs font-medium text-[#111315] mb-1">
                    Company (Optional)
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="General Contractor / Builder"
                    className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3 py-2 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-[#111315] mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="336-257-2728"
                    className={`w-full bg-[#FFFFFF] border rounded-lg px-3 py-2 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] ${
                      errors.phone ? 'border-rose-500' : 'border-[#DDE2E4]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-[#111315] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className={`w-full bg-[#FFFFFF] border rounded-lg px-3 py-2 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] ${
                      errors.email ? 'border-rose-500' : 'border-[#DDE2E4]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              {/* Service & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-medium text-[#111315] mb-1">
                    Service Needed *
                  </label>
                  <select
                    id="modal-service"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3 py-2 text-xs text-[#111315] focus:outline-none focus:border-[#527187]"
                  >
                    {(projectType === 'commercial' ? commercialServices : residentialServices).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-location" className="block text-xs font-medium text-[#111315] mb-1">
                    Project Location (City / Zip) *
                  </label>
                  <input
                    id="modal-location"
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="Greensboro, NC"
                    className={`w-full bg-[#FFFFFF] border rounded-lg px-3 py-2 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] ${
                      errors.projectLocation ? 'border-rose-500' : 'border-[#DDE2E4]'
                    }`}
                  />
                  {errors.projectLocation && <p className="text-[11px] text-rose-500 mt-0.5">{errors.projectLocation}</p>}
                </div>
              </div>

              {/* Details */}
              <div>
                <label htmlFor="modal-details" className="block text-xs font-medium text-[#111315] mb-1">
                  Scope &amp; Dimensions (Optional)
                </label>
                <textarea
                  id="modal-details"
                  rows={2}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Estimated linear feet, glass specs, target completion date..."
                  className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3 py-2 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187]"
                />
              </div>

              {/* Attach File */}
              <div>
                <label className="flex items-center justify-between p-2.5 rounded-lg bg-[#F5F4F0] border border-dashed border-[#DDE2E4] hover:border-[#527187] cursor-pointer">
                  <div className="flex items-center gap-2 text-xs text-[#7B8388]">
                    <Paperclip className="w-3.5 h-3.5 text-[#527187]" />
                    <span className="truncate max-w-xs">{formData.fileName || 'Attach Blueprints / Drawings (PDF, DWG)'}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#527187] px-2 py-0.5 bg-[#FFFFFF] rounded border border-[#DDE2E4] shadow-xs">
                    Browse
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg,.dwg"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-steel w-full py-3.5 px-4 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request My Quote</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-xs text-[#7B8388] hover:text-[#527187] transition-colors"
                >
                  Prefer to speak right now? Call <span className="font-bold text-[#527187]">{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
