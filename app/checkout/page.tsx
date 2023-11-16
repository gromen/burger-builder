'use client';

import { Suspense } from 'react';
import Checkout from '@/components/Checkout/Checkout';
import Spinner from 'react-bootstrap/esm/Spinner';

function CheckoutPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <Checkout />
    </Suspense>
  );
}

export default CheckoutPage;
