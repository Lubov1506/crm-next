import React from 'react';
import { getSummarySales } from '../../../../lib/api';
import DashboardCard from '@/app/conponents/dashboard-card';
import SummaryTable from '@/app/conponents/summary-table';
import SummaryTableHeader from '@/app/conponents/summary-table-header';
import SummaryTableCell from '@/app/conponents/summary-table-cell';
export interface PageProps {}
export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">SoId</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, soId, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{soId}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
