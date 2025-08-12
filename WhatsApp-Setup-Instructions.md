# WhatsApp Integration Setup Instructions

## 🚨 **IMPORTANT: Phone Number Configuration Required**

The WhatsApp integration is currently set up with a placeholder phone number. **You MUST replace it with your actual WhatsApp business number** for it to work.

## 📱 **Step 1: Get Your WhatsApp Business Number**

1. **Format Required**: International format without spaces, dashes, or plus signs
2. **Examples**:
   - US number: `1234567890` (for +1-234-567-8900)
   - Turkey number: `905338671466` (for +90 533 867 14 66)
   - UK number: `447700123456` (for +44 7700 123456)

## 🔧 **Step 2: Update the Configuration**

Edit the file: `storefront/src/lib/whatsapp.ts`

**Find this line:**
```typescript
export const WHATSAPP_BUSINESS_NUMBER = "1234567890" // Replace with your real WhatsApp business number
```

**Replace with your number:**
```typescript
export const WHATSAPP_BUSINESS_NUMBER = "YOUR_ACTUAL_WHATSAPP_NUMBER"
```

### Examples:
```typescript
// For Turkey number +90 533 867 14 66
export const WHATSAPP_BUSINESS_NUMBER = "905338671466"

// For US number +1 (555) 123-4567
export const WHATSAPP_BUSINESS_NUMBER = "15551234567"

// For UK number +44 7700 900123
export const WHATSAPP_BUSINESS_NUMBER = "447700900123"
```

## ✅ **Step 3: Test the Integration**

1. **Build and deploy** your application
2. **Place a manual payment order** in your store
3. **Check the order confirmation page** - you should see the WhatsApp button
4. **Click "Complete with WhatsApp"** - it should open WhatsApp with your business number

## 🔗 **Test URLs**

After setting your number, test URLs will look like:
```
https://api.whatsapp.com/send/?phone=YOUR_NUMBER&text=Hi!%20Test%20message&type=phone_number&app_absent=0
```

**Working Example** (from the search results):
```
https://api.whatsapp.com/send/?phone=905338671466&text=Hi%2C+my+name+is+Samuel...
```

## ⚠️ **Important Notes**

- **Only works with real WhatsApp numbers** that have WhatsApp installed
- **Test thoroughly** before going live with customers
- **The number must be active** on WhatsApp Business or regular WhatsApp
- **International format required** - no spaces, dashes, or country code symbols

## 🎯 **Expected Behavior**

Once configured correctly:
1. Manual payment customers see "Complete with WhatsApp" button
2. Clicking opens WhatsApp chat with your business number
3. Message is pre-filled with complete order details
4. Customer can send directly to start conversation with you

---

**Need help?** Make sure your WhatsApp number is in the exact international format without any symbols or spaces!
