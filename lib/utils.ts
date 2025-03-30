import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names with Tailwind CSS classes
 * Combines clsx and tailwind-merge for efficient class handling
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Delays execution for the specified milliseconds
 */
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Formats a number as currency
 */
export function formatCurrency(amount: number, currency = 'USD', locale = 'en-US'): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
}

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function(...args: Parameters<T>) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Creates a throttled function that only invokes func at most once per specified period
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let lastFunc: ReturnType<typeof setTimeout>;
    let lastRan: number = 0;

    return function(...args: Parameters<T>) {
        const context = this;
        const now = Date.now();

        if (now - lastRan >= limit) {
            func.apply(context, args);
            lastRan = now;
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (now - lastRan));
        }
    };
}

/**
 * Generates a random ID
 */
export function generateId(length = 8): string {
    return Math.random().toString(36).substring(2, length + 2);
}

/**
 * Returns true if running on the client-side, false on server-side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Parses and validates a color string (hex, rgb, rgba)
 */
export function isValidColor(color: string): boolean {
    const hexPattern = /^#([A-Fa-f0-9]{3}){1,2}$/;
    const rgbPattern = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;
    const rgbaPattern = /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/;

    return hexPattern.test(color) || rgbPattern.test(color) || rgbaPattern.test(color);
}

/**
 * Safely access deep object properties without throwing errors
 */
export function get<T>(obj: Record<string, any>, path: string, defaultValue: T): T {
    const keys = path.split('.');
    let result = obj;

    for (const key of keys) {
        if (result === undefined || result === null || typeof result !== 'object') {
            return defaultValue;
        }
        result = result[key];
    }

    return (result === undefined) ? defaultValue : result as T;
}
