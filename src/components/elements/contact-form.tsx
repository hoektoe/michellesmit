'use client'

import { useState, type FormEvent } from 'react'
import { Button } from './button'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, description }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setFormState('success')
      setFullName('')
      setEmail('')
      setDescription('')
    } catch (error) {
      setFormState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  if (formState === 'success') {
    return (
      <div className="rounded-2xl bg-mist-100 p-6">
        <p className="font-medium text-mist-950">Thank you for reaching out!</p>
        <p className="mt-2 text-mist-600">
          I'll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setFormState('idle')}
          className="mt-4 text-sm font-medium text-mist-600 hover:text-mist-950"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="text-sm font-medium text-mist-950">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="rounded-lg border border-mist-200 bg-white px-4 py-2.5 text-mist-950 placeholder:text-mist-400 focus:border-mist-400 focus:outline-none focus:ring-1 focus:ring-mist-400"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-mist-950">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-mist-200 bg-white px-4 py-2.5 text-mist-950 placeholder:text-mist-400 focus:border-mist-400 focus:outline-none focus:ring-1 focus:ring-mist-400"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="description" className="text-sm font-medium text-mist-950">
          How can I help you?
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none rounded-lg border border-mist-200 bg-white px-4 py-2.5 text-mist-950 placeholder:text-mist-400 focus:border-mist-400 focus:outline-none focus:ring-1 focus:ring-mist-400"
          placeholder="Tell me a bit about what you're looking for..."
        />
      </div>

      {formState === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-2 self-start"
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
