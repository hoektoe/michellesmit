const siteUrl = 'https://www.michellesmit.com'

const link = (path: string, label: string) => `[${label}](${siteUrl}${path})`

const pages: Record<string, string> = {
  '/': `# Michelle Smit | Counselling Psychologist in Paarl

Michelle Smit is an HPCSA-registered counselling psychologist based in Paarl, Western Cape. She offers evidence-based support for anxiety, depression, relationships, substance abuse, and online therapy in English and Afrikaans.

## When to use this site

Use this site when someone needs information about Michelle Smit's counselling services, therapy in Paarl, online sessions in South Africa, available locations, session rates, medical aid, or booking a consultation.

## Services

- ${link('/anxiety', 'Anxiety therapy')}: support for worry, panic, and overwhelm, including CBT-based approaches.
- ${link('/depression', 'Depression therapy')}: support for persistent low mood, loss of interest, and hopelessness.
- ${link('/substance-abuse', 'Substance abuse counselling')}: compassionate support for substance use and dual diagnosis concerns.
- ${link('/relationships', 'Relationship and couples therapy')}: support for communication and healthier connections.
- ${link('/contact', 'Online therapy')}: secure online video sessions are available.

## Practice information

- ${link('/about', 'About Michelle Smit')}
- ${link('/services', 'All therapy services')}
- ${link('/stellenbosch', 'Stellenbosch area')}
- ${link('/franschhoek', 'Franschhoek area')}
- ${link('/rates-and-insurance', 'Rates and medical aid')}
- ${link('/contact', 'Book a free 15-minute consultation')}

The practice is based at Bloemendal Clinic, R45 Klapmuts-Simondium Road, Paarl, Western Cape 7670. Contact: therapy@michellesmit.com.
`,
  '/about': `# About Michelle Smit

Michelle Smit is an HPCSA-registered counselling psychologist based in Paarl. She provides compassionate, evidence-based therapy and supports clients in English and Afrikaans.

${link('/contact', 'Book a consultation')} or ${link('/', 'return to the home page')}.
`,
  '/services': `# Therapy Services

Michelle Smit offers evidence-based counselling tailored to each client's needs in a safe, supportive environment.

- ${link('/anxiety', 'Anxiety therapy')}
- ${link('/depression', 'Depression therapy')}
- ${link('/substance-abuse', 'Substance abuse counselling')}
- ${link('/relationships', 'Relationship and couples therapy')}
- ${link('/contact', 'Online therapy and booking')}
`,
  '/anxiety': `# Anxiety Therapy in Paarl

Michelle Smit provides expert anxiety treatment with CBT-based approaches. Sessions support people managing worry, panic, and overwhelm.

${link('/contact', 'Book a consultation')} or ${link('/services', 'view all therapy services')}.
`,
  '/depression': `# Depression Therapy in Paarl

Michelle Smit provides evidence-based depression therapy for persistent low mood, loss of interest, and feelings of hopelessness.

${link('/contact', 'Book a consultation')} or ${link('/services', 'view all therapy services')}.
`,
  '/substance-abuse': `# Addiction Therapy in Paarl

Michelle Smit offers compassionate, non-judgmental support for substance use and dual diagnosis concerns, with a focus on healthier coping strategies and recovery.

${link('/contact', 'Book a consultation')} or ${link('/services', 'view all therapy services')}.
`,
  '/relationships': `# Couples Therapy in Paarl

Relationship therapy can help people navigate challenges, improve communication, and build healthier connections with partners, family members, and others.

${link('/contact', 'Book a consultation')} or ${link('/services', 'view all therapy services')}.
`,
  '/contact': `# Contact Michelle Smit

Book a free 15-minute consultation with Michelle Smit, counselling psychologist in Paarl. In-person sessions are available at Bloemendal Clinic, or sessions can take place through secure online video.

- Email: therapy@michellesmit.com
- Location: Bloemendal Clinic, R45 Klapmuts-Simondium Road, Paarl, Western Cape 7670
- ${link('/rates-and-insurance', 'View rates and medical aid information')}
`,
  '/stellenbosch': `# Psychologist Near Stellenbosch

Michelle Smit provides counselling psychology services for people in the Stellenbosch area, with in-person sessions near Paarl and secure online sessions available.

${link('/contact', 'Book a consultation')}.
`,
  '/franschhoek': `# Psychologist Near Franschhoek

Michelle Smit provides counselling psychology services for people in the Franschhoek area, with in-person sessions near Paarl and secure online sessions available.

${link('/contact', 'Book a consultation')}.
`,
  '/rates-and-insurance': `# Rates and Medical Aid

This page provides psychology session rates and medical aid information. Michelle Smit is registered with most medical aids and the practice can claim on your behalf.

${link('/contact', 'Contact the practice')} for current booking information.
`,
  '/privacy-policy': `# Privacy Policy

Read the ${link('/privacy-policy', 'Michelle Smit Therapy privacy policy')} for information about how the practice collects, uses, and protects personal information.
`,
}

export function getAgenticPage(pathname: string) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  return pages[normalizedPath]
}

export function getAgenticNotFound(pathname: string) {
  return `# Page not found

The requested page \`${pathname}\` does not exist.

Continue with:

- ${link('/llms.txt', 'Agent guide')}
- ${link('/sitemap.xml', 'XML sitemap')}
- ${link('/services', 'Therapy services')}
- ${link('/contact', 'Contact and booking')}
`
}
