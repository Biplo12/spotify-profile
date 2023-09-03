import Artists from '@/components/Artists/Artists';
import Profile from '@/components/Profile/Profile';
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
      case 'playlists':
        return <div>Playlists</div>;
      case 'recent':
        return <div>Recent</div>;
      default:
        return <div>Profile</div>;
    }
  };
  return renderTab();
};

export default useRenderTab;
