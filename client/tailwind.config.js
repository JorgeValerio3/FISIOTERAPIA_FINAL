/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ufaal-blue': '#0A2540',
                'ufaal-blue-light': '#1E4C7A',
                'ufaal-white': '#FFFFFF',
                'ufaal-gray': '#F7F9FC',
                'ufaal-text': '#111827',
            },
            fontFamily: {
                sans: ['Inter', 'SF Pro Display', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
