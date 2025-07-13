import { persisted } from 'svelte-persisted-store';

export const theme = persisted<'light' | 'dark'>('theme', 'dark');
