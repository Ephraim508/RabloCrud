// app/layout.tsx
"use client";

import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the import path as necessary
import { metadata } from './metadata'; // Import metadata

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="en">
                <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                </head>
                <body>{children}</body>
            </html>
        </Provider>
    );
}
