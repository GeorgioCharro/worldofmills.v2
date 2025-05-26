// components/ScrollToTop.jsx
'use client'; // only needed if using the /app directory (safe to include either way)

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]); // rerun when the route changes

  return null;
}
