/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
        "./assets/styles/**/*.css",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        function({addComponents}){
            addComponents({
                '.form-label': {
                    backgroundColor: '#1f2937',
                    width: '50%',
                    padding: '0.25rem',
                    color: 'white',
                    display: 'block',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                },
                '.form-field': {
                    display: 'block',
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                    outline: 'none',
                    '&:focus': {
                        boxShadow: '2px solid #3b82f6',
                    },
                },
                '.form-errors': {
                    backgroundColor: '#1f2937',
                    display: 'block',
                    width: '100%',
                    padding: '0.5rem',
                    color: 'red',
                },
                '.button-home': {
                    backgroundColor: '#1f2937',
                    color: 'white',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    borderRadius: '0.375rem',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: '#1f2937',
                    }
                }
            });
        }
    ],
}