import Profile from '@/components/Profile/Profile';

import { useAppSelector } from '@/store/store-hooks';

const useRenderTab = () => {
  const selectedTab = useAppSelector((state) => state.global.selectedTab);
  const renderTab = () => {
    switch (selectedTab) {
      case 'profile':
        return <Profile />;
      case 'playlists':
        return <div>Playlists</div>;
      case 'recent':
        return <div>Recent</div>;
      case 'artists':
        return <div>Artists</div>;
      case 'songs':
        return <div>Tracks</div>;
      default:
        return <div>Profile</div>;
    }
  };
  return renderTab();
};

export default useRenderTab;
