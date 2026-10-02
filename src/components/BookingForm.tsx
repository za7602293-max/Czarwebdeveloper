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

  useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

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
      setErrorMsg('Please enter your car make and model (e.g. 2024 Porsche 911 GT3).');
      return;
    }
    if (!preferredDate) {
      setErrorMsg('Please choose your preferred appointment date.');
      return;
    }

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
    <section id="booking" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090A0D] relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#E5B54F] font-semibold mb-2">
            Studio Reservation
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
            Schedule Surface Consultation
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            Reserve your dedicated inspection bay slot. Our concierge will confirm vehicle logistics and preparation instructions.
          </p>
        </div>

        {/* Card Frame */}
        <div className="bg-[#101114] border border-white/[0.08] rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-12 px-4 text-center max-w-lg mx-auto">
              <div className="w-14 h-14 rounded-full bg-[#16181E] border border-[#E5B54F] text-[#E5B54F] flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(229,181,79,0.3)]">
                <CheckCircle className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white">
                Consultation Request Prepared
              </h3>
              <p className="mt-3 text-sm text-neutral-300 font-light leading-relaxed">
                We've compiled your technical docket for <span className="text-[#E5B54F] font-medium">{carModel}</span> for{' '}
                <span className="text-white font-medium">{service}</span>.
              </p>

              <div className="mt-6 p-4 rounded-sm bg-[#070708] border border-white/[0.08] text-left text-xs font-mono-num text-neutral-300 space-y-1.5">
                <div><span className="text-neutral-500">Client:</span> {name}</div>
                <div><span className="text-neutral-500">Phone:</span> {phone}</div>
                <div><span className="text-neutral-500">Service:</span> {service}</div>
                <div><span className="text-neutral-500">Requested:</span> {preferredDate} ({preferredTime})</div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generatedWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-sm font-semibold text-xs uppercase tracking-wider bg-[#E5B54F] hover:bg-[#F6D686] text-black shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch WhatsApp Direct</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-sm text-xs uppercase tracking-wider text-neutral-300 hover:text-white bg-[#16181E] hover:bg-[#20222A] transition-colors border border-white/[0.08]"
                >
                  New Vehicle Booking
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-sm bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                    Client Full Name <span className="text-[#E5B54F]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sterling Hayes"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#070708] border border-white/[0.08] rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5B54F] transition-all"
                    />
                  </div>
                </div>

                {/* 2. Phone */}
                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                    Phone / WhatsApp Number <span className="text-[#E5B54F]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (310) 555-0192"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#070708] border border-white/[0.08] rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5B54F] transition-all"
                    />
                  </div>
                </div>

                {/* 3. Car Model & Year */}
                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                    Vehicle Model & Year <span className="text-[#E5B54F]">*</span>
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      placeholder="e.g. 2024 Porsche 911 GT3 RS"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#070708] border border-white/[0.08] rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5B54F] transition-all"
                    />
                  </div>
                </div>

                {/* 4. Service / Package Dropdown */}
                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                    Preservation Program <span className="text-[#E5B54F]">*</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 bg-[#070708] border border-white/[0.08] rounded-sm text-sm text-white focus:outline-none focus:border-[#E5B54F] transition-all appearance-none cursor-pointer"
                    >
                      <optgroup label="Specialized Capabilities">
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Comprehensive Atelier Packages">
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
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Inspection Date <span className="text-[#E5B54F]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#070708] border border-white/[0.08] rounded-sm text-sm text-white focus:outline-none focus:border-[#E5B54F] transition-all"
                    />
                  </div>
                </div>

                {/* 6. Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                    Appointment Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 bg-[#070708] border border-white/[0.08] rounded-sm text-sm text-white focus:outline-none focus:border-[#E5B54F] transition-all appearance-none cursor-pointer"
                    >
                      <option value="09:00 AM - Morning Dropoff">09:00 AM – Morning Dropoff</option>
                      <option value="01:00 PM - Midday Dropoff">01:00 PM – Midday Dropoff</option>
                      <option value="04:00 PM - Afternoon Inspection">04:00 PM – Afternoon Inspection</option>
                      <option value="Enclosed Valet Collection">Request Enclosed Valet Transport</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 7. Special Notes */}
              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-neutral-300 mb-2">
                  Surface History & Areas of Concern (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Previous PPF removal residue, track day rubber marring on quarter panels, delicate matte carbon fiber diffuser..."
                    className="w-full pl-10 pr-4 py-3 bg-[#070708] border border-white/[0.08] rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5B54F] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 font-mono-num flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Immediate Concierge Response via WhatsApp</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-semibold text-xs tracking-wider uppercase bg-[#E5B54F] hover:bg-[#F6D686] text-black shadow-[0_0_20px_rgba(229,181,79,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Studio Docket</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
