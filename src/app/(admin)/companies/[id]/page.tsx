import Header from '@/app/conponents/header';

export interface PageProps {
  params: { id: string };
}
export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
