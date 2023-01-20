/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./**/*.{html,vue,ts}'],
    theme: {
        extend: {
            container: {
                center: true,
            },
            fontFamily: {
                sans: ['"Source Sans 3Variable"', 'sans-serif'],
                serif: ['AlegreyaVariable', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: ['light'],
    },
};
