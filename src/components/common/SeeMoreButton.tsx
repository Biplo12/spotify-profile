import React from 'react';

interface ISeeMoreButtonProps {
  onClick?: () => void;
}

const SeeMoreButton: React.FC<ISeeMoreButtonProps> = ({
  onClick,
}): JSX.Element => {
  return (
    <button
      className='text-spotify-white hover:bg-spotify-white hover:text-spotify-black border-spotify-white rounded-full border bg-transparent px-[24px] py-[11px] text-xs font-semibold uppercase tracking-[2px] duration-150 ease-linear'
      onClick={onClick}
    >
      See More
    </button>
  );
};
export default SeeMoreButton;
