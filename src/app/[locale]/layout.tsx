import '../global.css';

import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { GNB } from '@/components/common/gnb';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <body>
        <NextIntlClientProvider>
          <div
            id='scroll-content'
            className='w-full h-full flex flex-col grow overflow-auto overflow-x-hidden'
          >
            <GNB />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
