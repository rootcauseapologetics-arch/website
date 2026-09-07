export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string; // SVG path or identifier
  badge?: string;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    id: 'rca',
    label: 'RCA Hub',
    href: '/',
    icon: 'search-book',
  },
  {
    id: 'incidents',
    label: 'Incidents',
    href: '/incidents',
    icon: 'shield-alert',
    badge: 'LIVE',
  },
  {
    id: 'churches',
    label: 'Church Zone',
    href: '/churches',
    icon: 'church',
    badge: 'GATED',
  },
  {
    id: 'others',
    label: 'Community',
    href: '/others',
    icon: 'users-info',
  }
];

export const NAV_STORAGE_KEY = 'rca_custom_bottom_nav_order';

export const getStoredNavOrder = (): NavItem[] => {
  if (typeof window === 'undefined') return DEFAULT_NAV_ITEMS;
  try {
    const raw = localStorage.getItem(NAV_STORAGE_KEY);
    if (!raw) return DEFAULT_NAV_ITEMS;
    const orderIds: string[] = JSON.parse(raw);
    const itemMap = new Map(DEFAULT_NAV_ITEMS.map(i => [i.id, i]));
    const reordered = orderIds.map(id => itemMap.get(id)).filter(Boolean) as NavItem[];
    // Add any missing
    DEFAULT_NAV_ITEMS.forEach(item => {
      if (!reordered.find(r => r.id === item.id)) {
        reordered.push(item);
      }
    });
    return reordered;
  } catch {
    return DEFAULT_NAV_ITEMS;
  }
};

export const saveNavOrder = (items: NavItem[]): void => {
  if (typeof window === 'undefined') return;
  try {
    const ids = items.map(i => i.id);
    localStorage.setItem(NAV_STORAGE_KEY, JSON.stringify(ids));
  } catch (err) {
    console.error('Failed to save nav order', err);
  }
};
