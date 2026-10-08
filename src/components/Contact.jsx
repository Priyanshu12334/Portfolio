import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send } from 'lucide-react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setSubmissionStatus({ type: 'error', message: 'Please complete all fields before sending.' });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please use the email link above.',
      });
      return;
    }

    setIsSending(true);
    setSubmissionStatus(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          reply_to: email,
          message,
        },
        { publicKey },
      );
      form.reset();
      setSubmissionStatus({ type: 'success', message: 'Message sent successfully!' });
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error);
      setSubmissionStatus({
        type: 'error',
        message: 'Your message could not be sent. Please try again or use the email link above.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="section__header reveal">
            <span className="section__subtitle">Get In Touch</span>
            <h2 className="section__title">Contact Me</h2>
          </div>

          <div className="contact__card reveal">
            <h3 className="contact__heading">Let's Connect</h3>
            <p className="contact__subtext">
             I am open to full-time software development roles, internships, and project collaborations. Feel free to reach out via email, phone, or social profiles.
            </p>

            <div className="contact__grid">
              <a href="mailto:suyalpriyanshu2@gmail.com" className="contact__item-card">
                <div className="contact__icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact__item-info">
                  <span className="contact__label">Email</span>
                  <span className="contact__value email-value">suyalpriyanshu2@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918006084643" className="contact__item-card">
                <div className="contact__icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact__item-info">
                  <span className="contact__label">Phone</span>
                  <span className="contact__value">+91 8006084643</span>
                </div>
              </a>
            </div>

            <div className="contact__socials-row">
              <a
                href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} color="#0A66C2" />
              </a>
              <a
                href="https://github.com/Priyanshu12334"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <GitHubIcon size={22} color="#f0f6fc" />
              </a>
              <a
                href="https://www.instagram.com/priyanshu_suyal_?igsi=MW54MmNqYzhyeTlpOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <InstagramIcon size={22} />
              </a>
            </div>

            <div className="contact__form-intro">
              <h4 className="contact__form-title">Send Me a Message</h4>
              <p className="contact__form-subtitle">
                Have a message? Send it directly using the form below.
              </p>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-field contact__form-field--name">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>
              <div className="contact__form-field contact__form-field--email">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>
              <div className="contact__form-field contact__form-field--message">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={5000}
                  required
                />
              </div>
              <button className="btn btn--primary contact__submit" type="submit" disabled={isSending}>
                <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} aria-hidden="true" />
              </button>
              {submissionStatus && (
                <p
                  className={`contact__form-status contact__form-status--${submissionStatus.type}`}
                  role={submissionStatus.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                >
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
