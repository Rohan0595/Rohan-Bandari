import type { ReactNode } from "react"
import "../src/index.css" // re-use the global styles from Vite build

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
