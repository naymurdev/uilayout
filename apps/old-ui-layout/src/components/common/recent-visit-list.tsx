'use client'

import { useRecentPagesStore } from '@/hooks/use-zust-store'
import Link from 'next/link'

export default function RecentVisitList() {
  const { getRecentPages, addVisitedPage } = useRecentPagesStore()
  const recentPages = getRecentPages()

  if (recentPages.length === 0) return null

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">Recently Visited</h2>
      <ul>
        {recentPages.map((page) => (
          <li key={page.id} className="text-sm py-1">
            <Link
              href={page.id}
              onClick={() => addVisitedPage(page.id, page.name)}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
