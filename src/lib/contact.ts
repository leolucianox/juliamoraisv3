export const WHATSAPP_NUMBER = "5511912345678";
export const WHATSAPP_DISPLAY = "+55 11 91234-5678";
export const INSTAGRAM_HANDLE = "@juliamorais.tattoo";
export const INSTAGRAM_URL = "https://instagram.com/juliamorais.tattoo";
export const EMAIL = "contato@juliamorais.tattoo";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
