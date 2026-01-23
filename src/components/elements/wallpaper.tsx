import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

const html = String.raw

const noisePattern = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  html`
    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 100 100">
      <filter id="n">
        <feTurbulence type="turbulence" baseFrequency="1.4" numOctaves="1" seed="2" stitchTiles="stitch" result="n" />
        <feComponentTransfer result="g">
          <feFuncR type="linear" slope="4" intercept="1" />
          <feFuncG type="linear" slope="4" intercept="1" />
          <feFuncB type="linear" slope="4" intercept="1" />
        </feComponentTransfer>
        <feColorMatrix type="saturate" values="0" in="g" />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>
  `.replace(/\s+/g, ' '),
)}")`

export function Wallpaper({
  children,
  color,
  className,
  ...props
}: { color: 'green' | 'blue' | 'purple' | 'brown' | 'sunset' | 'protea' } & ComponentProps<'div'>) {
  return (
    <div
      data-color={color}
      className={clsx(
        'relative overflow-hidden bg-linear-to-b data-[color=blue]:from-[#637c86] data-[color=blue]:to-[#778599] data-[color=brown]:from-[#8d7359] data-[color=brown]:to-[#765959] data-[color=green]:from-[#9ca88f] data-[color=green]:to-[#596352] data-[color=protea]:from-[#c4a96e] data-[color=protea]:to-[#a89860] data-[color=purple]:from-[#7b627d] data-[color=purple]:to-[#8f6976] data-[color=sunset]:from-[#c4956a] data-[color=sunset]:to-[#d4917a] dark:data-[color=blue]:from-[#243a42] dark:data-[color=blue]:to-[#232f40] dark:data-[color=brown]:from-[#382d23] dark:data-[color=brown]:to-[#3d2323] dark:data-[color=green]:from-[#333a2b] dark:data-[color=green]:to-[#26361b] dark:data-[color=protea]:from-[#4a4028] dark:data-[color=protea]:to-[#3d3820] dark:data-[color=purple]:from-[#412c42] dark:data-[color=purple]:to-[#3c1a26] dark:data-[color=sunset]:from-[#4a3828] dark:data-[color=sunset]:to-[#4d2f2a]',
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay dark:opacity-25"
        style={{
          backgroundPosition: 'center',
          backgroundImage: noisePattern,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
