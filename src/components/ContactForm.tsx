'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    veteranName: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check content type to ensure we got JSON back
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server error. Please try again later.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', veteranName: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#4a5320] text-[#f5f5dc] p-8 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-[#d4a017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Message Sent!
        </h3>
        <p className="text-[#e8e8d0] mb-6">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-[#d4a017] hover:bg-[#e8b923] text-[#1a1a1a] px-6 py-3 font-semibold transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
          Veteran&apos;s Name (if applicable)
        </label>
        <input
          type="text"
          value={formData.veteranName}
          onChange={(e) => setFormData({ ...formData, veteranName: e.target.value })}
          className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
          placeholder="Name of the 379th veteran"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
          Your Message <span className="text-red-600">*</span>
        </label>
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-[#ccc] focus:border-[#1e3a5f] focus:outline-none"
          placeholder="Tell us about your connection to the 379th, or what you'd like to share..."
        ></textarea>
      </div>

      {status === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-[#1e3a5f] text-[#f5f5dc] px-8 py-3 font-semibold hover:bg-[#2c5282] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
