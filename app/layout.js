import './globals.css'

export const metadata = {
  title: 'ITAFCOUTURE Brand Board',
  description: 'Luxury Digital Fashion Maison',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
