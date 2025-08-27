# Google AdSense Integration Setup

## 🎯 **AdSense Integration Complete**

Your BehindTheScenes.com website now has Google AdSense integration ready to display ads and generate revenue.

## 📋 **What's Been Added:**

### 🔧 **Google Ads Components:**
- `GoogleAds.jsx` - Main AdSense component
- `BannerAd` - 728x90 banner ads
- `ResponsiveAd` - Auto-responsive ads
- `InFeedAd` - In-feed native ads
- `SquareAd` - 300x250 square ads
- `SidebarAd` - 160x600 sidebar ads

### 📍 **Ad Placements Added:**

#### **Home Page:**
- Banner ad after hero section
- Responsive ad after featured movies
- In-feed ad between Hollywood/Bollywood sections
- Responsive ad before stats section

#### **Hollywood Page:**
- Banner ad after header
- Responsive ad before movies grid

#### **Bollywood Page:**
- Banner ad after header
- Responsive ad before movies grid

### 🔗 **AdSense Script Integration:**
- Added to main `index.html` file
- Includes SEO meta tags for better ad targeting
- Open Graph and Twitter Card meta tags

## ⚙️ **Setup Required:**

### 1. **Get Your AdSense Publisher ID:**
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up/Sign in with your Google account (dalveer.v.singh@gmail.com)
3. Add your website: `https://behindthescenes27aug.web.app`
4. Get your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXXX`)

### 2. **Update Publisher ID:**
Replace `ca-pub-XXXXXXXXXXXXXXXXX` in these files:
- `/src/components/GoogleAds.jsx` (line 4)
- `/index.html` (line 10)

### 3. **Create Ad Units:**
In your AdSense dashboard, create ad units and get slot IDs:
- Banner Ad Slot ID (replace `1234567890` in GoogleAds.jsx)
- Square Ad Slot ID (replace `0987654321` in GoogleAds.jsx)
- Sidebar Ad Slot ID (replace `1122334455` in GoogleAds.jsx)
- Responsive Ad Slot ID (replace `5566778899` in GoogleAds.jsx)
- In-feed Ad Slot ID (replace `9988776655` in GoogleAds.jsx)

### 4. **AdSense Approval Process:**
1. Submit your website for AdSense review
2. Ensure content quality and compliance
3. Wait for approval (usually 1-14 days)
4. Once approved, ads will start displaying

## 💰 **Revenue Optimization:**

### **Strategic Ad Placement:**
- ✅ Above the fold (hero section)
- ✅ Between content sections
- ✅ Before main content areas
- ✅ Non-intrusive positioning

### **Ad Types:**
- **Banner Ads**: High visibility, good for branding
- **Responsive Ads**: Adapt to all screen sizes
- **In-feed Ads**: Native, less intrusive
- **Square Ads**: Good performance, versatile

## 🎯 **Expected Revenue:**

With 800+ movies and quality behind-the-scenes content:
- **Traffic**: Movie enthusiasts, film students, industry professionals
- **Engagement**: High (video content, exclusive footage)
- **Demographics**: Global audience (Hollywood + Bollywood)
- **Revenue Potential**: $1-5 per 1000 page views (estimated)

## 📊 **Performance Tracking:**

Monitor in AdSense dashboard:
- Page RPM (Revenue per 1000 impressions)
- Click-through rates (CTR)
- Ad viewability
- Top performing ad units

## 🚀 **Next Steps:**

1. **Apply for AdSense** with your Google account
2. **Update Publisher ID** in the code
3. **Create ad units** and update slot IDs
4. **Deploy updated website** to Firebase
5. **Submit for review** and wait for approval
6. **Monitor performance** and optimize placement

Your website is now **AdSense-ready** and positioned for monetization! 🎬💰

