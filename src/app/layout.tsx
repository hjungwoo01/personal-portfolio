"use client"
import "../styles/globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --primary-color: #4a90e2;
            --secondary-color: #d0021b;
            --background-color-light: #f5f5f5;
            --background-color-dark: #1a202c;
            --text-color-light: #333333;
            --text-color-dark: #ffffff;
          }
          body.light {
            background-color: var(--background-color-light);
            color: var(--text-color-light);
          }
          body.dark {
            background-color: var(--background-color-dark);
            color: var(--text-color-dark);
          }
        `}</style>
      </head>
      <body className="light:bg-var(--background-color-light) dark:bg-var(--background-color-dark)">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
