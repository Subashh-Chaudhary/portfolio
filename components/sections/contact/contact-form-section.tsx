'use client'

import { motion } from 'framer-motion'
import { Send, User, Mail as MailIcon, MessageSquare, Loader2 } from 'lucide-react'
import { useState } from 'react'

export function ContactFormSection() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
            // Get your form ID from: https://formspree.io/
            const response = await fetch('https://formspree.io/f/mwpgqvab', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormState({ name: '', email: '', message: '' })
                setTimeout(() => setSubmitStatus('idle'), 5000)
            } else {
                setSubmitStatus('error')
                setTimeout(() => setSubmitStatus('idle'), 5000)
            }
        } catch (error) {
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-lime-500/10" />
            </div>

            {/* Background Grid & Data Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
            </div>

            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-10 md:mb-12"
                >
                    {/* Title Tag */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <motion.div
                            className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-emerald-500 to-green-500"
                            animate={{ scaleX: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-mono text-emerald-400 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-2">
                            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                            SEND_MESSAGE
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4 sm:mb-5">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-gray-500">
                            DROP A
                        </span>
                        <br />
                        <span className="relative inline-block hover:text-emerald-500 transition-colors duration-300">
                            MESSAGE
                            <motion.span
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </span>
                    </h2>

                    <div className="relative pl-4">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-green-500 to-lime-500 rounded-full" />
                        <p className="text-gray-300 max-w-2xl font-light text-sm sm:text-base md:text-lg">
                            Fill out the form below and I'll get back to you as soon as possible.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden">
                        {/* Gradient Border on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/20 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Animated Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <form onSubmit={handleSubmit} className="relative z-10 p-6 sm:p-8 md:p-10 space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase mb-3">
                                    <User className="w-4 h-4" />
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all font-mono text-sm"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase mb-3">
                                    <MailIcon className="w-4 h-4" />
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all font-mono text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase mb-3">
                                    <MessageSquare className="w-4 h-4" />
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none font-mono text-sm"
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium text-sm transition-all shadow-lg ${submitStatus === 'success'
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/40'
                                    : submitStatus === 'error'
                                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-red-500/40'
                                        : 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 shadow-emerald-500/20'
                                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Message Sent!</span>
                                    </>
                                ) : submitStatus === 'error' ? (
                                    <>
                                        <span>Failed to Send. Try Again</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                                >
                                    <p className="text-green-400 text-sm font-mono text-center">
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </p>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                                >
                                    <p className="text-red-400 text-sm font-mono text-center">
                                        ✗ Failed to send message. Please try again or email me directly.
                                    </p>
                                </motion.div>
                            )}
                        </form>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
                        </div>
                    </div>
                </motion.div>

                {/* Terminal Command Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-white/10"
                >
                    <div className="font-mono text-[10px] sm:text-xs text-gray-600 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-green-500">$</span>
                        <span className="text-emerald-400">./submit_form.sh</span>
                        <span className="hidden sm:inline">--validate</span>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <span className="hidden sm:inline text-green-400">send</span>
                        <span className="hidden sm:inline">--to=inbox</span>
                        <motion.span
                            className="text-emerald-400"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            _
                        </motion.span>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
            `}</style>
        </section>
    )
}
