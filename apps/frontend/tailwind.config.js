const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './hooks/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
        './ui/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },

            colors: {
                primary: colors.teal[500],
                error: colors.red[500],
                success: colors.green[500],
                info: colors.blue[500],
                background: colors.zinc[900],
                copy: colors.zinc[100],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar')({
            nocompatible: true,
        }),
        require('tailwindcss-debug-screens'),
    ],
};
