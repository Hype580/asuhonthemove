import Navbar from '@/components/Navbar';
import MeetOurNannies from '@/components/nannies/MeetOurNannies';
import NannyList from '@/components/nannies/NannyList';

export default function Nannies() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full mx-auto flex-grow">
        <MeetOurNannies />
        <NannyList />
      </div>
    </main>
  );
} 