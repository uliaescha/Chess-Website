'use client'
import Link from 'next/link';

export default function Header() {

  const navigationItems = [
    { href: '/news', label: 'News' },
    { href: '/coaches', label: 'Coaches' },
    { href: '/booking', label: 'Lessons' },
  ];

  return (
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
             <img src="logo.png" alt="logo" width={'130px'} height={'120px'} />
            </Link>

            <div className="flex items-center gap-24">
              {navigationItems.map((item) => (
                <div key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium px-2"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
      </nav>
  );
}