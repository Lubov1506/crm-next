import { AddCompanyButton } from '@/app/conponents/add-company-button';
import SearchInput from '@/app/conponents/search-input';
import Toolbar from '@/app/conponents/toolbar';
import React from 'react';


export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}