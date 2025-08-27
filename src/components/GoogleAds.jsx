import React, { useEffect } from 'react';

// Google AdSense Component
const GoogleAds = ({ 
  adClient = "ca-pub-5737444505564075", // Replace with your AdSense publisher ID
  adSlot,
  adFormat = "auto",
  adLayout = "",
  adLayoutKey = "",
  style = {},
  className = ""
}) => {
  useEffect(() => {
    try {
      // Load AdSense script if not already loaded
      if (!window.adsbygoogle) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + adClient;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
      
      // Push ads to AdSense
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adClient]);

  return (
    <div className={`ads-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-ad-layout-key={adLayoutKey}
        data-full-width-responsive="true"
      />
    </div>
  );
};

// Banner Ad Component (728x90 or responsive)
export const BannerAd = ({ className = "my-4" }) => (
  <GoogleAds
    adSlot="1234567890" // Replace with your ad slot ID
    adFormat="auto"
    className={className}
    style={{ minHeight: '90px' }}
  />
);

// Square Ad Component (300x250)
export const SquareAd = ({ className = "my-4" }) => (
  <GoogleAds
    adSlot="0987654321" // Replace with your ad slot ID
    adFormat="rectangle"
    className={className}
    style={{ width: '300px', height: '250px' }}
  />
);

// Sidebar Ad Component (160x600)
export const SidebarAd = ({ className = "my-4" }) => (
  <GoogleAds
    adSlot="1122334455" // Replace with your ad slot ID
    adFormat="vertical"
    className={className}
    style={{ width: '160px', height: '600px' }}
  />
);

// Responsive Ad Component
export const ResponsiveAd = ({ className = "my-4" }) => (
  <GoogleAds
    adSlot="5566778899" // Replace with your ad slot ID
    adFormat="auto"
    className={className}
    style={{ minHeight: '100px' }}
  />
);

// In-feed Ad Component
export const InFeedAd = ({ className = "my-4" }) => (
  <GoogleAds
    adSlot="9988776655" // Replace with your ad slot ID
    adFormat="fluid"
    adLayout="in-article"
    className={className}
    style={{ minHeight: '150px' }}
  />
);

export default GoogleAds;

