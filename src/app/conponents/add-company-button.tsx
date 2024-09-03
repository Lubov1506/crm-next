'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button } from './button';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});
export const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};
