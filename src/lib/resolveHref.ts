export function resolveHref(href: string): string {
    const BASE = import.meta.env.BASE_URL ?? "/";

    if (!href) return BASE;
    if (href.startsWith("#")) return href;
    if (href.startsWith("http")) return href;

    return `${BASE}${href}`;
}