export const siteMeta = {
  title: 'Petera',
  description:
    'Petera helps you keep reminders in view until you deal with them.',
  urlPath: '/',
} as const

export const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#screens', label: 'Screens' },
  { href: '/privacy/', label: 'Privacy' },
] as const

export const heroBullets = [
  'Add a reminder in seconds with quick choices for when it matters',
  'Shape the reminder as much as you need with the editor',
  'Get nudged until you deal with it, and customize how it behaves with settings',
] as const

export const featureCards = [
  {
    title: 'Simple Home screen',
    body:
      'See what needs attention now, what is coming up next, and what is paused.',
  },
  {
    title: 'Fast add flow',
    body:
      'Add a reminder in a few taps with quick choices for when it matters.',
  },
  {
    title: 'Clear editor and settings',
    body:
      'Adjust how the reminders behave and customize your experience.',
  },
] as const

export const howItWorks = [
  {
    title: 'Add a reminder',
    body:
      'Use the quick add button to enter a title and pick when it matters, or access the editor for more options.',
  },
  {
    title: 'Choose when to be reminded',
    body:
      'Pick the timing that works for you, whether it’s later today, next week, or a specific date.',
  },
  {
    title: 'Manage follow-up',
    body:
      'Mark it done, bring it back later, or turn on returns after done.',
  },
] as const

export const privacyPoints = [
  'Petera stores reminders on your device.',
  'Your data leaves the device only if you export it.',
  'Insights and suggestions are processed on-device.',
] as const

export const secondaryFacts = [
  {
    label: 'Quick add',
    value: 'Title, timing, and save',
  },
  {
    label: 'Editor',
    value: 'Shape the reminder as much as you need with what you need',
  },
  {
    label: 'Settings',
    value: 'The rest of the experience is in your control with settings for anything you want to adjust',
  },
] as const

export const screenshots = [
  {
    src: 'petera-main_screen.png',
    alt: 'Petera Home screen with tightly grouped reminders.',
    title: 'Home',
    body: 'See what needs attention now and what is coming up next.',
  },
  {
    src: 'petera-quick_add_reminder.png',
    alt: "Petera quick add sheet with common timing options and 'Don't let me forget` options.",
    title: 'Quick add',
    body: 'Quick add keeps the first step short with a title field and common timing options.',
  },
  {
    src: 'petera-editor_screen.png',
    alt: 'Petera reminder editor with fields for whatever you need.',
    title: 'Editor',
    body: 'The full editor lets you adapt the reminder to your needs.',
  },
  {
    src: 'petera-settings_screen.png',
    alt: 'Petera settings screen with quiet hours, preferred days, notifications, theme, language, data, privacy, and about.',
    title: 'Settings',
    body: 'Customize your experience and adjust how reminders behave.',
  },
] as const
