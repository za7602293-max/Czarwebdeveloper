import React, { useState, useEffect } from 'react';
import { Calendar, Car, Phone, User, MessageSquare, Clock, CheckCircle, Send, Sparkles } from 'lucide-react';
import { STUDIO_INFO, SERVICES, PACKAGES } from '../data/detailingData.ts';

interface BookingFormProps {
  selectedServicePreset?: string;
  onClearPreset?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedServicePreset,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carModel, setCarModel] = useState('');
  const [service, setService] = useState('Ceramic Coating');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM - Morning Dropoff');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsappLink, setGeneratedWhatsappLink] = useState('');

  // Update selected service if parent requested preset
  useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  // Set default min date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMsg('Please provide a valid contact phone number.');
      return;
    }
    if (!carModel.trim()) {
      setErrorMsg('Please enter your car make and model (e.g. 2023 BMW M3).');
      return;
    }
    if (!preferredDate) {
      setErrorMsg('Please choose your preferred appointment date.');
      return;
    }

    // Format WhatsApp message
    const formattedMessage = `*Apex Gloss Detailing Appointment Request*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${name.trim()}\n` +
      `📞 *Phone:* ${phone.trim()}\n` +
      `🏎️ *Vehicle:* ${carModel.trim()}\n` +
      `✨ *Service Requested:* ${service}\n` +
      `📅 *Preferred Date:* ${preferredDate}\n` +
      `⏰ *Preferred Time:* ${preferredTime}\n` +
      (notes.trim() ? `📝 *Notes/Condition:* ${notes.trim()}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Sent via apexglossstudio.com`;

    const encodedText = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodedText}`;

    setGeneratedWhatsappLink(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in a new window/tab safely
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setCarModel('');
    setPreferredDate('');
    setNotes('');
  };

  return (
    <section id="booking" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0F0F12] relative border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            VIP Studio Reservation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Reserve Your Detailing Slot
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Fill in your vehicle details below. Submitting will instantly connect you with our studio master detailer via WhatsApp with all details pre-filled.
          </p>
        </div>

        {/* Card Frame */}
        <div className="bg-[#141418] border border-neutral-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gold corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />

          {isSubmitted ? (
            /* Submission Success State */
            <div className="py-12 px-4 text-center max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1A1A22] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Booking Request Prepared!
              </h3>
              <p className="mt-3 text-sm text-neutral-300 font-light leading-relaxed">
                We've formatted your booking details for <span className="text-[#D4AF37] font-medium">{carModel}</span> for{' '}
                <span className="text-white font-medium">{service}</span>.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#0B0B0C] border border-neutral-800 text-left text-xs font-mono text-neutral-300 space-y-1.5">
                <div><span className="text-neutral-500">Name:</span> {name}</div>
                <div><span className="text-neutral-500">Phone:</span> {phone}</div>
                <div><span className="text-neutral-500">Service:</span> {service}</div>
                <div><span className="text-neutral-500">Date:</span> {preferredDate} ({preferredTime})</div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generatedWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#F3C954] text-black shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp Again</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  Book Another Vehicle
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/50 text-red-200 text-xs sm:text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jordan Miller"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0B0B0C] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* 2. Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Phone / WhatsApp Number <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (310) 555-0192"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0B0B0C] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* 3. Car Model & Year */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Car Model & Year <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      placeholder="e.g. 2024 Porsche 911 GT3 or Tesla Model S"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0B0B0C] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* 4. Service / Package Dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Desired Service or Package <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 bg-[#0B0B0C] border border-neutral-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none cursor-pointer"
                    >
                      <optgroup label="Specialized Detailing Services">
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Full Studio Packages">
                        {PACKAGES.map((p) => (
                          <option key={p.id} value={`${p.name} (${p.price})`}>
                            {p.name} — {p.price}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* 5. Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Date <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#0B0B0C] border border-neutral-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                {/* 6. Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 bg-[#0B0B0C] border border-neutral-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none cursor-pointer"
                    >
                      <option value="09:00 AM - Morning Dropoff">09:00 AM – Morning Dropoff</option>
                      <option value="01:00 PM - Midday Dropoff">01:00 PM – Midday Dropoff</option>
                      <option value="04:00 PM - Afternoon Inspection">04:00 PM – Afternoon Inspection</option>
                      <option value="Valet Concierge Pickup">Request Doorstep Concierge Pickup</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 7. Special Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Special Notes or Paint Condition Details (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Needs heavy swirl removal on black hood, previous water spot damage, or pet hair in rear seats..."
                    className="w-full pl-10 pr-4 py-3 bg-[#0B0B0C] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Instant Studio WhatsApp Confirmation</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] via-[#F3C954] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm & Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
