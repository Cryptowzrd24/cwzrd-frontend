import Image from 'next/image';
import DataTable from './components/DataTable';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <DataTable />
    </main>
  );
}
