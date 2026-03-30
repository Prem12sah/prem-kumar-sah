/** Smooth scroll to a section by href like "#about" */
export function goTo(href) {
  const el = document.getElementById(href.replace('#', ''))
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/** Validate contact form — returns null if ok, else error string */
export function validateForm({ name, email, subject, message }) {
  if (!name.trim())    return 'Name is required.'
  if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return 'A valid email is required.'
  if (!subject.trim()) return 'Subject is required.'
  if (!message.trim()) return 'Message is required.'
  return null
}
