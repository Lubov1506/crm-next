import AddPromotionButton from '@/app/conponents/add-promotion-button';
import SearchInput from '@/app/conponents/search-input';
import Toolbar from '@/app/conponents/toolbar';
import React from 'react';
export interface PageProps {
  params: { id: string };
}
export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}