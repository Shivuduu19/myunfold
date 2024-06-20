import localFont from 'next/font/local'

const myfont = localFont({
    src: './FKDisplayTrial-Regular.otf',
    display: 'swap',
    variable: '--font-fk'
})

export const myfoldAlt = localFont({
    src: './FKDisplayTrial-RegularAlt.otf',
    display: 'swap',
    variable: '--font-fkAlt'
})

export const myfontGrotesk = localFont({
    src: './FKGroteskTrial-Regular.otf',
    display: 'swap',
    variable: '--font-grotesk'
})
export default myfont