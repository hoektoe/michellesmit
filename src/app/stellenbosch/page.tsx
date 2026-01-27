import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Psychologist Near Stellenbosch',
  description:
    'Counselling psychologist serving Stellenbosch, Franschhoek & surrounds. Anxiety, depression, couples therapy & addiction counselling. Online and in-person sessions in nearby Paarl.',
  keywords: [
    'psychologist Stellenbosch',
    'therapist Stellenbosch',
    'couples therapy Stellenbosch',
    'anxiety psychologist Stellenbosch',
    'depression therapy Stellenbosch',
    'counselling Stellenbosch',
    'sielkundige Stellenbosch',
    'marriage counselling Stellenbosch',
  ],
  alternates: {
    canonical: 'https://michellesmit.com/stellenbosch',
  },
  openGraph: {
    title: 'Psychologist Near Stellenbosch | Michelle Smit',
    description:
      'HPCSA registered psychologist serving Stellenbosch area. Anxiety, depression, relationships & addiction therapy. Online sessions available.',
    images: ['/img/logo.png'],
  },
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        color="sunset"
        headline="Therapy for Stellenbosch & Surrounds"
        subheadline={
          <p>
            Looking for a psychologist near Stellenbosch? I offer therapy services from my practice in nearby Paarl,
            just 15 minutes away, as well as secure online sessions from the comfort of your home.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/hero.jpeg"
              alt="Therapy services for Stellenbosch"
              width={1200}
              height={800}
              className="object-cover bg-white/75"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="Serving the Stellenbosch Area">
        <p>
          While my practice is based at Bloemendal Clinic in Paarl, I regularly work with clients from Stellenbosch,
          Franschhoek, Somerset West, and the broader Cape Winelands region. The drive from Stellenbosch to Paarl takes
          approximately 15-20 minutes via the R44.
        </p>

        <p>
          For those who prefer not to travel, I offer secure online therapy sessions that are just as effective as
          in-person consultations. Many of my Stellenbosch clients choose this convenient option.
        </p>

        <h2>Services Available</h2>

        <p>I provide evidence-based therapy for a range of concerns commonly faced by individuals and couples:</p>

        <ul>
          <li>
            <strong>Anxiety & Stress</strong> — Including generalised anxiety, panic attacks, and work-related stress
          </li>
          <li>
            <strong>Depression</strong> — Evidence-based treatment using CBT and other proven approaches
          </li>
          <li>
            <strong>Couples & Relationship Therapy</strong> — Communication difficulties, trust issues, and life
            transitions
          </li>
          <li>
            <strong>Substance Abuse & Addiction</strong> — Specialist experience from working in inpatient treatment
            facilities
          </li>
        </ul>

        <h2>Why Choose Me?</h2>

        <ul>
          <li>HPCSA registered counselling psychologist</li>
          <li>Bilingual therapy in English and Afrikaans</li>
          <li>Specialist training in addiction and dual diagnosis</li>
          <li>Flexible scheduling with online options</li>
          <li>Medical aid claims assistance</li>
        </ul>

        <h2>Convenient Access</h2>

        <p>
          <strong>In-Person:</strong> Bloemendal Clinic is located on the R45 between Paarl and Franschhoek, with ample
          free parking and a peaceful, private setting.
        </p>

        <p>
          <strong>Online:</strong> Secure video sessions allow you to access therapy from anywhere in the Western Cape
          or South Africa.
        </p>
      </DocumentLeftAligned>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        image={{ src: '/img/michelle_avatar.jpg', alt: 'Michelle Smit' }}
        headline="Book your free consultation"
        subheadline={
          <p>
            Schedule a free 15-minute consultation to discuss your needs and find out how I can help. Available for
            in-person sessions in Paarl or online from anywhere.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Book a Consultation
            </ButtonLink>
            <PlainButtonLink href="/services" size="lg">
              View All Services <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
