// PRISMODELL-OPPDATERING — 6. juni 2026
// Fil: atonapp/constants/pricing.ts (opprett denne filen)
// Erstatter tidligere hardkodede grenser i App.tsx

export const PRICING = {
  free: {
    model: 'claude-haiku-4-5',
    dailyLimit: null,        // null = ubegrenset
    features: ['chat', 'tasks', 'goals', 'morgenbrief_basic'],
    label: 'Gratis',
    price: 0,
  },
  premium: {
    model: 'claude-sonnet-4-6',
    dailyLimit: null,        // null = ubegrenset
    features: ['chat', 'tasks', 'goals', 'morgenbrief_advanced', 
               'voice', 'images', 'memory', 'gmail'],
    label: 'Premium',
    price: 129,              // NOK per måned
    priceMonthly: '129 kr/mnd',
  },
} as const;

// Hjelpefunksjon — sjekk om bruker har nådd grensen (alltid false nå)
export function hasReachedLimit(
  tier: 'free' | 'premium',
  _messageCount: number
): boolean {
  return PRICING[tier].dailyLimit !== null && 
         _messageCount >= (PRICING[tier].dailyLimit ?? Infinity);
}

// Modell basert på tier
export function getModelForTier(isPremium: boolean): string {
  return isPremium ? PRICING.premium.model : PRICING.free.model;
}
