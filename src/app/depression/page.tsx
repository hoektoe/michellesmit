import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Depression Therapy in Paarl',
  description:
    'Compassionate depression treatment in Paarl, Western Cape. HPCSA registered psychologist offering CBT and evidence-based therapy. Online sessions available.',
  keywords: ['depression therapy Paarl', 'depression psychologist', 'depression counselling', 'CBT depression South Africa'],
  openGraph: {
    title: 'Depression Therapy in Paarl | Michelle Smit Psychologist',
    description: 'Evidence-based depression treatment with a compassionate approach. HPCSA registered counselling psychologist.',
  },
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        color="blue"
        headline="Is your depression getting the better of you?"
        subheadline={
          <p>
            Depression is more than just feeling sad. With compassionate support and evidence-based treatment, you can
            find your way back to a life that feels meaningful again.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/depression.avif"
              alt="Depression therapy"
              width={1200}
              height={800}
              className="object-cover bg-white/75"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="Understanding Depression">
        <p>
          Sadness is a normal part of daily life. We all experience it due to various factors — loss, job changes,
          relationship difficulties, or life transitions. However, depression differs from temporary sadness in both
          duration and severity.
        </p>

        <p>
          Depression can be short-term or long-term, and it affects individuals differently. Some symptoms may appear
          without meeting the criteria for clinical depression, but when these feelings begin impacting your daily
          functioning, it's time to seek support.
        </p>

        <h2>Recognising the Signs</h2>

        <p>According to the American Psychiatric Association, common symptoms of depression include:</p>

        <ul>
          <li>Feeling sad or having a persistently depressed mood</li>
          <li>Loss of interest or pleasure in activities you once enjoyed</li>
          <li>Changes in appetite or weight unrelated to dieting</li>
          <li>Difficulty sleeping or sleeping too much</li>
          <li>Loss of energy or increased fatigue</li>
          <li>Physical restlessness or noticeably slowed movements and speech</li>
          <li>Feelings of worthlessness or excessive guilt</li>
          <li>Difficulty thinking, concentrating, or making decisions</li>
          <li>Thoughts of death or suicide</li>
        </ul>

        <h2>When to Seek Help</h2>

        <p>
          For a diagnosis of depression, symptoms typically need to persist for at least two weeks and represent a
          change from your previous level of functioning. However, you don't need to meet clinical criteria to benefit
          from therapy.
        </p>

        <p>
          <strong>
            If depression is affecting your ability to work, maintain relationships, or enjoy life, reaching out for
            support is a brave and important step.
          </strong>
        </p>

        <h2>How Therapy Can Help</h2>

        <p>
          Through therapy, we can work together to understand the root causes of your depression, develop healthy
          coping strategies, and gradually rebuild a sense of hope and purpose. Evidence-based approaches like
          Cognitive Behavioural Therapy (CBT) have proven highly effective in treating depression.
        </p>
      </DocumentLeftAligned>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        image={{ src: '/img/michelle_avatar.jpg', alt: 'Michelle Smit' }}
        headline="You don't have to face this alone."
        subheadline={
          <p>
            Schedule a free 15-minute consultation to discuss how therapy can help you move through depression and
            rediscover joy in your life.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Book a Consultation
            </ButtonLink>
            <PlainButtonLink href="/#services" size="lg">
              View All Services <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
