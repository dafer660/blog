module.exports = {
    // https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            display: ['Poppins', 'system-ui', 'sans-serif'],
            body: ['Poppins', 'system-ui', 'sans-serif'],
        },
        extend: {
            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
            minWidth: (theme) => ({
                ...theme('spacing'),
            }),
            maxWidth: (theme) => ({
                ...theme('spacing'),
            }),
        }
    },
    variants: {
        extend: {
            animation: ['motion-safe'],
        },
    },
    plugins: [],
}
