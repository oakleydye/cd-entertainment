'use client'

import { ReactNode } from 'react'
import { StructuredData } from '@/components/seo/structured-data'
import { organizationStructuredData, localBusinessStructuredData } from '@/lib/seo'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  includeGlobalStructuredData?: boolean
}

export default function PageLayout({ 
  children, 
  className = "",
  includeGlobalStructuredData = true
}: PageLayoutProps) {
  return (
    <div className={className}>
      {/* Global Structured Data - only include once per page */}
      {includeGlobalStructuredData && (
        <>
          <StructuredData data={organizationStructuredData} />
          <StructuredData data={localBusinessStructuredData} />
        </>
      )}
      
      {children}
    </div>
  )
}
