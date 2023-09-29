'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'
import Typewriter from 'typewriter-effect'

const Header = () => {
  const pathname = usePathname()

  const pathNameFirst = pathname === '/' ? '' : pathname.split('/')[1]
  const headerTitle =
    pathNameFirst.length > 0 ? pathNameFirst[0].toUpperCase() + pathNameFirst.slice(1) : ''
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl sm:text-4xl font-semibold">
            {`~/${headerTitle}`}{' '}
            <Typewriter
              options={{
                strings: [''],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-500"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
