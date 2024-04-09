/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'deltha': ['Deltha', 'sans-serif'],
        'foxus': ['FOXUS', 'sans-serif'],
        'segoe': ['Segoe', 'sans-serif'],
        'drexs': ['Drexs', 'sans-serif']
      },
      screens: {
        sxxs: "255px",
        sxs: "265px",
        sxs1: "275px",
        sxs2: "285px",
        sxs3: "295px",
        ss: "305px",
        ss1: "315px",
        ss2: "325px",
        ss3: "335px",
        ss4: "345px",
        dxs: "375px",
        xxs: "405px",
        xxs1: "425px",
        sm1: "480px",
        sm4: "508px",
        sm2: "538px",
        sm3: "550px",
        sm: "640px",
        md: "768px",
        md1: "870px",
        md2: "914px",
        md3: "936px",
        lg: "976px",
        dlg: "1024px",
        lg1: "1100px",
        lgx: "1134px",
        dxl: "1280px",
        xl: "1440px",
        xl2: "1600px"
      },
      keyframes: {
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.5, 0.5)' },
          '100%': { opacity: '1', transform: 'scale(1, 1)' },
        },
        slide: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },

      },
      animation: {
        pop: 'pop 0.5s cubic-bezier(0.26, 0.53, 0.74, 1.48) forwards',
        slide: 'slide 8s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-fast': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
}
