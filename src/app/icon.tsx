import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '7px',
          color: '#f8f7f5',
          fontFamily: 'Georgia, serif',
          fontSize: 27,
          fontWeight: 400,
          letterSpacing: '-0.12em',
          paddingRight: '3px',
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
