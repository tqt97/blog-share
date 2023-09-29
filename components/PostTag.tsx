import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props
{
  text: string
}

const Tag = ( { text }: Props ) =>
{
  return (
    <div className='flex items-center transition'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
      </svg>
      <Link
        href={ `/tags/${ slug( text ) }` }
        className="mr-3 text-sm font-medium text-primary-500 dark:text-gray-300 transition duration-250 ease-in-out hover:text-primary-500 dark:hover:text-gray-100 hover:scale-[0.98]"
      >
        { text.split( ' ' ).join( '-' ) }
      </Link>
    </div>
  )
}

export default Tag
