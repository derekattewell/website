# Marketo Award Email Template - Implementation Guide

## 📋 Overview

This is a fully-coded Marketo Email 2.0 template based on the "Account Level Award Email Template v4" design from Figma.

## 🎨 Template Features

### ✅ What's Included:
- **Header Module**: Dual logo layout (Info-Tech + SoftwareReviews)
- **Hero Module**: Blue gradient background with award badge, company name, and statistics
- **Share Module**: Three feature callouts with icons
- **Footer CTA Module**: Blue gradient with Info-Tech branding
- **Footer Module**: Copyright and unsubscribe

### ✅ Technical Features:
- Fully responsive (mobile, tablet, desktop)
- Outlook-compatible (uses VML for gradients)
- Dark mode considerations
- Table-based layout (email-safe)
- Inline CSS for maximum compatibility
- All editable regions marked with Marketo classes

## 🚀 How to Implement in Marketo

### Step 1: Upload to Marketo
1. Go to **Design Studio** → **Email Templates**
2. Click **New** → **New Email Template**
3. Name it: "Award Email Template v4"
4. Copy and paste the HTML from `marketo-award-email-template.html`
5. Click **Create**

### Step 2: Add Variables
In Marketo Studio, add these Email Script Variables:

```
Name: emailSubject
Type: String
Default: "Congratulations on Your Champion Award!"

Name: ctaURL
Type: String
Default: "https://www.softwarereviews.com/claim-award"

Name: productCount
Type: String
Default: "3"

Name: categoryCount
Type: String
Default: "4"
```

### Step 3: Upload Images
You'll need to replace placeholder images with actual assets:

**Required Images:**
1. `left-logo.png` - Info-Tech logo (150px wide)
2. `right-logo.png` - SoftwareReviews logo (150px wide)
3. `award-badge.png` - 3D trophy award badge (200px wide, transparent background)
4. `hexagon-icon-1.png` - Hexagon icon for feature 1 (50px)
5. `hexagon-icon-2.png` - Hexagon icon for feature 2 (50px)
6. `hexagon-icon-3.png` - Hexagon icon for feature 3 (50px)
7. `footer-logo.png` - Info-Tech white logo (200px wide)

**Upload Process:**
1. Go to **Design Studio** → **Images and Files**
2. Upload all images
3. Copy the image URLs
4. Update the template's `mktoImg` src attributes

### Step 4: Create an Email from Template
1. Go to **Marketing Activities**
2. Right-click your program → **New Local Asset** → **Email**
3. Choose "Award Email Template v4"
4. Name your email
5. Edit content using the visual editor

## 📝 Editable Regions

### Text Regions (mktoText):
- **preheaderText**: Preview text (hidden in email)
- **companyName**: Company name (can use {{company.name}} token)
- **statusHeading**: Status headline
- **heroDescription**: Main description paragraph
- **awardsSummary**: Award summary text
- **championCount**: Number of champion awards
- **leaderCount**: Number of leader awards
- **secondaryCount**: Number of secondary awards
- **heroCTA**: Hero button text and link
- **shareHeading**: Section heading
- **feature1/2/3**: Feature callout content
- **footerHeading**: Footer section heading
- **footerDescription**: Footer description
- **footerCTA**: Footer button text and link
- **footerText**: Copyright text

### Image Regions (mktoImg):
- **leftLogo**: Top left logo
- **rightLogo**: Top right logo
- **awardBadge**: Award trophy image
- **icon1/2/3**: Feature icons
- **footerLogo**: Footer logo

## 🎨 Customization Options

### Change Colors:
Edit these inline styles in the HTML:

**Blue Gradient (Hero):**
```css
background: linear-gradient(180deg, #4A9FF5 0%, #2E5BFF 100%);
```

**CTA Button Color:**
```css
background-color: #00C9A7;
```

**Footer Gradient:**
```css
background: linear-gradient(180deg, #2E5BFF 0%, #1a3a9e 100%);
```

### Change Fonts:
Replace `Arial, Helvetica, sans-serif` with web-safe fonts:
- Arial (default)
- Helvetica
- Georgia
- Times New Roman
- Verdana
- Tahoma

