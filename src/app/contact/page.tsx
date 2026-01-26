import type { Metadata } from 'next'

import { Link } from '@/components/elements/link'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { MailIcon } from '@/components/icons/mail-icon'
import { MapPinIcon } from '@/components/icons/map-pin-icon'

export const metadata: Metadata = {
  title: 'Contact & Book Appointment',
  description:
    'Book a free 15-minute consultation with Michelle Smit, counselling psychologist in Paarl. In-person at Bloemendal Clinic or secure online video sessions.',
  keywords: ['book psychologist appointment', 'psychologist Paarl contact', 'online therapy booking', 'Bloemendal Clinic Paarl'],
  openGraph: {
    title: 'Contact Michelle Smit | Book Your Consultation',
    description: 'Schedule a free 15-minute consultation. In-person sessions at Bloemendal Clinic, Paarl or online.',
  },
}

export default function Page() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Heading>Get in Touch</Heading>
                <Text size="lg">
                  <p>
                    Taking the first step towards therapy can feel daunting, but you don't have to do it alone. Reach
                    out to schedule a free 15-minute consultation, and let's discuss how I can support you on your
                    journey.
                  </p>
                </Text>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100 text-mist-600">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-mist-950">Email</p>
                    <a
                      href="mailto:therapy@michellesmit.com"
                      className="text-mist-600 hover:text-mist-950"
                    >
                      therapy@michellesmit.com
                    </a>
                  </div>
                </div>

                <div id="paarl" className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100 text-mist-600">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-mist-950">Paarl Office</p>
                    <p className="text-mist-600">
                      Bloemendal Clinic
                      <br />
                      Paarl, Western Cape
                    </p>
                    <Link
                      href="https://www.google.com/maps/place/Bloemendal+Clinic/@-33.8250139,18.9347237,1204m/data=!3m1!1e3!4m10!1m2!2m1!1sBloemendal+Farm+R45,+Klapmuts+-+Simondium+Rd,++Paarl,+South+Africa+7670!3m6!1s0x1dcdaf1f1111e263:0xe015dc4c465c45bc!8m2!3d-33.8258573!4d18.9362283!15sCkdCbG9lbWVuZGFsIEZhcm0gUjQ1LCBLbGFwbXV0cyAtIFNpbW9uZGl1bSBSZCwgIFBhYXJsLCBTb3V0aCBBZnJpY2EgNzY3MJIBFG1lbnRhbF9oZWFsdGhfY2xpbmlj4AEA!16s%2Fg%2F1pp2tzdmm?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1"
                    >
                      View in Maps
                    </Link>
                  </div>
                </div>

                <div id="online" className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100 text-mist-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-mist-950">Online Sessions</p>
                    <p className="text-mist-600">
                      Secure video therapy available
                      <br />
                      Flexible scheduling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
