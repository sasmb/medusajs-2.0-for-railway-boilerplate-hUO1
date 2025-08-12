import { HttpTypes } from "@medusajs/types"

// WhatsApp business configuration - Replace with your actual phone number in international format
// Example: "1234567890" for US number, "905338671466" for Turkey, etc.
export const WHATSAPP_BUSINESS_NUMBER = "1234567890" // Replace with your real WhatsApp business number

/**
 * Checks if an order was made using manual payment
 */
export function isManualPaymentOrder(order: HttpTypes.StoreOrder): boolean {
  const payment = order.payment_collections?.[0]?.payments?.[0]
  return payment?.provider_id?.startsWith("pp_system_default") || false
}

/**
 * Generates a WhatsApp URL with a pre-filled message
 */
export function generateWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_BUSINESS_NUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`
}

/**
 * Generates a comprehensive order confirmation message for WhatsApp
 */
export function generateOrderConfirmationMessage(order: HttpTypes.StoreOrder): string {
  const greeting = `Hi! I've successfully placed an order on your website.`
  
  const orderInfo = `
Order Details:
📋 Order Number: ${order.display_id}
📅 Order Date: ${new Date(order.created_at).toLocaleDateString()}
📧 Email: ${order.email}`

  const billingAddress = order.billing_address
  const addressInfo = billingAddress ? `
📍 Billing Address: ${billingAddress.first_name} ${billingAddress.last_name}, ${billingAddress.address_1}${billingAddress.address_2 ? ', ' + billingAddress.address_2 : ''}, ${billingAddress.city}, ${billingAddress.postal_code}, ${billingAddress.country_code?.toUpperCase()}` : ''

  const items = order.items || []
  const itemsList = items.length > 0 ? `
🛍️ Items Ordered:
${items.map(item => `• ${item.quantity}x ${item.title} - ${item.unit_price ? (item.unit_price / 100).toFixed(2) : 'N/A'} ${order.currency_code?.toUpperCase()}`).join('\n')}` : ''

  const total = order.total ? (order.total / 100).toFixed(2) : 'N/A'
  const totalInfo = `
💰 Total Amount: ${total} ${order.currency_code?.toUpperCase()}`

  const confirmation = `

I would like to confirm this order and proceed with any additional steps needed. Thank you!`

  return `${greeting}${orderInfo}${addressInfo}${itemsList}${totalInfo}${confirmation}`
}

/**
 * Opens WhatsApp with the order confirmation message
 */
export function sendOrderToWhatsApp(order: HttpTypes.StoreOrder): void {
  const message = generateOrderConfirmationMessage(order)
  const whatsappUrl = generateWhatsAppUrl(message)
  
  // Debug logging to help troubleshoot
  console.log('Generated WhatsApp message:', message)
  console.log('Generated WhatsApp URL:', whatsappUrl)
  
  // Open WhatsApp in a new tab/window
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
}
