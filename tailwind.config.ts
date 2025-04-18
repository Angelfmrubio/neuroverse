
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'sans-serif'],
				display: ['Playfair Display', 'Montserrat', 'Segoe UI', 'system-ui', 'sans-serif'],
				mono: ['IBM Plex Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
				serif: ['Merriweather', 'Georgia', 'serif'],
			},
			fontSize: {
				'2xs': '0.625rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '3.75rem',
				'7xl': '4.5rem',
				'8xl': '6rem',
				'9xl': '8rem',
			},
			lineHeight: {
				'tighter': '1.15',
				'relaxed': '1.625',
				'loose': '2',
			},
			letterSpacing: {
				'tighter': '-0.04em',
				'tight': '-0.02em',
				'wide': '0.03em',
				'wider': '0.06em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				neuro: {
					purple: '#a78bfa',
					fuchsia: '#e879f9',
					deepblue: '#1e1b4b',
					violet: '#8b5cf6',
					lavender: '#ddd6fe',
					midnight: '#0f172a',
					teal: '#5eead4',
					amber: '#fcd34d',
					emerald: '#10b981',
					rose: '#fb7185',
					slate: '#94a3b8',
					gold: '#f59e0b',
					copper: '#b45309',
					ivory: '#f8fafc',
					charcoal: '#1e293b',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'hero-pattern': "url('/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'music-gradient': 'linear-gradient(135deg, #a78bfa 0%, #e879f9 100%)',
				'cool-white': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
				'warm-sunset': 'linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)',
				'purple-dream': 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
				'soft-nature': 'linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)',
				'deep-ocean': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
				'elegant': '0 10px 30px -3px rgba(0, 0, 0, 0.15)',
				'inner-glow': 'inset 0 2px 10px 0 rgba(255, 255, 255, 0.15)',
				'neon': '0 0 10px rgba(167, 139, 250, 0.5), 0 0 20px rgba(167, 139, 250, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				wave: {
					'0%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0.5)' },
					'100%': { transform: 'scaleY(1)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 6s ease-in-out infinite',
				'wave': 'wave 1.2s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
