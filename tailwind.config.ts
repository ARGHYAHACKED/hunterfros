import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                accent: '#e2ff00', // Neon Lime / Electric Green
            },
            fontFamily: {
                plain: ['Plain', 'Arial', 'sans-serif'],
            },
        },
    },
    content: [
        './app/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './plugins/**/*.{vue,js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
}
