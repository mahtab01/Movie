import React from "react";

/**
 * کامپوننتی ساده که داخلش متن "مهتاب" را نمایش می‌دهد
 * فایل: /C:/Users/User/Desktop/tamrin/first-app/src/Compunet/test.jsx
 */
export default function Test() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: "120px",
                fontSize: "2rem",
                fontWeight: 600,
                direction: "rtl",
                gap: "0.5rem",
            }}
            aria-label="نمایش مهتاب"
        >
            <span role="img" aria-label="moon">
                🌙
            </span>
            <span>مهتاب</span>
        </div>
    );
}