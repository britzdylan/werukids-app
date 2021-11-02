module.exports = {
    // purge: [
    // './components/**/*.{vue,js}',
    // './layouts/**/*.vue',
    // './pages/**/*.vue',
    // './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontSize: {
        'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem'
      },
      extend: {
        colors: {
          title: '#333333',
          body: '#4D4D4D',
          label: '#2A61A8',
          placeholder: '#8FB6E9',
          line: '#CCCCCC',
          offwhite: '#FCFCFC',
          background: '#F9F9F9',
          inputBg: '#EFF0F6',
          primary: '#47A5DE',
          primaryLight: '#8FB6E9',
          primaryDark: '#186594',
          secondary: '#FFC000',
          secondaryLight: '#FFDD75',
          secondaryDark: '#9A8032',
          error : '#DA1D22',
          errorLight: '#FFDFE0',
          errorDark: '#981A1D',
          success : '#00BA77',
          successLight: '#EDFFF8',
          successDark: '#007A4E',
          warning: '#FFC000',
          warningLight: '#9F7C11',
          warningDark: '#F3EACF'
        },
        fontFamily: {
          display: ['Balsamiq-Sans', 'serif'],
          body: ['Poppins', 'serif'],
        },
      },
    },
    variants: {
      extend: {
       
      },
    },
}  