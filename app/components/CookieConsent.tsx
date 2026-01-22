"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="motly-cookie-consent"
      style={{
        background: "#171717",
        padding: "20px",
        alignItems: "center",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      }}
      buttonStyle={{
        background: "#3ab15b",
        color: "white",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "5px",
        fontWeight: "600",
        cursor: "pointer",
        border: "none",
      }}
      declineButtonStyle={{
        background: "#ff1100",
        color: "white",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "5px",
        fontWeight: "600",
        cursor: "pointer",
        border: "none",
        marginRight: "5px",
      }}
      expires={365}
      onAccept={() => {
        console.log("Cookies accepted");
        // Add your analytics or tracking code here
      }}
      onDecline={() => {
        console.log("Cookies declined");
        // Handle cookie rejection here
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "16px", lineHeight: "1.5" }}>
          🍪 We use cookies to enhance your browsing experience, serve
          personalized content, and analyze our traffic. By clicking
          &quot;Accept&quot;, you consent to our use of cookies.{" "}
          <a
            href="/privacy-policy"
            style={{
              color: "#60a5fa",
              textDecoration: "underline",
              fontWeight: "500",
            }}
          >
            Learn more
          </a>
        </span>
      </div>
    </CookieConsent>
  );
}
