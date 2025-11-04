import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
	variable: "--font-urbanist",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "JabssDev Portfolio Particles 👨🏻‍💻",
	description: "Portfolio website by JabssDev with particle effects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${urbanist.variable} antialiased`}>{children}</body>
		</html>
	);
}
