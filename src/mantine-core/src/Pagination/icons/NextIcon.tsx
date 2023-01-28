import React from 'react';

export function NextIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
        fill="currentColor"
      />
    </svg>
  );
}