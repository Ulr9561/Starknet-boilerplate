import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4F46E5",
                    dark: "#3730A3",
                    light: "#818CF8",
                },
                secondary: {
                    DEFAULT: "#EC4899",
                    success: "#10B981",
                    danger: "#EF4444",
                },
                neutral: {
                    light: "#F9FAFB",
                    DEFAULT: "#E5E7EB",
                    dark: "#374151",
                },
                dark: {
                    DEFAULT: "#111827",
                    lighter: "#1F2937",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
