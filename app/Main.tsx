'use client'

import NewsletterForm from 'pliny/ui/NewsletterForm';
import { formatDate } from 'pliny/utils/formatDate';

import Link from '@/components/Link';
import PostTag from '@/components/PostTag';
import Circle from '@/components/svg/Circle';
import siteMetadata from '@/data/siteMetadata';

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-xl text-gray-900 dark:text-gray-100 sm:leading-10 md:text-xl md:leading-14">
            Hi there. I'm{' '}
            <a
              href="https://github.com/tqt97"
              target="_blank"
              className="font-bold font-sans text-primary-500 dark:text-primary-500"
            >
              Tuantq
            </a>
            . I'm a Backend web developer from Vietnam. Welcome to my blog ✌️
          </h2>
          <p className="hidden md:block text-lg leading-7 flex items-center py-1">
            A blog created with{' '}
            <span>
              <a href="https://nextjs.org" className="font-medium underline text-primary-500">
                &nbsp;Next.js
              </a>
            </span>{' '}
            &nbsp;and{' '}
            <span>
              <a href="https://tailwindcss.com" className="font-medium underline text-primary-500">
                &nbsp;Tailwind.css
              </a>
            </span>
            {/* . Blog share about &nbsp;
            <TypeAnimation
              sequence={ [
                ' Laravel',
                1500,
                ' Filament',
                1500,
                ' Livewire',
                1500,
                ' Inertia',
                1500,
                ' and  more ...',
                2000,
              ] }
              wrapper="span"
              speed={ 50 }
              cursor={ true }
              repeat={ Infinity }
              className="font-mono font-bold text-primary-500 rounded-md bg-slate-50 px-1 py-1"
            /> */}
          </p>
        </div>
        <div className="relative mt-8 sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]" >
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" ></div>
          <div className="space-y-10" >
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <article className="relative group" key={slug}>
                  <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl " ></div>
                  <Circle />
                  <div className="relative" >
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100 group-hover:text-primary-500"
                        >
                          {title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <PostTag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 dark:text-gray-400" >
                      {summary.length > 120 ? (
                        <span>{summary.substring(0, 119)}&hellip;</span>
                      ) : (
                        <span>{summary}</span>
                      )}
                    </div>
                    <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                      <dt className="sr-only">Published on</dt>
                      <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="text-md font-medium leading-6 transition duration-200 z-10">
                      <Link
                        href={`/blog/${slug}`}
                        className=" hover:text-primary-500 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
