import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mt-1 mr-3 rounded-md border border-primary-100 dark:border-gray-500 py-1 px-2 text-sm font-medium text-primary-500 dark:text-gray-300 transition duration-250 ease-in-out hover:bg-primary-500 hover:text-white dark:hover:text-gray-100 hover:scale-[0.95] hover:font-bold"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
