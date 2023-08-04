"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  // Backend setting

  return (
    <nav
    className={cn("flex items-center space-x-4 lg:space-x-6", className)}
    {...props}
  >
    {/* Remove commentout later */}
    {/* {routes.map((route) => (
      <Link
        key={route.href}
        href={route.href}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
        )}
      >
        {route.label}
    </Link>
    ))} */}
  </nav>
  )
};