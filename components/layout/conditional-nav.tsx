"use client";

import { useEffect, useState } from "react";
import { VerticalNav } from "./vertical-nav";

export function ConditionalNav() {
    const [shouldHide, setShouldHide] = useState(false);

    useEffect(() => {
        // Check if we're on an error or not-found page by checking the document title or body class
        const checkErrorPage = () => {
            const isErrorPage = document.body.classList.contains('error-page') ||
                document.body.classList.contains('not-found-page');
            setShouldHide(isErrorPage);
        };

        checkErrorPage();

        // Listen for route changes
        const observer = new MutationObserver(checkErrorPage);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    if (shouldHide) {
        return null;
    }

    return <VerticalNav />;
}
