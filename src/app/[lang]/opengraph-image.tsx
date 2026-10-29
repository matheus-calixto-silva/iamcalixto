import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';
import { hasLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

type LangParams = { params: Promise<{ lang: string }> };

const size = { width: 1200, height: 630 };

export async function generateImageMetadata({ params }: LangParams) {
  const { lang } = await params;
  if (!hasLocale(lang)) return [];

  return [
    {
      id: 'card',
      alt: getDictionary(lang).meta.ogAlt,
      size,
      contentType: 'image/png',
    },
  ];
}

export default async function OpenGraphImage({ params }: LangParams) {
  const { lang } = await params;
  if (!hasLocale(lang)) return new Response(null, { status: 404 });

  const { meta } = getDictionary(lang);

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
          {meta.ogLabel}
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
        {meta.jobTitle} · {profile.city}, {profile.region}
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
