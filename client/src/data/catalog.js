export const webinars = [
  {
    id: 'w1',
    icon: '🌙',
    category: 'Astrology',
    accent: 'teal',
    title: 'New Moon Manifestation — Vedic Guide',
    date: 'Dec 14 · 7 PM',
    duration: '90 min',
    seats: 48,
    price: 99,
  },
  {
    id: 'w2',
    icon: '🌿',
    category: 'Healing',
    accent: 'rose',
    title: 'Chakra Balancing for Beginners',
    date: 'Dec 16 · 6 PM',
    duration: '60 min',
    seats: 112,
    price: 149,
  },
  {
    id: 'w3',
    icon: '🔢',
    category: 'Numerology',
    accent: 'violet',
    title: '2025 Year Prediction — Your Life Path',
    date: 'Dec 20 · 5 PM',
    duration: '75 min',
    seats: 26,
    price: 199,
  },
  {
    id: 'w4',
    icon: '🃏',
    category: 'Tarot',
    accent: 'amber',
    title: 'Reading Your Birth Card — Full Workshop',
    date: 'Dec 22 · 8 PM',
    duration: '120 min',
    seats: 65,
    price: 249,
  },
  {
    id: 'w5',
    icon: '🎵',
    category: 'Sound Healing',
    accent: 'teal',
    title: '432 Hz Healing Frequencies Session',
    date: 'Dec 28 · 5 PM',
    duration: '60 min',
    seats: 38,
    price: 99,
  },
  {
    id: 'w6',
    icon: '🧘',
    category: 'Meditation',
    accent: 'rose',
    title: 'Guided Deep Meditation for Anxiety',
    date: 'Dec 30 · 7 AM',
    duration: '45 min',
    seats: 90,
    price: 79,
  },
]

export const courses = [
  {
    id: 'c1',
    thumb: '🌙',
    category: 'Astrology',
    title: 'Complete Vedic Astrology — Birth Chart to Predictions',
    meta: '📹 24 videos · 8 hrs · Beginner to Advanced',
    price: 1499,
  },
  {
    id: 'c2',
    thumb: '🌿',
    category: 'Healing',
    title: 'Reiki Level 1 & 2 — Attunement & Practice Guide',
    meta: '📹 18 videos · 6 hrs · All levels',
    price: 999,
  },
  {
    id: 'c3',
    thumb: '🃏',
    category: 'Tarot',
    title: 'Tarot Reading Mastery — 78 Cards Explained',
    meta: '📹 32 videos · 10 hrs · Beginner friendly',
    price: 1299,
  },
  {
    id: 'c4',
    thumb: '🔢',
    category: 'Numerology',
    title: 'Numerology Decoded — Name, Date & Life Path',
    meta: '📹 14 videos · 5 hrs',
    price: 799,
  },
  {
    id: 'c5',
    thumb: '🎵',
    category: 'Sound Healing',
    title: 'Himalayan Bowl Sound Healing Certification',
    meta: '📹 20 videos · 7 hrs',
    price: 1799,
  },
  {
    id: 'c6',
    thumb: '🧘',
    category: 'Meditation',
    title: 'Pranayama & Breathwork for Daily Practice',
    meta: '📹 12 videos · 4 hrs',
    price: 599,
  },
]

export const products = [
  { id: 'p1', img: '💎', name: 'Rose Quartz Set', desc: '5 raw rose quartz stones for heart chakra healing.', price: 649 },
  { id: 'p2', img: '🪔', name: 'Himalayan Salt Lamp', desc: 'Natural pink salt lamp for air purification & calm.', price: 1299 },
  { id: 'p3', img: '🎵', name: 'Tibetan Singing Bowl', desc: '7-metal bowl, 432 Hz tuned. Striker included.', price: 2199 },
  { id: 'p4', img: '🌿', name: 'Sage Smudge Bundle', desc: 'White sage for space cleansing rituals.', price: 399 },
  { id: 'p5', img: '📿', name: 'Rudraksha Mala', desc: 'Authentic 5 mukhi, 108 beads for meditation.', price: 899 },
  { id: 'p6', img: '🧿', name: 'Black Tourmaline Set', desc: 'Protection stones — set of 3 raw crystals.', price: 549 },
  { id: 'p7', img: '📖', name: 'Vedic Astrology Handbook', desc: 'Complete Jyotish guide — charts, planets, houses.', price: 749 },
  { id: 'p8', img: '🕯️', name: 'Chakra Candle Kit', desc: '7-candle set, one per chakra. Handmade, scented.', price: 1099 },
]

export const seedTransactions = [
  { id: 't1', label: 'Consultation · Priya Sharma · 22 min', date: 'Dec 6', amount: -440 },
  { id: 't2', label: 'Wallet recharge via UPI', date: 'Dec 5', amount: 1000 },
  { id: 't3', label: 'Webinar · New Moon Manifestation', date: 'Dec 4', amount: -99 },
  { id: 't4', label: 'Course · Vedic Astrology Complete', date: 'Dec 1', amount: -1499 },
  { id: 't5', label: 'Wallet recharge via UPI', date: 'Nov 28', amount: 2000 },
]

export const reviews = [
  {
    id: 'r1',
    stars: 5,
    text: 'My session with Priya completely changed how I see my birth chart. So transparent with pricing!',
    avatar: '😊',
    name: 'Anjali M.',
    meta: 'Vedic Astrology · 25 min',
  },
  {
    id: 'r2',
    stars: 5,
    text: 'The chakra balancing webinar was deeply calming. Downloaded the certificate right after.',
    avatar: '🧘',
    name: 'Karan S.',
    meta: 'Healing Webinar',
  },
  {
    id: 'r3',
    stars: 4,
    text: 'Finished the Tarot course in two weeks. Great video quality. Would love Level 3 content!',
    avatar: '🃏',
    name: 'Rohini P.',
    meta: 'Tarot Course · Delhi',
  },
]

export const faqs = [
  {
    q: 'How does per-minute billing work?',
    a: 'Your wallet is debited every minute from the moment your session starts. A live timer shows elapsed time and remaining wallet balance. If your balance drops below 5 minutes worth, you get a warning. Session auto-ends if wallet runs out.',
  },
  {
    q: "Can I get a refund if I'm unsatisfied?",
    a: 'Refund requests can be raised within 24 hours of a session. Our team reviews chat history and session logs. Eligible refunds are credited back to your wallet within 3 business days.',
  },
  {
    q: 'How do I register as a healer or astrologer?',
    a: 'Click "Join as Expert" and complete the 5-step registration. Upload credentials, select domains, and set your rate. Admin reviews within 3–5 business days.',
  },
  {
    q: 'When do experts get paid?',
    a: 'Experts receive weekly payouts every Monday for all sessions completed in the previous week. Payments go directly to the registered bank account.',
  },
  {
    q: 'Is my consultation private?',
    a: 'Voice and video sessions are never recorded. Chat history is stored for your reference only. Your birth details and personal information are encrypted and never shared.',
  },
  {
    q: 'Can I have multiple active sessions?',
    a: 'No — users can only have one active session at a time. This ensures full focus and quality in every consultation.',
  },
]
