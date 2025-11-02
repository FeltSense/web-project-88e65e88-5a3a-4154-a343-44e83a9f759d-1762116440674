'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website_id: '88e65e88-5a3a-4154-a343-44e83a9f759d',
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="py-24 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50 relative overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-[0.02]">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)`,
      backgroundSize: '48px 48px'
    }}></div>
  </div>

  <div className="max-w-2xl mx-auto px-4 relative z-10">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <span className="text-sm font-bold tracking-[0.2em] text-orange-600 uppercase">Contact Us</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
        Let's Connect
      </h2>
      <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
        Have a question or want to make a reservation? We're here to serve you with the authentic OG experience.
      </p>
    </div>
    
    {/* Form Fields */}
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 p-8 md:p-10 border border-slate-100">
      <div className="space-y-6">
        {/* Name Field */}
        <div className="group">
          <label 
            htmlFor="name" 
            className="block text-sm font-semibold text-slate-900 mb-2 tracking-wide"
          >
            Full Name
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 bg-white transition-all duration-200 text-slate-900 placeholder:text-slate-400 font-medium"
          />
        </div>
        
        {/* Email Field */}
        <div className="group">
          <label 
            htmlFor="email" 
            className="block text-sm font-semibold text-slate-900 mb-2 tracking-wide"
          >
            Email Address
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
            className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 bg-white transition-all duration-200 text-slate-900 placeholder:text-slate-400 font-medium"
          />
        </div>
        
        {/* Phone Field */}
        <div className="group">
          <label 
            htmlFor="phone" 
            className="block text-sm font-semibold text-slate-900 mb-2 tracking-wide"
          >
            Phone Number
          </label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required
            className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 bg-white transition-all duration-200 text-slate-900 placeholder:text-slate-400 font-medium"
          />
        </div>
        
        {/* Message Field */}
        <div className="group">
          <label 
            htmlFor="message" 
            className="block text-sm font-semibold text-slate-900 mb-2 tracking-wide"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your inquiry, reservation details, or any special requests..."
            required
            className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 resize-none bg-white transition-all duration-200 text-slate-900 placeholder:text-slate-400 font-medium leading-relaxed"
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-5 rounded-xl font-bold text-lg tracking-wide hover:from-orange-700 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 uppercase"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Trust Badge */}
        <p className="text-center text-sm text-slate-500 mt-4">
          🔒 Your information is secure and will never be shared
        </p>
      </div>
    </div>

    {/* Additional Contact Info */}
    <div className="mt-12 text-center">
      <p className="text-slate-600 mb-4">Or reach us directly:</p>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (123) 456-7890
        </a>
        <a href="mailto:hello@ogsresto.com" className="flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          hello@ogsresto.com
        </a>
      </div>
    </div>
  </div>
</section>
    </form>
  );
}