import { Check, Copy, FileText, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PROFILE } from '../data/portfolioData';
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../utils/portfolioFilters';

interface ContactSectionProps {
  onOpenResume: () => void;
}

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedRecord, setSubmittedRecord] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(values);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedRecord({ ...values });
    setValues(INITIAL_VALUES);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              05. Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
            >
              Let&apos;s discuss software engineering, AI systems, or product roles.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Open to Software Development Engineer, Full-Stack, Applied AI, and Data Engineering
              opportunities across India and remote teams.
            </p>

            <div className="mt-8 space-y-4 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-3 font-medium text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
                >
                  <Mail className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                  <span className="font-mono text-xs sm:text-sm">{PROFILE.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-950 whitespace-nowrap shrink-0 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-50"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <Phone className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                <span className="font-mono text-xs tabular-nums sm:text-sm">{PROFILE.phone}</span>
              </a>

              <p className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </p>
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                View &amp; Export Single-Page ATS Resume
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-[#111114]">
              {submittedRecord ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-6"
                >
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Message prepared successfully
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    Thank you, {submittedRecord.name}.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Your inquiry regarding &ldquo;{submittedRecord.subject}&rdquo; has been
                    recorded locally. You can also launch your email client directly with the
                    details prefilled below.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                        submittedRecord.subject,
                      )}&body=${encodeURIComponent(
                        `From: ${submittedRecord.name} (${submittedRecord.email})\n\n${submittedRecord.message}`,
                      )}`}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Open in Email Client
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedRecord(null)}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="Alex Morgan"
                        className="mt-1.5 h-11 w-full rounded-lg border border-zinc-300 bg-[#FAFAFA] px-3.5 text-sm text-zinc-950 placeholder:text-zinc-400 transition-colors focus:border-blue-600 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-[#09090B] dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-blue-400"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder="alex@company.com"
                        className="mt-1.5 h-11 w-full rounded-lg border border-zinc-300 bg-[#FAFAFA] px-3.5 text-sm text-zinc-950 placeholder:text-zinc-400 transition-colors focus:border-blue-600 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-[#09090B] dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-blue-400"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, subject: e.target.value }));
                        if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                      }}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      placeholder="Full-Stack SDE Opportunity / Collaboration"
                      className="mt-1.5 h-11 w-full rounded-lg border border-zinc-300 bg-[#FAFAFA] px-3.5 text-sm text-zinc-950 placeholder:text-zinc-400 transition-colors focus:border-blue-600 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-[#09090B] dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-blue-400"
                    />
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Share details about the team, role, or engineering challenge..."
                      className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-[#FAFAFA] p-3.5 text-sm text-zinc-950 placeholder:text-zinc-400 transition-colors focus:border-blue-600 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-[#09090B] dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-blue-400"
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-blue-400"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
