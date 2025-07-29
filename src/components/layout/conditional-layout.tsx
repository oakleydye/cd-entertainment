'use client'

import { usePathname } from 'next/navigation'
import MenuBar from '@/components/common/menu-bar'
import Footer from '@/components/common/footer'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Hide MenuBar and Footer on admin pages
  const isAdminPage = pathname?.startsWith('/admin')

  if (isAdminPage) {
    return (
      <div className="w-full min-h-screen overflow-x-hidden">
        <main>
          {children}
        </main>
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-hidden">
      <MenuBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
