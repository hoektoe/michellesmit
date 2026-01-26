import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Psychologist Near Franschhoek',
  description:
    'Counselling psychologist serving Franschhoek & the Cape Winelands. Anxiety, depression, couples therapy & addiction counselling. Online and in-person sessions in nearby Paarl.',
  keywords: [
    'psychologist Franschhoek',
    'therapist Franschhoek',
    'couples therapy Franschhoek',
    'anxiety psychologist Franschhoek',
    'depression therapy Franschhoek',
    'counselling Franschhoek',
    'sielkundige Franschhoek',
    'marriage counselling Franschhoek',
    'psychologist Cape Winelands',
  ],
  alternates: {
    canonical: 'https://michellesmit.com/franschhoek',
  },
  openGraph: {
    title: 'Psychologist Near Franschhoek | Michelle Smit',
    description:
      'HPCSA registered psychologist serving Franschhoek and the Cape Winelands. Anxiety, depression, relationships & addiction therapy. Online sessions available.',
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
        headline="Therapy for Franschhoek & the Winelands"
        subheadline={
          <p>
            Looking for a psychologist near Franschhoek? I offer therapy services from my practice in nearby Paarl,
            just 20 minutes away along the scenic R45, as well as secure online sessions from the comfort of your home.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/hero.jpeg"
              alt="Therapy services for Franschhoek"
              width={1200}
              height={800}
              className="object-cover bg-white/75"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="Serving the Franschhoek Valley">
        <p>
          While my practice is based at Bloemendal Clinic in Paarl, I regularly work with clients from Franschhoek,
          the Franschhoek Valley, and the broader Cape Winelands region. The drive from Franschhoek to my practice
          takes approximately 20 minutes via the R45, passing through beautiful wine country.
        </p>

        <p>
          For those who prefer not to travel, I offer secure online therapy sessions that are just as effective as
          in-person consultations. Many of my clients from the Franschhoek area choose this convenient option,
          particularly during busy tourist seasons.
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
          <strong>In-Person:</strong> Bloemendal Clinic is located on the R45 between Paarl and Franschhoek, making
          it an easy drive from the Franschhoek Valley. The clinic offers ample free parking and a peaceful, private
          setting.
        </p>

        <p>
          <strong>Online:</strong> Secure video sessions allow you to access therapy from anywhere in the Western Cape
          or South Africa, perfect for those with busy schedules or who prefer the privacy of their own space.
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
