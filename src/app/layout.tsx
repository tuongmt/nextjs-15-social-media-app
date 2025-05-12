import { Toaster } from "@/components/ui/toaster"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { extractRouterConfig } from "uploadthing/server"
import { fileRouter } from "./api/uploadthing/core"
import "./globals.css"
import ReactQueryProvider from "./ReactQueryProvider"

const inter = Inter({ subsets: ["latin"] })

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const metadata: Metadata = {
    title: {
        template: "%s | TBook",
        default: "TBook",
    },
    description: "The social media app for powernerds",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
                <ReactQueryProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </ReactQueryProvider>
                <Toaster />
            </body>
        </html>
    )
}
