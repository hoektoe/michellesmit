import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(145deg, #c4996b 0%, #a8845c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '42px',
          color: '#f8f7f5',
          fontFamily: 'Georgia, serif',
          fontSize: 148,
          fontWeight: 400,
          letterSpacing: '-0.12em',
          paddingRight: '14px',
        }}
      >
        M
      </div>
    ),
    {
      ...size,
    }
  )
}
