import React, { useState, useEffect } from 'react'
import { Github, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GitHubButtonProps {
  username: string
  repo: string
  classname?: string
}

export default function GitHubButton({
  username,
  repo,
  classname,
}: GitHubButtonProps) {
  const [starCount, setStarCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStarCount = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch repository data')
        }
        const data = await response.json()
        setStarCount(data.stargazers_count)
      } catch (err) {
        setError('Error fetching star count')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStarCount()
  }, [username, repo])

  return (
    <button
      className={cn(
        `flex items-center space-x-2 group  px-2 rounded-md bg-primary text-primary-foreground border`,
        classname
      )}
      onClick={() =>
        window.open(`https://github.com/${username}/${repo}`, '_blank')
      }
      disabled={isLoading}
    >
      {/* <Github /> */}
      {/* <Star className="h-6 w-6" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-star group-hover:fill-yellow-500 group-hover:stroke-yellow-500 transition-colors duration-300 "
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <span className="font-medium">Star on github</span>

      {isLoading ? (
        <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></span>
      ) : error ? (
        <span className="ml-2 text-red-500">Error</span>
      ) : (
        <span className="ml-2 bg-primary-foreground px-2 py-0.5 rounded-full text-sm font-semibold text-primary">
          {starCount?.toLocaleString()}
        </span>
      )}
    </button>
  )
}
