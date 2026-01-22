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
        background: "rgba(23, 23, 23, 0.6)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "20px",
        alignItems: "center",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
      buttonStyle={{
        background: "#ffff",
        color: "black",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "6px",
        fontWeight: "600",
        cursor: "pointer",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(4px)",
        marginRight: "5px",
      }}
      buttonClasses="cookie-consent-accept"
      declineButtonStyle={{
        background: "transparent",
        color: "#ffff",
        fontSize: "14px",
        padding: "10px 30px",
        borderRadius: "6px",
        fontWeight: "600",
        cursor: "pointer",
        border: "1px solid #ffff",
        marginRight: "5px",
      }}
      declineButtonClasses="cookie-consent-decline"
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
        <span style={{ fontSize: "16px", lineHeight: "1.5", color: "#fff" }}>
          🍪 We use cookies to enhance your browsing experience, serve
          personalized content, and analyze our traffic. By clicking
          &quot;Accept&quot;, you consent to our use of cookies.{" "}
          <a
            href="/privacy-policy"
            style={{
              color: "#a5f3fc",
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
