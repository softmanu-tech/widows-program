"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Users, Home, Calendar, FileText, Settings, HelpCircle } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Beneficiaries', href: '/beneficiaries', icon: Users },
    { name: 'Programs', href: '/programs', icon: Calendar },
    { name: 'Reports', href: '/reports', icon: FileText },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Help', href: '/help', icon: HelpCircle },
  ]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">WMS</span>
            </Link>
            
            <div className="hidden md:flex md:gap-x-6">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}