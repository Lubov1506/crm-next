import React from 'react';
import { getSummaryStats } from '../../../../../lib/api';
import StatCard, { StatCardType } from '@/app/conponents/stat-card/stat-card';
export interface PageProps {}
const labelByStats = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};
export default async function Page({}: PageProps) {
  const data = await getSummaryStats();
  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStats) as (keyof typeof data)[]).map((key) => (
        <div key={key} className='col-span-3'>
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStats[key]}
            counter={data[key]}
          />
        </div>
      ))}
    </div>
  );
}
