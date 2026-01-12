'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ImSpinner2 } from 'react-icons/im';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
});

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const contentType = response.headers.get('content-type');
            let data;

            if (contentType && contentType.indexOf('application/json') !== -1) {
                data = await response.json();
            } else {
                // If response is not JSON, it's likely a server error page (HTML)
                const text = await response.text();
                console.error('Non-JSON response:', text);
                throw new Error('Server error: received non-JSON response');
            }

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[25px]">
            {status === 'success' && (
                <div className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                    {errorMessage || 'Failed to send message. Please try again later.'}
                </div>
            )}

            <div>
                <label
                    htmlFor="name"
                    className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                    )}
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                        poppins.className,
                        'w-full h-[46px]',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]'
                    )}
                    placeholder="Type your full name..."
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                    )}
                >
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                        poppins.className,
                        'w-full h-[46px]',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]'
                    )}
                    placeholder="Type your email address..."
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="phone"
                    className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                    )}
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={cn(
                        poppins.className,
                        'w-full h-[46px]',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]'
                    )}
                    placeholder="Type your phone number..."
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className={cn(
                        poppins.className,
                        'block text-[18px] md:text-[20px] font-[500] text-[#2F2F2F]',
                        'leading-[100%] tracking-[0%] mb-[10px]'
                    )}
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                        poppins.className,
                        'w-full',
                        'px-[15px] py-[8px]',
                        'rounded-[20px]',
                        'border-[1.5px] border-[#44AEC5]',
                        'bg-white',
                        'text-[14px]',
                        'placeholder:text-[#2F2F2F]/50',
                        'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]',
                        'resize-none'
                    )}
                    placeholder="Type your message..."
                    required
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={cn(
                    poppins.className,
                    'w-full md:w-[192px] h-[56px]',
                    'px-[32px] py-[16px]',
                    'bg-[#44AEC5] text-white',
                    'rounded-[100px]',
                    'text-[16px] font-[600]',
                    'leading-[24px] tracking-[0%]',
                    'transition-all duration-300',
                    'hover:bg-[#3797ac]',
                    'focus:outline-none focus:ring-2 focus:ring-[#44AEC5]',
                    'mx-auto md:mx-0',
                    'flex items-center justify-center',
                    'disabled:opacity-70 disabled:cursor-not-allowed'
                )}
            >
                {status === 'loading' ? (
                    <ImSpinner2 className="animate-spin text-xl" />
                ) : (
                    'Submit'
                )}
            </button>
        </form>
    );
}
