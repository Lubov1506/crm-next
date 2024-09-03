import { AddCompanyButton } from '../../conponents/add-company-button';
import CompanyRow from '../../conponents/company-row';
import CompanyTable from '../../conponents/conpany-table';
import Header from '../../conponents/header';
import SearchInput from '../../conponents/search-input';
import { Status } from '../../conponents/status-label';
import Toolbar from '../../conponents/toolbar';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
