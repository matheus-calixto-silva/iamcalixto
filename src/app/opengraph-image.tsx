import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const alt = 'Matheus Calixto — Desenvolvedor Fullstack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#0a0a0a',
        color: '#ededed',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        padding: '72px',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          border: '1px solid rgba(230, 57, 70, 0.45)',
          borderRadius: '28px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          padding: '64px 72px',
          width: '100%',
        }}
      >
        <span
          style={{
            color: '#e63946',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          Portfólio
        </span>
        <span
          style={{
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: '-0.055em',
            lineHeight: 1.1,
            marginTop: 24,
          }}
        >
          {profile.name}
        </span>
        <span style={{ color: '#b4b4b4', fontSize: 34, marginTop: 22 }}>
          {profile.title} · Recife, PE
        </span>
        <span style={{ color: '#e63946', fontSize: 24, marginTop: 38 }}>
          iamcalixto.dev.br
        </span>
      </div>
    </div>,
    size,
  );
}
