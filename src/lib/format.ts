const cop = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 });

/** 38000 → "$38.000" (formato usado en el diseño). */
export function formatPrice(value: number): string {
  return `$${cop.format(value)}`;
}
