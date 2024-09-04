'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/conponents/modal';
import CompanyForm from '@/app/conponents/company-form';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
