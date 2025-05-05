import LoginForm from '../../components/LoginForm';
import { BASE_URL } from '../../constant';

export const metadata = {
    title: 'Login to Your Account | MyApp',
    description: 'Access your MyApp account securely and easily from anywhere.',
    keywords: ['login', 'sign in', 'account access', 'MyApp'],
    robots: 'index, follow',
    openGraph: {
        title: 'Login to Your Account | MyApp',
        description: 'Access your MyApp account securely and easily from anywhere.',
        url: `${BASE_URL}/login`,
        siteName: 'MyApp',
        images: [
            {
                url: `${BASE_URL}/images/product_listing.png`,
                width: 1200,
                height: 630,
                alt: 'Login - MyApp',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Login to Your Account | MyApp',
        description: 'Access your MyApp account securely and easily from anywhere.',
        images: [`${BASE_URL}/images/product_listing.png`],
    },
};

export default function LoginPage() {
    return <LoginForm />;
}
