import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: 'All' },
  { url: '/images', text: 'Images' },
];

export const Links = () => {
  return (
    <div className='flex justify-start items-center mt-4'>
      {links.map(({ url, text }) => (
        <NavLink
          key={url}
          to={url}
          className={({ isActive }) =>
            "m-2 mb-0 " +
            (isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 activated"
              : "hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:pb-2 dark:hover:text-blue-300")
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
