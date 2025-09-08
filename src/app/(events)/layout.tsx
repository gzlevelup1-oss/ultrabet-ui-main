
import { SideMenu } from '@/ui/side-menu/side-menu'
import TopBar from '@/ui/top-bar/top-bar'
import React from 'react'
import '../../app/global-layout.css'

// You can pass bettingUser as null or mock user if needed
export default function EventsLayout({ children }: { children: React.ReactNode }) {
  const bettingUser = null;
  // Mock sports data
  const sports = [
    { id: '1', key: 'football', title: 'Football', active: true, group: 'main', description: 'Football', hasOutrights: false },
    { id: '2', key: 'basketball', title: 'Basketball', active: true, group: 'main', description: 'Basketball', hasOutrights: false },
    { id: '3', key: 'tennis', title: 'Tennis', active: true, group: 'main', description: 'Tennis', hasOutrights: false },
    { id: '4', key: 'volleyball', title: 'Volleyball', active: true, group: 'main', description: 'Volleyball', hasOutrights: false },
    { id: '5', key: 'boxing', title: 'Boxing', active: true, group: 'main', description: 'Boxing', hasOutrights: false },
    { id: '6', key: 'rugby', title: 'Rugby', active: true, group: 'main', description: 'Rugby', hasOutrights: false },
  ];
  return (
    <>
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#f8fafc',
        paddingTop: 0,
      }}>
        <div style={{
          flex: '0 0 220px',
          minWidth: 0,
          maxHeight: '100vh',
          overflowY: 'auto',
          position: 'sticky',
          top: '102px',
          zIndex: 10,
          boxShadow: '2px 0 12px rgba(30,126,52,0.08)'
        }}>
          <SideMenu sports={sports} />
        </div>
        <div style={{
          flex: 1,
          minWidth: 0,
          padding: '20px 0 0 0',
          margin: '0 auto 0 16px',
          maxWidth: 1200,
          width: '100%',
          boxSizing: 'border-box',
        }}>
          {children}
        </div>
      </div>
    </>
  );
}
