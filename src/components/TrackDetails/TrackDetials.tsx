import TrackHeader from '@/components/TrackDetails/Partials/TrackHeader';
import TrackStatsTable from '@/components/TrackDetails/Partials/TrackStatsTable';

const TrackDetails: React.FC = (): JSX.Element => {
  return (
    <div className='flex w-full max-w-[1200px] flex-col items-center justify-center gap-16'>
      <TrackHeader />
      <TrackStatsTable />
    </div>
  );
};

export default TrackDetails;
