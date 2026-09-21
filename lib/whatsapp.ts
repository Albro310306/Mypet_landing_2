const WHATSAPP_NUMBER = "51951401155";

export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}