import { useReducedMotion } from '../hooks/useIntersectionObserver'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export function Skeleton({
  className = '',
  variant = 'text',
  width = '100%',
  height = '1rem',
  animation = 'pulse',
}: SkeletonProps) {
  const reducedMotion = useReducedMotion()

  const baseStyles: React.CSSProperties = {
    width,
    height,
    backgroundColor: 'var(--color-line)',
    borderRadius: variant === 'circular' ? '50%' : variant === 'rectangular' ? 'var(--radius-lg)' : 'var(--radius-sm)',
    flexShrink: 0,
  }

  const animationStyles: React.CSSProperties = reducedMotion || animation === 'none'
    ? {}
    : animation === 'pulse'
      ? { animation: 'skeleton-pulse 1.5s ease-in-out infinite' }
      : { animation: 'skeleton-wave 1.5s ease-in-out infinite' }

  return (
    <div
      className={`skeleton ${className}`}
      style={{ ...baseStyles, ...animationStyles }}
      aria-hidden="true"
      role="status"
    />
  )
}

export function SkeletonText({ lines = 3, className = '', ...props }: Omit<SkeletonProps, 'variant' | 'height'> & { lines?: number }) {
  return (
    <div className={`skeleton-text ${className}`} role="status" aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? '70%' : '100%'}
          {...props}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`card skeleton-card ${className}`} aria-hidden="true">
      <Skeleton variant="rectangular" width="100%" height="200px" className="mb-4" />
      <SkeletonText lines={1} className="mb-2" width="60%" />
      <SkeletonText lines={2} className="mb-4" />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width="120px" height="40px" />
        <Skeleton variant="rectangular" width="120px" height="40px" />
      </div>
    </div>
  )
}

export function SkeletonProjectCard({ className = '' }: { className?: string }) {
  return (
    <article className={`card project-card p-6 skeleton-card ${className}`} aria-hidden="true">
      <div className="flex items-center gap-2 mb-3">
        <Skeleton variant="rectangular" width="80px" height="24px" />
        <Skeleton variant="rectangular" width="100px" height="24px" />
      </div>
      <Skeleton variant="rectangular" width="60%" height="1.5rem" className="mb-2" />
      <SkeletonText lines={2} />
      <div className="flex gap-2 mt-4 pt-4 border-t border-line">
        <Skeleton variant="rectangular" width="140px" height="40px" />
        <Skeleton variant="rectangular" width="140px" height="40px" />
      </div>
    </article>
  )
}

export function SkeletonSkillItem({ className = '' }: { className?: string }) {
  return (
    <div className={`skill-item ${className}`} aria-hidden="true">
      <div className="flex items-center gap-3">
        <Skeleton variant="rectangular" width="120px" height="1rem" />
        <Skeleton variant="rectangular" width="60px" height="20px" />
      </div>
      <Skeleton variant="rectangular" width="100px" height="0.75rem" />
    </div>
  )
}