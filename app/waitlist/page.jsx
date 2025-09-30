'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatars from "@/public/avatars.svg";

const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Send email notification to waitlist@nuvia.me
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'waitlist@nuvia.me',
          subject: 'New Waitlist Signup',
          text: `New waitlist signup:\n\nName: ${formData.name}\nEmail: ${formData.email}`
        }),
      });

      if (!emailResponse.ok) {
        console.log("email res",emailResponse)
        throw new Error('Failed to send email notification');
      }

      // Save to database (optional - won't block success if it fails)
      try {
        await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch (dbError) {
        console.error('Database save failed:', dbError);
        // Continue anyway - email was sent successfully
      }

      // Show success message
      setSubmitSuccess(true);
      setFormData({ name: '', email: '' });

    } catch (error) {
      console.error('Submission error:', error);
      setErrors(prev => ({
        ...prev,
        email: 'Something went wrong. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSuccessMessage = () => (
    <div className="text-center py-8">
      <span className="block font-bold text-[90px] mb-4">🎉</span>
      <h3 className="text-white mb-10">You’re officially on the list!</h3>
     <p className='text-white/60 text-sm mb-6'>
      Thanks for joining the NÜVIA waitlist — your gateway to effortless, AI-powered travel is now reserved.
We’ll reach out soon with early access, insider updates, and exclusive launch perks. Until then, start dreaming — we’ll handle the planning.
     </p>
    </div>
  );

  const renderFormInput = (id, label, placeholder, type = 'text') => (
    <div>
      <label htmlFor={id} className="block text-white text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={formData[id]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-[#171D25] border ${
          errors[id] ? 'border-red-500' : 'border-transparent'
        } rounded-lg text-white/40 text-xs placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors`}
      />
      {errors[id] && (
        <p className="text-red-400 text-sm mt-1">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center backdrop-blur-md justify-center bg-[url('/sky.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full md:max-w-lg bg-[#0E141C] backdrop-blur-md md:rounded-3xl px-6 md:px-8 py-6 relative">
        {/* Close button for mobile */}
        {!submitSuccess && <div>
          <button
            onClick={() => window.history.back()}
            className="absolute top-6 left-6 text-white hover:text-gray-300 transition-colors md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold text-white mb-4 text-center md:text-left">NÜVIA</h1>
          
          <div className='bg-[#262B32] px-2 mb-4 py-1 rounded-md w-fit'>
            <p className="text-white text-xs font-semibold">Launching Dec. 2025</p>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Be the First to Experience the Future of Travel
          </h2>
          
          <p className="text-white/60 text-sm mb-6">
            Join the NÜVIA waitlist — and be first to experience the AI-powered app that plans your perfect trip in seconds.
          </p>
        </div>}

        {submitSuccess ? renderSuccessMessage() : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {renderFormInput('name', 'Name', 'Enter your name')}
            {renderFormInput('email', 'Email', 'Enter email', 'email')}

            <div className="flex items-center gap-2">
              <Image height={50} src={avatars} width={50} alt="avatars" />
              <span className="text-white/60 text-xs">2k+ explorers already joined</span>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-white text-black rounded-full font-medium text-base hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Joining...' : 'Join Now'}
            </button>

            <p className="text-white/80 text-xs text-center">
              By clicking Join Now, you accept our{' '}
              <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
                Terms
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistPage;