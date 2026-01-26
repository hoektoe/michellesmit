import type { Metadata } from 'next'
import Link from 'next/link'

import { DocumentCentered } from '@/components/sections/document-centered'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Michelle Smit Therapy. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function Page() {
  return (
    <>
      <DocumentCentered id="document" headline="Privacy Policy" subheadline={<p>Last updated on January 23, 2026.</p>}>
        <p>
          Michelle Smit Therapy ("<strong>Practice</strong>," "<strong>we</strong>," "<strong>us</strong>," or "
          <strong>our</strong>") respects your privacy and is committed to protecting your personal information. This
          Privacy Policy describes how we collect, use, store, and protect information when you interact with our
          website and therapy services (collectively, the "<strong>Services</strong>").
        </p>

        <h2>Information We Collect and How We Use It</h2>
        <p>
          We collect information that you voluntarily provide to us when you contact us, book an appointment, or engage
          in therapy services. This information may include your name, email address, phone number, and any information
          you share during the consultation or booking process.
        </p>
        <p>
          For therapy services, additional clinical information may be collected as part of your treatment. This
          information is subject to patient-therapist confidentiality and is handled in accordance with the Health
          Professions Council of South Africa (HPCSA) ethical guidelines and the Protection of Personal Information Act
          (POPIA).
        </p>
        <p>
          Our website may automatically collect limited technical information such as browser type, device details, and
          IP address for analytics purposes.
        </p>
        <p>Information we collect may be used for purposes such as:</p>
        <ul>
          <li>Scheduling and managing appointments</li>
          <li>Providing therapy services</li>
          <li>Processing medical aid claims</li>
          <li>Responding to inquiries and communications</li>
          <li>Complying with legal and professional obligations</li>
        </ul>

        <h2>Confidentiality and Professional Ethics</h2>
        <p>
          As a registered counselling psychologist, I am bound by the HPCSA ethical rules regarding patient
          confidentiality. Information shared during therapy sessions is confidential and will not be disclosed without
          your written consent, except where required by law or where there is a risk of harm to yourself or others.
        </p>

        <h2>Sharing, Retention, and Security of Information</h2>
        <p>
          We do not sell your personal information. We may share information with medical aids for claims processing
          (with your consent) or with third-party service providers who assist with practice operations, such as
          appointment scheduling or secure video platforms for online therapy.
        </p>
        <p>
          Clinical records are retained in accordance with HPCSA guidelines and applicable laws. We take reasonable
          measures to protect information from unauthorized access, use, or disclosure.
        </p>

        <h2>Your Rights Under POPIA</h2>
        <p>
          Under the Protection of Personal Information Act (POPIA), you have the right to request access to your
          personal information, request correction of inaccurate information, and request deletion of your information
          (subject to legal and professional retention requirements).
        </p>

        <h2>Updates and Contact Information</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "
          <strong>Last updated</strong>" date at the top of this page.
        </p>
        <p>If you have any questions about this Privacy Policy or your personal information, please contact us at:</p>
        <p>
          <strong>Michelle Smit Therapy</strong>
          <br />
          Email: <Link href="mailto:therapy@michellesmit.com">therapy@michellesmit.com</Link>
          <br />
          Address: Bloemendal Clinic, Paarl, Western Cape, 7670
        </p>
      </DocumentCentered>
    </>
  )
}
