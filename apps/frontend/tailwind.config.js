/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './hooks/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-debug-screens'),
    ],
};