**Note**: Custom web fonts often don't work in email clients. Stick with web-safe fonts.

## 📱 Testing Checklist

### Email Clients to Test:
- [ ] Gmail (Desktop & Mobile)
- [ ] Outlook 2016-2021 (Windows)
- [ ] Outlook 365 (Web)
- [ ] Apple Mail (iOS & macOS)
- [ ] Yahoo Mail
- [ ] Android Email App
- [ ] Samsung Email

### Testing Tools:
1. **Litmus** - Comprehensive email testing
2. **Email on Acid** - Cross-client preview
3. **Marketo Email Preview** - Built-in preview
4. **Send Test Emails** - Send to yourself on multiple devices

### Mobile Testing:
- [ ] Text is readable (minimum 14px)
- [ ] Buttons are tappable (minimum 44px height)
- [ ] Images scale properly
- [ ] Layout doesn't break
- [ ] CTAs are prominent

## 🔧 Common Issues & Fixes

### Issue: Gradients don't show in Outlook
**Solution**: The template includes VML code for Outlook gradient support. Ensure the VML blocks are intact.

### Issue: Images don't load
**Solution**:
- Host images on Marketo's CDN
- Use absolute URLs (not relative)
- Check image permissions

### Issue: Gmail clips the email
**Solution**:
- Keep email under 102KB
- Minimize inline CSS
- Remove unnecessary whitespace

### Issue: Button links don't track
**Solution**:
- Use Marketo's link tracking: `?mkt_tok={{system.mkt_tok}}`
- Enable link tracking in email settings

## 📊 Dynamic Content Ideas

### Personalization Tokens:
```
Hi {{lead.firstName}},
Your company, {{company.name}}, has won...
Based in {{lead.state}}...
```

### Conditional Content:
Show different content based on:
- Award type (Champion vs Leader)
- Number of awards won
- Industry
- Company size

### Example Dynamic Segment:
```html
<div class="mktoText" id="dynamicMessage">
    {{#if lead.awardType == "Champion"}}
        Congratulations on becoming a Champion!
    {{else}}
        Great job on your Leader award!
    {{/if}}
</div>
```

## 🚦 Pre-Launch Checklist

- [ ] All images uploaded and linked
- [ ] Placeholder text replaced
- [ ] Links tested (especially CTA buttons)
- [ ] Personalization tokens working
- [ ] Unsubscribe link present
- [ ] Preview text set
- [ ] Subject line set
- [ ] From name and email configured
- [ ] Test send to multiple email clients
- [ ] Mobile preview checked
- [ ] Spelling and grammar proofread
- [ ] Legal/compliance review (if required)

## 📈 Performance Optimization

### Best Practices:
1. **Image Optimization**:
   - Use PNG for logos (with transparency)
   - Use JPG for photos
   - Optimize file sizes (under 1MB total)
   - Use alt text for all images

2. **Loading Speed**:
   - Host images on fast CDN
   - Use compressed images
   - Limit total email size to under 100KB

3. **Engagement**:
   - Clear, prominent CTAs
   - Scannable content
   - Compelling subject line
   - Personalization

## 🆘 Need Help?

### Marketo Resources:
- [Marketo Email Syntax](https://experienceleague.adobe.com/docs/marketo/using/product-docs/email-marketing/general/email-editor-2/email-template-syntax.html)
- [Email Editor 2.0](https://experienceleague.adobe.com/docs/marketo/using/product-docs/email-marketing/general/email-editor-2/email-editor-v2-0-overview.html)

### Email Testing Tools:
- Litmus: https://litmus.com
- Email on Acid: https://www.emailonacid.com
- Can I Email: https://www.caniemail.com

### Questions?
If you need modifications or additional modules, let me know!

## 📦 Files Included

1. `marketo-award-email-template.html` - Main template file
2. `marketo-award-email-variables.txt` - Variable declarations
3. `MARKETO-IMPLEMENTATION-GUIDE.md` - This guide

---

**Version**: 1.0
**Last Updated**: January 2026
**Compatibility**: Marketo Email 2.0, All major email clients
