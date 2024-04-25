import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false); // State variable to track submission status

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set submitting to true when the form is being submitted

        try {
            await emailjs.sendForm('service_rfm5lew', 'template_w4br9b8', form.current, {
                publicKey: 'soAc_X15QMMhzGSX1',

                // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                //     publicKey: 'YOUR_PUBLIC_KEY',

            });
            console.log('SUCCESS!');
            form.current.reset();
            toast.success('Message sent successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log('FAILED...', error.text);
            toast.error('Failed to send message. Please try again.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsSubmitting(false); // Set submitting to false after request is completed
        }
    };

    return (
        <>
            {/* contact form */}
            <div className='bg-gray-900' id='contact'>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">If you have any query? Let me know.</p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input type="text" name='name' id="name" className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Enter your name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                            <input type="email" name='email' id="email" className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                            <input type="text" name='subject' id="subject" className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let me know how I can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                            <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment or query..."></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting} // Disable the button when submitting
                            className={`py-3 bg-white px-5 font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} // Apply opacity and cursor styles when disabled
                        >
                            {isSubmitting ? 'Sending...' : 'Send message'}
                        </button>
                    </form>
                </div>
            </div>
            {/* contact form */}
        </>
    );
}

export default Contact;
