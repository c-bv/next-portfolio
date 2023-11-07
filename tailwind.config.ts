import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
    darkMode: ['class'],
    theme: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
};
export default config;
