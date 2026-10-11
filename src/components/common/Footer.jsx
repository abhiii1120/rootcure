import { useState } from 'react';
import { ArrowRight, Check, Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="footer-contact" className="bg-[#050d1a] text-neutral-300 pt-16 sm:pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-neutral-800/80 items-start">
          {/* Brand Col */}
          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Root Cure Dental Logo"
                className="w-10 h-10 object-contain rounded-full bg-white p-0.5 shadow-sm"
              />
              <div>
                <span className="font-bold text-xl tracking-tight text-white block">
                  Root Cure Dental
                </span>
                <span className="text-xs text-[#00a8e8] font-medium tracking-wide">
                  Excellence in Gentle Clinical Artistry
                </span>
              </div>
            </div>
            
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
              Redefining the dental experience with state-of-the-art technology and a patient-first approach to oral health. Every treatment is designed with biological harmony and absolute comfort in mind.
            </p>

            {/* Social Icons & Appointment CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Book Appointment</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @rootcuredentalclinic"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#00a8e8] hover:bg-neutral-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#00a8e8] hover:bg-neutral-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#00a8e8]">
              APPOINTMENTS & CLINIC INFO
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00a8e8] mt-0.5 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00a8e8] shrink-0" />
                <div className="flex items-center gap-2">
                  <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition-colors">
                    {CLINIC_INFO.phone}
                  </a>
                  <span className="text-neutral-500">•</span>
                  <a href={`tel:${CLINIC_INFO.phoneAlt}`} className="hover:text-white transition-colors">
                    {CLINIC_INFO.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00a8e8] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>

            {/* Newsletter input */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for clinical updates..."
                  className="w-full px-4 py-2.5 pr-10 text-xs rounded-full bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00a8e8]"
                />
                <button
                  type="submit"
                  aria-label="Submit Newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#00a8e8] text-white rounded-full flex items-center justify-center hover:bg-[#0095d1] transition-colors"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-[#00a8e8] mt-1.5 pl-2 font-medium">
                  Thank you for subscribing to Root Cure Journal.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Root Cure Dental. Excellence in Clinical Artistry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-neutral-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
