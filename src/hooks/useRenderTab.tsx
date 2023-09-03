import Artists from '@/components/Artists/Artists';
import Playlists from '@/components/Playlists/Playlists';
import Profile from '@/components/Profile/Profile';
import RecentlyPlayed from '@/components/RecentlyPlayed/RecentlyPlayed';
import Tracks from '@/components/Tracks/Tracks';

import { useAppSelector } from '@/store/store-hooks';

const useRenderTab = () => {
  const selectedTab = useAppSelector((state) => state.global.selectedTab);
  const renderTab = () => {
    switch (selectedTab) {
      case 'profile':
        return <Profile />;
      case 'artists':
        return <Artists />;
      case 'tracks':
        return <Tracks />;
      case 'recent':
        return <RecentlyPlayed />;
      case 'playlists':
        return <Playlists />;
      default:
        return;
    }
  };
  return renderTab();
};

export default useRenderTab;
