import Image from 'next/image'
import Script from 'next/script'

import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What can I expect in a first session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The first session is an opportunity for us to get to know each other. We'll discuss what brings you to therapy, your goals, and any questions you may have. It's a collaborative process where we establish a foundation for our work together.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long is a typical session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Individual therapy sessions are typically 50 minutes. The frequency of sessions depends on your needs and goals, with most clients starting with weekly sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer online therapy sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, I offer secure online therapy sessions via video call for clients who prefer the convenience of remote sessions or are unable to attend in person. Online therapy has been shown to be just as effective as face-to-face sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your rates and do you work with medical aid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Please contact me for current rates. I provide detailed invoices that can be submitted to your medical aid for reimbursement. Many medical aids cover psychology sessions, though coverage varies by plan.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={
          <span className="text-sm font-medium text-mist-600 dark:text-mist-400">
            Michelle Smit - Counselling Psychologist
          </span>
        }
        headline="Feel seen, heard and valued."
        subheadline={
          <p className="italic">
            "Connection is why we're here; it is what gives purpose and meaning to our lives." — Brené Brown
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Book a Consultation
            </ButtonLink>

            <PlainButtonLink href="/about" size="lg">
              Learn More <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <Screenshot className="rounded-lg" wallpaper="sunset" placement="bottom">
            <Image
              src="/img/hero.png"
              alt="Counselling psychologist Michelle Smit"
              width={1024}
              height={1024}
              className="object-cover"
            />
          </Screenshot>
        }
      />
      {/* Features - Therapy Services */}
      <FeaturesTwoColumnWithDemos
        id="services"
        eyebrow="Therapy Services"
        headline="Compassionate support for life's challenges."
        subheadline={
          <p>
            I offer evidence-based therapy tailored to your unique needs, helping you navigate difficulties and build
            resilience in a safe, supportive environment.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="green" placement="bottom-right">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/substance-abuse.png"
                      alt="Substance abuse therapy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Substance Abuse"
              subheadline={
                <p>
                  Address substance use and dual diagnosis concerns with compassionate, non-judgmental support. Build
                  healthier coping strategies and work towards recovery.
                </p>
              }
              cta={
                <Link href="/substance-abuse">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <div className="relative aspect-[1800/1250]">
                    <Image src="/img/services/depression.avif" alt="Depression therapy" fill className="object-cover" />
                  </div>
                </Screenshot>
              }
              headline="Depression"
              subheadline={
                <p>
                  Work through persistent low mood, loss of interest, and feelings of hopelessness with evidence-based
                  approaches including CBT and behavioural activation.
                </p>
              }
              cta={
                <Link href="/depression">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="protea" placement="bottom-right">
                  <div className="relative aspect-[1800/1250]">
                    <Image src="/img/services/anxiety.png" alt="Anxiety therapy" fill className="object-cover" />
                  </div>
                </Screenshot>
              }
              headline="Anxiety"
              subheadline={
                <p>
                  Manage feelings of worry, panic, and overwhelm with evidence-based approaches including CBT and
                  mindfulness-based interventions tailored to your needs.
                </p>
              }
              cta={
                <Link href="/anxiety">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="sunset" placement="bottom-left">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/relationships.png"
                      alt="Relationships therapy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Relationships"
              subheadline={
                <p>
                  Navigate relationship challenges, improve communication, and build healthier connections with
                  partners, family members, and others in your life.
                </p>
              }
              cta={
                <Link href="/relationships">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
      {/* Stats - Credentials */}
      <StatsWithGraph
        id="credentials"
        eyebrow="Credentials & Experience"
        headline="Qualified, registered, and committed to your wellbeing."
        subheadline={
          <p>
            With extensive training and ongoing professional development, I bring both expertise and genuine care to
            every therapeutic relationship. I am committed to providing ethical, evidence-based care in both English and
            Afrikaans.
          </p>
        }
      >
        <Stat
          stat="HPCSA"
          text="Registered counselling psychologist with the Health Professions Council of South Africa."
        />
        <Stat stat="Bilingual" text="Therapy available in both English and Afrikaans to best suit your needs." />
      </StatsWithGraph>
      {/* Testimonials */}
      <TestimonialThreeColumnGrid
        id="testimonials"
        headline="Client experiences"
        subheadline={<p>Hear from those who have taken the brave step of seeking support.</p>}
      >
        <Testimonial
          quote={
            <p>
              Michelle created a safe space where I felt comfortable opening up for the first time. Her compassionate
              approach helped me understand myself better.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Anonymous"
          byline="Anxiety client"
        />
        <Testimonial
          quote={
            <p>
              The online sessions were just as effective as in-person therapy. Michelle made the virtual space feel
              personal and connected.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Anonymous"
          byline="Online therapy client"
        />
        <Testimonial
          quote={
            <p>
              I appreciated being able to speak in Afrikaans during our sessions. It made expressing difficult emotions
              so much easier.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Anonymous"
          byline="Stellenbosch client"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Frequently Asked Questions">
        <Faq
          id="faq-1"
          question="What can I expect in a first session?"
          answer="The first session is an opportunity for us to get to know each other. We'll discuss what brings you to therapy, your goals, and any questions you may have. It's a collaborative process where we establish a foundation for our work together."
        />
        <Faq
          id="faq-2"
          question="How long is a typical session?"
          answer="Individual therapy sessions are typically 50 minutes. The frequency of sessions depends on your needs and goals, with most clients starting with weekly sessions."
        />
        <Faq
          id="faq-3"
          question="Do you offer online therapy sessions?"
          answer="Yes, I offer secure online therapy sessions via video call for clients who prefer the convenience of remote sessions or are unable to attend in person. Online therapy has been shown to be just as effective as face-to-face sessions."
        />
        <Faq
          id="faq-4"
          question="What are your rates and do you work with medical aid?"
          answer="Please contact me for current rates. I provide detailed invoices that can be submitted to your medical aid for reimbursement. Many medical aids cover psychology sessions, though coverage varies by plan."
        />
      </FAQsTwoColumnAccordion>
      {/* Locations */}
      <PricingMultiTier
        id="locations"
        headline="Practice locations to suit your needs."
        plans={
          <>
            <Plan
              name="Paarl"
              price="Bloemendal"
              period=" Clinic"
              subheadline={<p>Face-to-face sessions in a peaceful setting</p>}
              features={[
                'Convenient Paarl location',
                'Ample parking available',
                'Comfortable, private rooms',
                'Accessible facilities',
              ]}
              cta={
                <ButtonLink href="/contact#paarl" size="lg">
                  Get Directions
                </ButtonLink>
              }
            />
            <Plan
              name="Online"
              price="Secure"
              period=" Video"
              subheadline={<p>Therapy from the comfort of your own space</p>}
              features={['Secure video platform', 'Flexible scheduling', 'No travel required', 'Same quality care']}
              cta={
                <SoftButtonLink href="/contact#online" size="lg">
                  Book Online Session
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Schedule your free 15-minute consultation."
        subheadline={
          <p>
            Taking the first step is often the hardest. Let's have a brief chat to see if we're a good fit for working
            together. Contact me at therapy@michellesmit.com
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Schedule Now
            </ButtonLink>

            <PlainButtonLink href="mailto:therapy@michellesmit.com" size="lg">
              Email Me <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
