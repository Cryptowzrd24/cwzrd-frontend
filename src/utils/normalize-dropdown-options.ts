export type DropdownOption = { label: string; value?: string };

function capitalizeFirst(input: string): string {
  const trimmed = (input ?? '').trim();
  if (!trimmed) return '';
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

function normalizeKey(input: string): string {
  return (input ?? '').trim().toLowerCase();
}

// Strings version: ["btc", "BTC", "Eth"] => ["Btc", "Eth"]
export function uniqueDropdownStrings(items: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const item of items ?? []) {
    const key = normalizeKey(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(capitalizeFirst(item));
  }

  return result;
}

// Options version: [{label:"btc"}, {label:"BTC"}] => [{label:"Btc"}]
// - Uniqueness is determined by label (case-insensitive)
// - Keeps the first occurrence's value as-is, only normalizes label casing
export function uniqueDropdownOptions<T extends DropdownOption>(
  items: T[]
): T[] {
  const seen = new Set<string>();
  const result: T[] = [];

  for (const item of items ?? []) {
    const key = normalizeKey(item?.label ?? '');
    if (!key || seen.has(key)) continue;
    seen.add(key);

    const normalized = {
      ...item,
      label: capitalizeFirst(item.label),
    } as T;

    result.push(normalized);
  }

  return result;
}