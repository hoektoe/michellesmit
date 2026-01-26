import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Anxiety Therapy in Paarl',
  description:
    'Expert anxiety treatment in Paarl, Western Cape. HPCSA registered psychologist offering CBT for generalised anxiety, panic attacks & PTSD. Book your free consultation.',
  keywords: ['anxiety therapy Paarl', 'anxiety psychologist', 'panic attack treatment', 'PTSD therapy South Africa', 'CBT anxiety'],
  openGraph: {
    title: 'Anxiety Therapy in Paarl | Michelle Smit Psychologist',
    description: 'Expert anxiety treatment with CBT and mindfulness-based interventions. HPCSA registered counselling psychologist in Paarl.',
  },
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        color="protea"
        headline="Time to see yourself in a different light?"
        subheadline={
          <p>
            Anxiety is a monster that you cannot see. But with the right support, you can learn to understand it,
            manage it, and reclaim your peace of mind.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/anxiety.png"
              alt="Anxiety therapy"
              width={1200}
              height={800}
              className="object-cover bg-white/75"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="Understanding Anxiety">
        <p>
          Anxiety is generally a healthy human response that aids us in challenging situations. It's the feeling you
          get before a big exam that motivates you to study, or the instinct that tells you to run when facing danger.
          This fight-or-flight response has helped humans survive for thousands of years.
        </p>

        <p>
          However, problems arise when anxiety persists without a legitimate threat — when your body produces physical
          responses for what seems like no reason. Overwhelming life demands create stress and anxiety that can feel
          impossible to manage on your own.
        </p>

        <h2>When Anxiety Becomes a Problem</h2>

        <p>
          Anxiety may stem from a feeling of lack of control over our environment. When we do not feel in control, we
          do not feel safe. This can manifest in various ways, affecting your work, relationships, and overall quality
          of life.
        </p>

        <h2>Generalised Anxiety Disorder</h2>

        <p>
          Generalised Anxiety Disorder involves persistent worry about hypothetical situations that affects multiple
          areas of your life. You may find yourself constantly anticipating the worst, even when there's no apparent
          reason for concern. This ongoing state of worry can be exhausting and overwhelming.
        </p>

        <h2>Panic Attacks</h2>

        <p>
          Panic attacks can feel like a heart attack, occurring when anxiety becomes unmanageable. The physical
          symptoms — racing heart, shortness of breath, dizziness — can be terrifying. Understanding what's happening
          in your body is the first step toward managing these episodes.
        </p>

        <h2>PTSD</h2>

        <p>
          Post-Traumatic Stress Disorder is prevalent in South Africa. It can include flashbacks, nightmares, triggers,
          and avoidance behaviours that significantly impact daily life. Trauma-informed therapy can help you process
          these experiences safely.
        </p>

        <h2>When to Seek Help</h2>

        <p>
          <strong>
            If you feel there is a negative impact on your life, that is what matters — and that is when you should
            reach out for help.
          </strong>
        </p>

        <p>
          You don't need to wait until things become unbearable. Therapy can provide you with tools and strategies to
          manage anxiety before it escalates, helping you build resilience and find peace.
        </p>
      </DocumentLeftAligned>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        image={{ src: '/img/michelle_avatar.jpg', alt: 'Michelle Smit' }}
        headline="Ready to take the first step?"
        subheadline={
          <p>
            Schedule a free 15-minute consultation to discuss how therapy can help you manage anxiety and regain
            control of your life.
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
