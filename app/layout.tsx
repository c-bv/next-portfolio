import { Navigation } from '@/components/navigation';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'cB | Portfolio',
    description: 'Personal portfolio of Charles Bouveret'
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <body className={`antialiased min-h-screen bg-slate-950 text-slate-50 ${inter.className}`}>
                <div className='max-w-2xl mx-auto py-10 px-4'>
                    <header>
                        <div className='flex items-center justify-between'>
                            <Navigation />
                        </div>
                    </header>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
