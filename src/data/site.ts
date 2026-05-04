import mainScreenImage from '../images/petera-main_screen.png'
import quickAddReminderImage from '../images/petera-quick_add_reminder.png'
import editorScreenImage from '../images/petera-editor_screen.png'
import settingsScreenImage from '../images/petera-settings_screen.png'

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
  'Pick a title and when it should show up. Done in seconds.',
  'Use the editor when you need more control over timing or details.',
  'Settings let you set quiet hours, preferred days, and notification style.',
] as const

export const featureCards = [
  {
    title: 'Home screen',
    body: 'See what needs attention now, what is coming up next, and what is paused.',
  },
  {
    title: 'Fast add flow',
    body: 'Add a reminder in a few taps.',
  },
  {
    title: 'Editor and settings',
    body: 'Control how each reminder behaves.',
  },
] as const

export const howItWorks = [
  {
    title: 'Add a reminder',
    body: 'Tap the add button, enter a title, and pick when it should show up. Open the editor for more options.',
  },
  {
    title: 'Choose when to be reminded',
    body: 'Later today, next week, or a specific date. You pick.',
  },
  {
    title: 'Manage follow-up',
    body: 'Mark it done, bring it back later, pause it or get rid of it. It\'s up to you.',
  },
] as const

export const privacyPoints = [
  'Petera stores reminders on your device.',
  'Your data leaves the device only if you export it.',
  'On-device processing only.',
] as const

export const secondaryFacts = [
  {
    label: 'Quick add',
    value: 'Title, timing, and save',
  },
  {
    label: 'Editor',
    value: 'Title, timing, recurrence, and more.',
  },
  {
    label: 'Settings',
    value:
      'Quiet hours, preferred days, notifications, theme, language, and more',
  },
] as const

export const screenshots = [
  {
    src: mainScreenImage,
    alt: 'Petera Home screen with tightly grouped reminders.',
    title: 'Home',
    body: 'See what needs attention now and what is coming up next.',
  },
  {
    src: quickAddReminderImage,
    alt: "Petera quick add sheet with common timing options and 'Don't let me forget` options.",
    title: 'Quick add',
    body: 'Title and timing. That\'s the whole first step.',
  },
  {
    src: editorScreenImage,
    alt: 'Petera reminder editor with fields for whatever you need.',
    title: 'Editor',
    body: 'Set urgency, recurrence, and anything else.',
  },
  {
    src: settingsScreenImage,
    alt: 'Petera settings screen with quiet hours, preferred days, notifications, theme, language, data, privacy, and about.',
    title: 'Settings',
    body: 'Quiet hours, preferred days, notifications, and more.',
  },
] as const
