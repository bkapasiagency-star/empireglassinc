import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { QUOTE_SERVICE_OPTIONS, sectorForService } from '../data/services';
import { Phone, Send, CheckCircle, MapPin, Clock, Paperclip } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { SectionBackdrop } from './SectionBackdrop';

interface QuoteSectionProps {
  initialService?: string;
  initialDetails?: {
    type: 'commercial' | 'residential';
    service: string;
    scopeSize: string;
    timeline: string;
    glassType: string;
  } | null;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialService, initialDetails }) => {
  const [projectType, setProjectType] = useState<'commercial' | 'residential'>(
    initialDetails?.type || 'commercial'
  );
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceNeeded: initialService || initialDetails?.service || 'Curtain Walls',
    projectLocation: '',
    projectDetails: initialDetails 
      ? `Configured Scope:\n- System: ${initialDetails.service}\n- Scale: ${initialDetails.scopeSize}\n- Timeline: ${initialDetails.timeline}\n- Spec: ${initialDetails.glassType}`
      : '',
    fileName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
      const sector = sectorForService(initialService);
      if (sector) setProjectType(sector);
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialDetails) {
      setProjectType(initialDetails.type);
      setFormData(prev => ({
        ...prev,
        serviceNeeded: initialDetails.service,
        projectDetails: `Configured Scope:\n- System: ${initialDetails.service}\n- Scale: ${initialDetails.scopeSize}\n- Timeline: ${initialDetails.timeline}\n- Spec: ${initialDetails.glassType}`
      }));
    }
  }, [initialDetails]);

  // The current value is kept selectable even when it is not a catalogue item (e.g. a portfolio project title)
  const baseServices = QUOTE_SERVICE_OPTIONS[projectType];
  const serviceOptions = baseServices.includes(formData.serviceNeeded)
    ? baseServices
    : [formData.serviceNeeded, ...baseServices];

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
    }, 600);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <section id="contact" className="py-24 section-clear text-[#111315] relative">
      <SectionBackdrop image="1654105727849-1b9d39357f16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-reveal>
        
        {/* Closing Banner / Pre-Form Statement (Deep Charcoal Dark Section) */}
        <div className="relative rounded-2xl overflow-hidden mb-16 border border-[#DDE2E4]/20 shadow-2xl bg-[#111315]">
          <div className="absolute inset-0 z-0">
            <ArchitecturalImage
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1600&q=80"
              alt="Architectural Glass High Rise Facade"
              aspectRatio="aspect-[21/9]"
              overlayText="Empire Glass Glazing Systems"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/90 to-[#111315]/65" />
            <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DDE2E4] mb-2">
              Start Your Project
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
              Have a Glass Project in Mind?
            </h2>
            <p className="text-base sm:text-lg text-[#DDE2E4] mb-8 max-w-xl">
              Tell us what you're building. We'll review your scope, verify specifications, and help you take the next step.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="btn-steel inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#quote-form"
                className="btn-secondary-dark inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-xs"
              >
                <span>Fill Out Quote Form Below</span>
              </a>
            </div>
          </div>
        </div>

        {/* Two-Column Form & Direct Contact Block */}
        <div id="quote-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Office Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187]">
              Direct Contact &amp; Staging Facility
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111315]">
              Talk Directly with Empire Glass.
            </h3>
            <p className="text-sm text-[#7B8388] leading-relaxed">
              Whether you need preliminary budget numbers for an upcoming commercial bid or custom glass pricing for a home renovation, our team is accessible by phone and form.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDE2E4] flex items-start gap-3.5 shadow-sm">
                <div className="p-2.5 rounded-lg bg-[#F1F5F8] text-[#527187] border border-[#DDE2E4]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7B8388] font-medium">Telephone (Direct)</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-lg font-bold text-[#111315] hover:text-[#527187] transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <div className="text-[11px] text-[#7B8388] mt-0.5 font-medium">Direct phone connection</div>
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDE2E4] flex items-start gap-3.5 shadow-sm">
                <div className="p-2.5 rounded-lg bg-[#F1F5F8] text-[#527187] border border-[#DDE2E4]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7B8388] font-medium">Shop &amp; Office Address</div>
                  <div className="text-sm font-bold text-[#111315]">{COMPANY_INFO.address.street}</div>
                  <div className="text-xs text-[#7B8388]">
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDE2E4] flex items-start gap-3.5 shadow-sm">
                <div className="p-2.5 rounded-lg bg-[#F1F5F8] text-[#527187] border border-[#DDE2E4]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7B8388] font-medium">Operating Hours</div>
                  <div className="text-xs font-semibold text-[#111315]">{COMPANY_INFO.hours}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DDE2E4] text-xs text-[#7B8388]">
              <span className="font-bold text-[#527187]">Estimating Note:</span> Plan files (PDF drawings, architectural elevation specs, CAD packages) can be attached directly in the form for expedited bid takeoffs.
            </div>
          </div>

          {/* Form Area (Pure White Card with Light Steel Border) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-10 border border-[#DDE2E4] shadow-md relative">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#527187]/10 border border-[#527187]/30 flex items-center justify-center mx-auto text-[#527187]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111315]">
                    Quote Request Received
                  </h3>
                  <p className="text-sm text-[#7B8388] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#111315] font-semibold">{formData.name}</span>. An Empire Glass estimating specialist will review your project details ({formData.serviceNeeded}) and contact you shortly at <span className="text-[#111315] font-semibold">{formData.phone}</span>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="btn-steel inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                    >
                      <Phone className="w-4 h-4 text-white" />
                      <span>Call Now for Immediate Assistance</span>
                    </a>
                    
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          phone: '',
                          email: '',
                          serviceNeeded: 'Curtain Walls',
                          projectLocation: '',
                          projectDetails: '',
                          fileName: ''
                        });
                      }}
                      className="px-5 py-3 text-xs font-medium text-[#7B8388] hover:text-[#111315] transition-colors cursor-pointer"
                    >
                      Submit Another Project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[#DDE2E4]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#527187]">
                      Request a Project Quote
                    </span>
                    <span className="text-[11px] text-[#7B8388]">
                      * Required fields
                    </span>
                  </div>

                  {/* Project Sector Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#111315] mb-2">
                      Project Type *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setProjectType('commercial');
                          setFormData(prev => ({ ...prev, serviceNeeded: QUOTE_SERVICE_OPTIONS.commercial[0] }));
                        }}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold tracking-wide uppercase transition-all cursor-pointer border ${
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
                          setFormData(prev => ({ ...prev, serviceNeeded: QUOTE_SERVICE_OPTIONS.residential[0] }));
                        }}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold tracking-wide uppercase transition-all cursor-pointer border ${
                          projectType === 'residential'
                            ? 'btn-steel shadow-sm'
                            : 'bg-[#FFFFFF] text-[#111315] border-[#DDE2E4] hover:border-[#527187]'
                        }`}
                      >
                        Residential Glass
                      </button>
                    </div>
                  </div>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-[#111315] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full bg-[#FFFFFF] border rounded-lg px-3.5 py-2.5 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-[#DDE2E4]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-[#111315] mb-1">
                        Company Name (Optional)
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Builder"
                        className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3.5 py-2.5 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-[#111315] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="336-257-2728"
                        className={`w-full bg-[#FFFFFF] border rounded-lg px-3.5 py-2.5 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-[#DDE2E4]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-[#111315] mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full bg-[#FFFFFF] border rounded-lg px-3.5 py-2.5 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-[#DDE2E4]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service Needed and Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-medium text-[#111315] mb-1">
                        Service Needed *
                      </label>
                      <select
                        id="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#527187] transition-colors"
                      >
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-medium text-[#111315] mb-1">
                        Project Location (City / NC Zip) *
                      </label>
                      <input
                        id="location"
                        type="text"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        placeholder="Greensboro, NC 27409"
                        className={`w-full bg-[#FFFFFF] border rounded-lg px-3.5 py-2.5 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] transition-colors ${
                          errors.projectLocation ? 'border-rose-500' : 'border-[#DDE2E4]'
                        }`}
                      />
                      {errors.projectLocation && <p className="text-[11px] text-rose-500 mt-1">{errors.projectLocation}</p>}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-medium text-[#111315] mb-1">
                      Project Details / Approximate Dimensions
                    </label>
                    <textarea
                      id="details"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Describe openings, glass specs, estimated dimensions, or schedule requirements..."
                      className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3.5 py-2.5 text-xs text-[#111315] placeholder-[#7B8388] focus:outline-none focus:border-[#527187] transition-colors"
                    />
                  </div>

                  {/* File Upload Affordance */}
                  <div>
                    <label className="block text-xs font-medium text-[#111315] mb-1">
                      Attach Plans / Blueprints (Optional)
                    </label>
                    <label className="flex items-center justify-between p-3 rounded-lg bg-[#F1F5F8] border border-dashed border-[#DDE2E4] hover:border-[#527187] cursor-pointer transition-colors">
                      <div className="flex items-center gap-2 text-xs text-[#7B8388]">
                        <Paperclip className="w-4 h-4 text-[#527187]" />
                        <span>{formData.fileName ? formData.fileName : 'Upload PDF blueprints, drawings, or photos (up to 25MB)'}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#527187] uppercase px-2.5 py-1 bg-[#FFFFFF] rounded border border-[#DDE2E4] shadow-xs">
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

                  {/* Submit CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-steel w-full py-4 px-6 font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request My Quote</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#7B8388]">
                    Your project details remain confidential. Our team will contact you to confirm specifications before finalizing pricing.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
