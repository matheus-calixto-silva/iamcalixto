import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const alt = 'Matheus Calixto — Desenvolvedor Fullstack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: '#121212',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: '80px 96px',
        position: 'relative',
        width: '100%',
      }}
    >
      <div style={{ alignItems: 'center', display: 'flex', gap: 16 }}>
        <div style={{ background: '#da291c', height: 14, width: 14 }} />
        <span
          style={{
            color: '#ff5a4e',
            fontSize: 24,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Portfólio
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 104,
          fontWeight: 700,
          letterSpacing: '-0.045em',
          lineHeight: 1,
          marginTop: 32,
        }}
      >
        {profile.name}
        <span style={{ color: '#da291c' }}>.</span>
      </div>
      <span style={{ color: '#a3a3a3', fontSize: 36, marginTop: 28 }}>
        {profile.title} · {profile.city}, {profile.region}
      </span>
      <span style={{ color: '#8f8f8f', fontSize: 24, marginTop: 48 }}>
        iamcalixto.dev.br
      </span>
      <div
        style={{
          background: '#da291c',
          bottom: 0,
          height: 8,
          left: 0,
          position: 'absolute',
          width: 160,
        }}
      />
    </div>,
    size,
  );
}
