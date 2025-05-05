import SignUpForm from "../../components/SignUpForm";
import type { Metadata } from "next";
import { BASE_URL } from "../../constant";

export const metadata: Metadata = {
  title: "Create an Account | nxtWave-plp",
  description: "Sign up for a new account to get started with MyApp. Enjoy exclusive features and tools.",
  keywords: ["signup", "register", "create account", "MyApp"],
  robots: "index, follow",
  openGraph: {
    title: "Create an Account | MyApp",
    description: "Join MyApp today and unlock your full potential.",
    url: `${BASE_URL}/signup`,
    siteName: "MyApp",
    images: [
      {
        url: `${BASE_URL}/images/product_listing.png`,
        width: 1200,
        height: 630,
        alt: "Signup - MyApp",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create an Account | nxtWave-plp",
    description: "Join MyApp today and unlock your full potential.",
    images: [`${BASE_URL}/images/product_listing.png`],
  },
};

export default function SignupPage() {
  return <SignUpForm />;
}
