import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'CloneBnB',
  description: 'An Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <Modal actionLabel='Submit' title='Login Modal' isOpen />
        {children}
      </body>
    </html>
  )
}
