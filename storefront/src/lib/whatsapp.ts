import { HttpTypes } from "@medusajs/types"

// WhatsApp business configuration
export const WHATSAPP_BUSINESS_NUMBER = "5P5CGNT7H4U4A1"
export const WHATSAPP_API_URL = "wa.me/message"

/**
 * Generates a WhatsApp URL with a pre-filled message
 */
export function generateWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://${WHATSAPP_API_URL}/${WHATSAPP_BUSINESS_NUMBER}?text=${encodedMessage}`
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
  
  // Open WhatsApp in a new tab/window
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
}
