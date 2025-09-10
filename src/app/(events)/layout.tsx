
import React from 'react'
import '../../app/global-layout.css'

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: '102px' }}>
      {children}
    </div>
  );
}
