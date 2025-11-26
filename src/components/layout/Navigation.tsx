import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/history', label: 'History' },
  { href: '/crew', label: 'The Men' },
  { href: '/aircraft', label: 'Aircraft' },
  { href: '/war-stories', label: 'War Stories' },
  { href: '/missions', label: 'Missions' },
  { href: '/memorials', label: 'Memorials' },
  { href: '/connect', label: 'Connect' },
];

interface NavigationProps {
  mobileMenuOpen: boolean;
}

export default function Navigation({ mobileMenuOpen }: NavigationProps) {
  return (
    <nav className="bg-[#4a5320] border-t border-[#6b7530]">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-link block py-3 px-4 text-sm font-medium uppercase tracking-wider"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <ul className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-2`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3 px-4 text-[#f5f5dc] hover:text-[#d4a017] hover:bg-[#6b7530] text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
