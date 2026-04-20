export const siteMeta = {
  title: 'Petera',
  description:
    'Petera helps you keep reminders in view until you deal with them.',
  urlPath: '/',
} as const

export const navLinks = [
  { href: '/#screens', label: 'Screens' },
  { href: '/#features', label: 'Features' },
  { href: '/privacy/', label: 'Privacy' },
] as const

export const heroBullets = [
  'Add reminders from Home',
  'Choose Today, Tomorrow, This week, or Pick by date',
  'Set time of day, urgency, and returns after done',
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
      'Adjust time of day, urgency, returns after done, quiet hours, preferred days, notifications, theme, and language.',
  },
] as const

export const howItWorks = [
  {
    title: 'Add a reminder',
    body:
      'Start from Home and use quick add or open the full editor.',
  },
  {
    title: 'Choose when to be reminded',
    body:
      'Pick options like Today, Tomorrow, This week, or Pick by date, then choose time of day and urgency.',
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
    value: 'When, time of day, urgency, returns after done',
  },
  {
    label: 'Settings',
    value: 'Quiet hours, preferred days, notifications, theme, language',
  },
] as const

export const screenshots = [
  {
    src: 'petera-main_screen.png',
    alt: 'Petera Home screen with Today, Upcoming, and Paused sections.',
    title: 'Home',
    body: 'The main screen shows current reminders, upcoming reminders, and paused reminders.',
  },
  {
    src: 'petera-quick_add_reminder.png',
    alt: 'Petera quick add sheet with Today, Tomorrow, This week, and Pick by date options.',
    title: 'Quick add',
    body: 'Quick add keeps the first step short with a title field and common timing options.',
  },
  {
    src: 'petera-editor_screen.png',
    alt: 'Petera reminder editor with fields for when, time of day, urgency, and returns after done.',
    title: 'Editor',
    body: 'The full editor lets you adjust timing, time of day, urgency, and returns after done.',
  },
  {
    src: 'petera-settings_screen.png',
    alt: 'Petera settings screen with quiet hours, preferred days, notifications, theme, language, data, privacy, and about.',
    title: 'Settings',
    body: 'Settings include quiet hours, preferred days, notifications, theme, language, data, and privacy.',
  },
] as const
