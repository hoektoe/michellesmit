import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Link } from '@/components/elements/link'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'About Michelle Smit',
  description:
    'HPCSA registered counselling psychologist in Paarl with a Master\'s degree and specialisation in addiction care. Bilingual therapy in English and Afrikaans.',
  keywords: ['Michelle Smit psychologist', 'counselling psychologist Paarl', 'HPCSA registered psychologist', 'bilingual therapist South Africa'],
  openGraph: {
    title: 'About Michelle Smit | Counselling Psychologist in Paarl',
    description: 'HPCSA registered counselling psychologist specialising in addiction, anxiety, depression & relationships. Bilingual therapy available.',
  },
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        color="sunset"
        headline="Michelle Smit"
        subheadline={
          <p>
            M. Psych, Hons Psych — HPCSA registered counselling psychologist based in Paarl, South Africa. Offering
            therapy in English and Afrikaans.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/michelle-portrait.png"
              alt="Michelle Smit - Counselling Psychologist"
              width={400}
              height={400}
              className="object-cover not-dark:bg-white/75 dark:bg-black/75"
            />
          </>
        }
      />

      {/* Bio */}
      <DocumentLeftAligned id="about" headline="About Me">
        <p>
          I am a registered counselling psychologist with a Master's degree from Pearson Institute, currently completing
          my Doctorate in Psychology. I am registered with the Health Professions Council of South Africa (HPCSA) and
          the Board of Healthcare Funders (BHF).
        </p>

        <p>
          My special interest lies in addiction care. I have worked within multidisciplinary teams at in-patient
          facilities caring for patients with substance abuse issues. This experience has given me deep insight into the
          complexities of addiction and recovery.
        </p>

        <h2>Specialisation</h2>

        <p>
          I treat patients with dual diagnoses, addressing comorbid conditions like depression, anxiety, PTSD, and
          personality disorders alongside substance abuse issues. This integrated approach ensures that all aspects of a
          person's mental health are considered in their treatment plan.
        </p>

        <h2>My Approach</h2>

        <p>
          I believe in creating a safe, non-judgmental space where clients feel heard and understood. My therapeutic
          approach is evidence-based, drawing on techniques from Cognitive Behavioural Therapy (CBT), Motivational
          Interviewing, and other proven modalities tailored to each client's unique needs.
        </p>

        <p>
          Whether you're struggling with anxiety, depression, relationship difficulties, or substance abuse, I'm here to
          support you on your journey toward healing and growth.
        </p>
      </DocumentLeftAligned>

      {/* Publication */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex flex-col gap-6">
              <Subheading>Publication</Subheading>
              <div className="rounded-2xl bg-mist-50 py-8 pr-8 dark:bg-mist-900/50">
                <div className="flex flex-col gap-4">
                  <Text size="lg">
                    <p className="font-medium text-mist-950 dark:text-white">
                      South African Psychiatry Magazine — May 2020
                    </p>
                  </Text>
                  <Text>
                    <p>
                      An article exploring substance abuse during the COVID-19 pandemic, examining the unique challenges
                      faced by individuals struggling with addiction during lockdown and isolation.
                    </p>
                  </Text>
                  <Link href="/publications/south-african-psychiatry-may-2020.pdf" target="_blank">
                    Download Article (PDF) <ArrowNarrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Let's work together."
        subheadline={
          <p>
            Schedule a free 15-minute consultation to discuss your needs and see if we're a good fit for working
            together.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Book a Consultation
            </ButtonLink>
            <PlainButtonLink href="/services" size="lg">
              View Services <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
