import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}
export default function ServerComponent({ children }: ServerComponentProps) {
  return (
    <div>
      <span>Server Component</span>;{children}
    </div>
  );
}
