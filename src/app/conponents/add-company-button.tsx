'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation';

export const AddCompanyButton = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
};
