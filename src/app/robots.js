export default function App() {
    return (
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/*',
        },
        sitemap: "http://localhost:3000/sitemap.xml",
    );
}