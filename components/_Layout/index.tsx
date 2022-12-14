import Footer from './Footer';
import Navbar from './Navbar';
import NextNprogress from 'nextjs-progressbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../../hooks/useTheme';

type _LayoutProps = {
  children: React.ReactNode;
};

const _Layout: React.FC<_LayoutProps> = ({ children }) => {

  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-dark-500 text-white font-body ">
        <Navbar />
        <Toaster position="bottom-right" reverseOrder={false} />
        <NextNprogress
          color="#6f5dff"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ showSpinner: false }}
          showOnShallow={true}
        />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default _Layout;