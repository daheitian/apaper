module.exports = {
  content: ['./src/**/*.html','./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#4938B1',
          dark: '#5B4AD3',
          DEFAULT: '#715CFF',
          light: 'rgba(113, 92, 255, 0.4)',
        },
        dark:{
          title: 'rgba(0, 0, 0, 0.9)',
          DEFAULT: 'rgba(0, 0, 0, 0.8)',
          secondary: 'rgba(0, 0, 0, 0.6)',
          disable:'rgba(0, 0, 0, 0.35)',
          border:'rgba(0, 0, 0, 0.15)',
          bg:'rgba(0, 0, 0, 0.06)',
          bglight:'rgba(0, 0, 0, 0.02)',
        },
        light:{
          title: 'rgba(255, 255, 255, 1)',
          DEFAULT: 'rgba(255, 255, 255, 0.8)',
          secondary: 'rgba(255, 255, 255, 0.6)',
          disable:'rgba(255, 255, 255, 0.45)',
          border:'rgba(255, 255, 255, 0.3)',
          bg:'rgba(255, 255, 255, 0.2)',
          bglight:'rgba(255, 255, 255, 0.1)',
        },
        notice:{
          DEFAULT: '#3396FF',
          bg:'#EBF4FF'
        },
        error:{
          DEFAULT: '#FF3F3F',
          bg:'#FFF0F0'
        },
        success:{
          DEFAULT: '#76D219',
          bg:'#F1FBE8'
        },
        warning:{
          DEFAULT: '#FFAA00',
          bg:'#FFF9EB'
        },
        lightpink:{
          DEFAULT: '#FF4FB8'
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
