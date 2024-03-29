import { css } from "lit";

export default css`
  :root,
  :host,
  .moyo-theme-light {
    --moyo-color-gray-50: hsl(0 0% 97.5%);
    --moyo-color-gray-100: hsl(240 4.8% 95.9%);
    --moyo-color-gray-200: hsl(240 5.9% 90%);
    --moyo-color-gray-300: hsl(240 4.9% 83.9%);
    --moyo-color-gray-400: hsl(240 5% 64.9%);
    --moyo-color-gray-500: hsl(240 3.8% 46.1%);
    --moyo-color-gray-600: hsl(240 5.2% 33.9%);
    --moyo-color-gray-700: hsl(240 5.3% 26.1%);
    --moyo-color-gray-800: hsl(240 3.7% 15.9%);
    --moyo-color-gray-900: hsl(240 5.9% 10%);
    --moyo-color-gray-950: hsl(240 7.3% 8%);

    --moyo-color-red-50: hsl(0 85.7% 97.3%);
    --moyo-color-red-100: hsl(0 93.3% 94.1%);
    --moyo-color-red-200: hsl(0 96.3% 89.4%);
    --moyo-color-red-300: hsl(0 93.5% 81.8%);
    --moyo-color-red-400: hsl(0 90.6% 70.8%);
    --moyo-color-red-500: hsl(0 84.2% 60.2%);
    --moyo-color-red-600: hsl(0 72.2% 50.6%);
    --moyo-color-red-700: hsl(0 73.7% 41.8%);
    --moyo-color-red-800: hsl(0 70% 35.3%);
    --moyo-color-red-900: hsl(0 62.8% 30.6%);
    --moyo-color-red-950: hsl(0 60% 19.6%);

    --moyo-color-orange-50: hsl(33.3 100% 96.5%);
    --moyo-color-orange-100: hsl(34.3 100% 91.8%);
    --moyo-color-orange-200: hsl(32.1 97.7% 83.1%);
    --moyo-color-orange-300: hsl(30.7 97.2% 72.4%);
    --moyo-color-orange-400: hsl(27 96% 61%);
    --moyo-color-orange-500: hsl(24.6 95% 53.1%);
    --moyo-color-orange-600: hsl(20.5 90.2% 48.2%);
    --moyo-color-orange-700: hsl(17.5 88.3% 40.4%);
    --moyo-color-orange-800: hsl(15 79.1% 33.7%);
    --moyo-color-orange-900: hsl(15.3 74.6% 27.8%);
    --moyo-color-orange-950: hsl(15.2 69.1% 19%);

    --moyo-color-amber-50: hsl(48 100% 96.1%);
    --moyo-color-amber-100: hsl(48 96.5% 88.8%);
    --moyo-color-amber-200: hsl(48 96.6% 76.7%);
    --moyo-color-amber-300: hsl(45.9 96.7% 64.5%);
    --moyo-color-amber-400: hsl(43.3 96.4% 56.3%);
    --moyo-color-amber-500: hsl(37.7 92.1% 50.2%);
    --moyo-color-amber-600: hsl(32.1 94.6% 43.7%);
    --moyo-color-amber-700: hsl(26 90.5% 37.1%);
    --moyo-color-amber-800: hsl(22.7 82.5% 31.4%);
    --moyo-color-amber-900: hsl(21.7 77.8% 26.5%);
    --moyo-color-amber-950: hsl(22.9 74.1% 16.7%);

    --moyo-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --moyo-color-yellow-100: hsl(54.9 96.7% 88%);
    --moyo-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --moyo-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --moyo-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --moyo-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --moyo-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --moyo-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --moyo-color-yellow-800: hsl(31.8 81% 28.8%);
    --moyo-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --moyo-color-yellow-950: hsl(33.1 69% 13.9%);

    --moyo-color-lime-50: hsl(78.3 92% 95.1%);
    --moyo-color-lime-100: hsl(79.6 89.1% 89.2%);
    --moyo-color-lime-200: hsl(80.9 88.5% 79.6%);
    --moyo-color-lime-300: hsl(82 84.5% 67.1%);
    --moyo-color-lime-400: hsl(82.7 78% 55.5%);
    --moyo-color-lime-500: hsl(83.7 80.5% 44.3%);
    --moyo-color-lime-600: hsl(84.8 85.2% 34.5%);
    --moyo-color-lime-700: hsl(85.9 78.4% 27.3%);
    --moyo-color-lime-800: hsl(86.3 69% 22.7%);
    --moyo-color-lime-900: hsl(87.6 61.2% 20.2%);
    --moyo-color-lime-950: hsl(86.5 60.6% 13.9%);

    --moyo-color-green-50: hsl(138.5 76.5% 96.7%);
    --moyo-color-green-100: hsl(140.6 84.2% 92.5%);
    --moyo-color-green-200: hsl(141 78.9% 85.1%);
    --moyo-color-green-300: hsl(141.7 76.6% 73.1%);
    --moyo-color-green-400: hsl(141.9 69.2% 58%);
    --moyo-color-green-500: hsl(142.1 70.6% 45.3%);
    --moyo-color-green-600: hsl(142.1 76.2% 36.3%);
    --moyo-color-green-700: hsl(142.4 71.8% 29.2%);
    --moyo-color-green-800: hsl(142.8 64.2% 24.1%);
    --moyo-color-green-900: hsl(143.8 61.2% 20.2%);
    --moyo-color-green-950: hsl(144.3 60.7% 12%);

    --moyo-color-emerald-50: hsl(151.8 81% 95.9%);
    --moyo-color-emerald-100: hsl(149.3 80.4% 90%);
    --moyo-color-emerald-200: hsl(152.4 76% 80.4%);
    --moyo-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --moyo-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --moyo-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --moyo-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --moyo-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --moyo-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --moyo-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --moyo-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --moyo-color-teal-50: hsl(166.2 76.5% 96.7%);
    --moyo-color-teal-100: hsl(167.2 85.5% 89.2%);
    --moyo-color-teal-200: hsl(168.4 83.8% 78.2%);
    --moyo-color-teal-300: hsl(170.6 76.9% 64.3%);
    --moyo-color-teal-400: hsl(172.5 66% 50.4%);
    --moyo-color-teal-500: hsl(173.4 80.4% 40%);
    --moyo-color-teal-600: hsl(174.7 83.9% 31.6%);
    --moyo-color-teal-700: hsl(175.3 77.4% 26.1%);
    --moyo-color-teal-800: hsl(176.1 69.4% 21.8%);
    --moyo-color-teal-900: hsl(175.9 60.8% 19%);
    --moyo-color-teal-950: hsl(176.5 58.6% 11.4%);

    --moyo-color-cyan-50: hsl(183.2 100% 96.3%);
    --moyo-color-cyan-100: hsl(185.1 95.9% 90.4%);
    --moyo-color-cyan-200: hsl(186.2 93.5% 81.8%);
    --moyo-color-cyan-300: hsl(187 92.4% 69%);
    --moyo-color-cyan-400: hsl(187.9 85.7% 53.3%);
    --moyo-color-cyan-500: hsl(188.7 94.5% 42.7%);
    --moyo-color-cyan-600: hsl(191.6 91.4% 36.5%);
    --moyo-color-cyan-700: hsl(192.9 82.3% 31%);
    --moyo-color-cyan-800: hsl(194.4 69.6% 27.1%);
    --moyo-color-cyan-900: hsl(196.4 63.6% 23.7%);
    --moyo-color-cyan-950: hsl(196.8 61% 16.1%);

    --moyo-color-sky-50: hsl(204 100% 97.1%);
    --moyo-color-sky-100: hsl(204 93.8% 93.7%);
    --moyo-color-sky-200: hsl(200.6 94.4% 86.1%);
    --moyo-color-sky-300: hsl(199.4 95.5% 73.9%);
    --moyo-color-sky-400: hsl(198.4 93.2% 59.6%);
    --moyo-color-sky-500: hsl(198.6 88.7% 48.4%);
    --moyo-color-sky-600: hsl(200.4 98% 39.4%);
    --moyo-color-sky-700: hsl(201.3 96.3% 32.2%);
    --moyo-color-sky-800: hsl(201 90% 27.5%);
    --moyo-color-sky-900: hsl(202 80.3% 23.9%);
    --moyo-color-sky-950: hsl(202.3 73.8% 16.5%);

    --moyo-color-blue-50: hsl(213.8 100% 96.9%);
    --moyo-color-blue-100: hsl(214.3 94.6% 92.7%);
    --moyo-color-blue-200: hsl(213.3 96.9% 87.3%);
    --moyo-color-blue-300: hsl(211.7 96.4% 78.4%);
    --moyo-color-blue-400: hsl(213.1 93.9% 67.8%);
    --moyo-color-blue-500: hsl(217.2 91.2% 59.8%);
    --moyo-color-blue-600: hsl(221.2 83.2% 53.3%);
    --moyo-color-blue-700: hsl(224.3 76.3% 48%);
    --moyo-color-blue-800: hsl(225.9 70.7% 40.2%);
    --moyo-color-blue-900: hsl(224.4 64.3% 32.9%);
    --moyo-color-blue-950: hsl(226.2 55.3% 18.4%);

    --moyo-color-indigo-50: hsl(225.9 100% 96.7%);
    --moyo-color-indigo-100: hsl(226.5 100% 93.9%);
    --moyo-color-indigo-200: hsl(228 96.5% 88.8%);
    --moyo-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --moyo-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --moyo-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --moyo-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --moyo-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --moyo-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --moyo-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --moyo-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --moyo-color-violet-50: hsl(250 100% 97.6%);
    --moyo-color-violet-100: hsl(251.4 91.3% 95.5%);
    --moyo-color-violet-200: hsl(250.5 95.2% 91.8%);
    --moyo-color-violet-300: hsl(252.5 94.7% 85.1%);
    --moyo-color-violet-400: hsl(255.1 91.7% 76.3%);
    --moyo-color-violet-500: hsl(258.3 89.5% 66.3%);
    --moyo-color-violet-600: hsl(262.1 83.3% 57.8%);
    --moyo-color-violet-700: hsl(263.4 70% 50.4%);
    --moyo-color-violet-800: hsl(263.4 69.3% 42.2%);
    --moyo-color-violet-900: hsl(263.5 67.4% 34.9%);
    --moyo-color-violet-950: hsl(265.1 61.5% 21.4%);

    --moyo-color-purple-50: hsl(270 100% 98%);
    --moyo-color-purple-100: hsl(268.7 100% 95.5%);
    --moyo-color-purple-200: hsl(268.6 100% 91.8%);
    --moyo-color-purple-300: hsl(269.2 97.4% 85.1%);
    --moyo-color-purple-400: hsl(270 95.2% 75.3%);
    --moyo-color-purple-500: hsl(270.7 91% 65.1%);
    --moyo-color-purple-600: hsl(271.5 81.3% 55.9%);
    --moyo-color-purple-700: hsl(272.1 71.7% 47.1%);
    --moyo-color-purple-800: hsl(272.9 67.2% 39.4%);
    --moyo-color-purple-900: hsl(273.6 65.6% 32%);
    --moyo-color-purple-950: hsl(276 59.5% 16.5%);

    --moyo-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --moyo-color-fuchsia-100: hsl(287 100% 95.5%);
    --moyo-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --moyo-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --moyo-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --moyo-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --moyo-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --moyo-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --moyo-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --moyo-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --moyo-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --moyo-color-pink-50: hsl(327.3 73.3% 97.1%);
    --moyo-color-pink-100: hsl(325.7 77.8% 94.7%);
    --moyo-color-pink-200: hsl(325.9 84.6% 89.8%);
    --moyo-color-pink-300: hsl(327.4 87.1% 81.8%);
    --moyo-color-pink-400: hsl(328.6 85.5% 70.2%);
    --moyo-color-pink-500: hsl(330.4 81.2% 60.4%);
    --moyo-color-pink-600: hsl(333.3 71.4% 50.6%);
    --moyo-color-pink-700: hsl(335.1 77.6% 42%);
    --moyo-color-pink-800: hsl(335.8 74.4% 35.3%);
    --moyo-color-pink-900: hsl(335.9 69% 30.4%);
    --moyo-color-pink-950: hsl(336.2 65.4% 15.9%);

    --moyo-color-rose-50: hsl(355.7 100% 97.3%);
    --moyo-color-rose-100: hsl(355.6 100% 94.7%);
    --moyo-color-rose-200: hsl(352.7 96.1% 90%);
    --moyo-color-rose-300: hsl(352.6 95.7% 81.8%);
    --moyo-color-rose-400: hsl(351.3 94.5% 71.4%);
    --moyo-color-rose-500: hsl(349.7 89.2% 60.2%);
    --moyo-color-rose-600: hsl(346.8 77.2% 49.8%);
    --moyo-color-rose-700: hsl(345.3 82.7% 40.8%);
    --moyo-color-rose-800: hsl(343.4 79.7% 34.7%);
    --moyo-color-rose-900: hsl(341.5 75.5% 30.4%);
    --moyo-color-rose-950: hsl(341.3 70.1% 17.1%);

    --moyo-color-primary-50: var(--moyo-color-pink-50);
    --moyo-color-primary-100: var(--moyo-color-pink-100);
    --moyo-color-primary-200: var(--moyo-color-pink-200);
    --moyo-color-primary-300: var(--moyo-color-pink-300);
    --moyo-color-primary-400: var(--moyo-color-pink-400);
    --moyo-color-primary-500: var(--moyo-color-pink-500);
    --moyo-color-primary-600: var(--moyo-color-pink-600);
    --moyo-color-primary-700: var(--moyo-color-pink-700);
    --moyo-color-primary-800: var(--moyo-color-pink-800);
    --moyo-color-primary-900: var(--moyo-color-pink-900);
    --moyo-color-primary-950: var(--moyo-color-pink-950);

    --moyo-color-success-50: var(--moyo-color-green-50);
    --moyo-color-success-100: var(--moyo-color-green-100);
    --moyo-color-success-200: var(--moyo-color-green-200);
    --moyo-color-success-300: var(--moyo-color-green-300);
    --moyo-color-success-400: var(--moyo-color-green-400);
    --moyo-color-success-500: var(--moyo-color-green-500);
    --moyo-color-success-600: var(--moyo-color-green-600);
    --moyo-color-success-700: var(--moyo-color-green-700);
    --moyo-color-success-800: var(--moyo-color-green-800);
    --moyo-color-success-900: var(--moyo-color-green-900);
    --moyo-color-success-950: var(--moyo-color-green-950);

    --moyo-color-warning-50: var(--moyo-color-amber-50);
    --moyo-color-warning-100: var(--moyo-color-amber-100);
    --moyo-color-warning-200: var(--moyo-color-amber-200);
    --moyo-color-warning-300: var(--moyo-color-amber-300);
    --moyo-color-warning-400: var(--moyo-color-amber-400);
    --moyo-color-warning-500: var(--moyo-color-amber-500);
    --moyo-color-warning-600: var(--moyo-color-amber-600);
    --moyo-color-warning-700: var(--moyo-color-amber-700);
    --moyo-color-warning-800: var(--moyo-color-amber-800);
    --moyo-color-warning-900: var(--moyo-color-amber-900);
    --moyo-color-warning-950: var(--moyo-color-amber-950);

    --moyo-color-danger-50: var(--moyo-color-red-50);
    --moyo-color-danger-100: var(--moyo-color-red-100);
    --moyo-color-danger-200: var(--moyo-color-red-200);
    --moyo-color-danger-300: var(--moyo-color-red-300);
    --moyo-color-danger-400: var(--moyo-color-red-400);
    --moyo-color-danger-500: var(--moyo-color-red-500);
    --moyo-color-danger-600: var(--moyo-color-red-600);
    --moyo-color-danger-700: var(--moyo-color-red-700);
    --moyo-color-danger-800: var(--moyo-color-red-800);
    --moyo-color-danger-900: var(--moyo-color-red-900);
    --moyo-color-danger-950: var(--moyo-color-red-950);

    --moyo-color-neutral-50: var(--moyo-color-gray-50);
    --moyo-color-neutral-100: var(--moyo-color-gray-100);
    --moyo-color-neutral-200: var(--moyo-color-gray-200);
    --moyo-color-neutral-300: var(--moyo-color-gray-300);
    --moyo-color-neutral-400: var(--moyo-color-gray-400);
    --moyo-color-neutral-500: var(--moyo-color-gray-500);
    --moyo-color-neutral-600: var(--moyo-color-gray-600);
    --moyo-color-neutral-700: var(--moyo-color-gray-700);
    --moyo-color-neutral-800: var(--moyo-color-gray-800);
    --moyo-color-neutral-900: var(--moyo-color-gray-900);
    --moyo-color-neutral-950: var(--moyo-color-gray-950);

    --moyo-color-neutral-0: hsl(0, 0%, 100%);
    --moyo-color-neutral-1000: hsl(0, 0%, 0%);

    --moyo-border-radius-small: 0.1875rem;
    --moyo-border-radius-medium: 0.25rem;
    --moyo-border-radius-large: 0.5rem;
    --moyo-border-radius-x-large: 1rem;

    --moyo-border-radius-circle: 50%;
    --moyo-border-radius-pill: 9999px;

    --moyo-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --moyo-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --moyo-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --moyo-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --moyo-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

    --moyo-spacing-3x-small: 0.125rem;
    --moyo-spacing-2x-small: 0.25rem;
    --moyo-spacing-x-small: 0.5rem;
    --moyo-spacing-small: 0.75rem;
    --moyo-spacing-medium: 1rem;
    --moyo-spacing-large: 1.25rem;
    --moyo-spacing-x-large: 1.75rem;
    --moyo-spacing-2x-large: 2.25rem;
    --moyo-spacing-3x-large: 3rem;
    --moyo-spacing-4x-large: 4.5rem;

    --moyo-transition-x-slow: 1000ms;
    --moyo-transition-slow: 500ms;
    --moyo-transition-medium: 250ms;
    --moyo-transition-fast: 150ms;
    --moyo-transition-x-fast: 50ms;

    --moyo-font-mono: SFMono-Regular, Consolas, "IBMPlexMono", Menlo, monospace;
    --moyo-font-sans: "Aeonik", -apple-system, BlinkMacSystemFont, "CircularStd",
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    --moyo-font-serif: Georgia, "Times New Roman", serif;

    --moyo-font-size-2x-small: 0.625rem;
    --moyo-font-size-x-small: 0.75rem;
    --moyo-font-size-small: 0.875rem;
    --moyo-font-size-medium: 1rem;
    --moyo-font-size-large: 1.25rem;
    --moyo-font-size-x-large: 1.5rem;
    --moyo-font-size-2x-large: 2.25rem;
    --moyo-font-size-3x-large: 3rem;
    --moyo-font-size-4x-large: 4.5rem;

    --moyo-font-weight-light: 300;
    --moyo-font-weight-normal: 400;
    --moyo-font-weight-semibold: 500;
    --moyo-font-weight-bold: 700;

    --moyo-letter-spacing-denser: -0.03em;
    --moyo-letter-spacing-dense: -0.015em;
    --moyo-letter-spacing-normal: normal;
    --moyo-letter-spacing-loose: 0.075em;
    --moyo-letter-spacing-looser: 0.15em;

    --moyo-line-height-denser: 1;
    --moyo-line-height-dense: 1.4;
    --moyo-line-height-normal: 1.8;
    --moyo-line-height-loose: 2.2;
    --moyo-line-height-looser: 2.6;

    --moyo-focus-ring-alpha: 40%;
    --moyo-focus-ring-width: 3px;
    --moyo-focus-ring: 0 0 0 var(--moyo-focus-ring-width)
      hsl(198.6 88.7% 48.4% / var(--moyo-focus-ring-alpha));

    --moyo-button-font-size-small: var(--moyo-font-size-x-small);
    --moyo-button-font-size-medium: var(--moyo-font-size-small);
    --moyo-button-font-size-large: var(--moyo-font-size-medium);

    --moyo-input-height-small: 1.875rem;
    --moyo-input-height-medium: 2.5rem;
    --moyo-input-height-large: 3.125rem;

    --moyo-input-background-color: var(--moyo-color-neutral-0);
    --moyo-input-background-color-hover: var(--moyo-input-background-color);
    --moyo-input-background-color-focus: var(--moyo-input-background-color);
    --moyo-input-background-color-disabled: var(--moyo-color-neutral-100);
    --moyo-input-border-color: var(--moyo-color-neutral-300);
    --moyo-input-border-color-hover: var(--moyo-color-neutral-400);
    --moyo-input-border-color-focus: var(--moyo-color-primary-500);
    --moyo-input-border-color-disabled: var(--moyo-color-neutral-300);
    --moyo-input-border-width: 1px;

    --moyo-input-border-radius-small: var(--moyo-border-radius-medium);
    --moyo-input-border-radius-medium: var(--moyo-border-radius-medium);
    --moyo-input-border-radius-large: var(--moyo-border-radius-medium);

    --moyo-input-font-family: var(--moyo-font-sans);
    --moyo-input-font-weight: var(--moyo-font-weight-normal);
    --moyo-input-font-size-small: var(--moyo-font-size-small);
    --moyo-input-font-size-medium: var(--moyo-font-size-medium);
    --moyo-input-font-size-large: var(--moyo-font-size-large);
    --moyo-input-letter-spacing: var(--moyo-letter-spacing-normal);

    --moyo-input-color: var(--moyo-color-neutral-700);
    --moyo-input-color-hover: var(--moyo-color-neutral-700);
    --moyo-input-color-focus: var(--moyo-color-neutral-700);
    --moyo-input-color-disabled: var(--moyo-color-neutral-900);
    --moyo-input-icon-color: var(--moyo-color-neutral-500);
    --moyo-input-icon-color-hover: var(--moyo-color-neutral-600);
    --moyo-input-icon-color-focus: var(--moyo-color-neutral-600);
    --moyo-input-placeholder-color: var(--moyo-color-neutral-500);
    --moyo-input-placeholder-color-disabled: var(--moyo-color-neutral-600);
    --moyo-input-spacing-small: var(--moyo-spacing-small);
    --moyo-input-spacing-medium: var(--moyo-spacing-medium);
    --moyo-input-spacing-large: var(--moyo-spacing-large);

    --moyo-input-filled-background-color: var(--moyo-color-neutral-100);
    --moyo-input-filled-background-color-hover: var(--moyo-color-neutral-100);
    --moyo-input-filled-background-color-focus: var(--moyo-color-neutral-100);
    --moyo-input-filled-background-color-disabled: var(
      --moyo-color-neutral-100
    );
    --moyo-input-filled-color: var(--moyo-color-neutral-800);
    --moyo-input-filled-color-hover: var(--moyo-color-neutral-800);
    --moyo-input-filled-color-focus: var(--moyo-color-neutral-700);
    --moyo-input-filled-color-disabled: var(--moyo-color-neutral-800);

    --moyo-input-label-font-size-small: var(--moyo-font-size-small);
    --moyo-input-label-font-size-medium: var(--moyo-font-size-medium);
    --moyo-input-label-font-size-large: var(--moyo-font-size-large);

    --moyo-input-label-color: inherit;

    --moyo-input-help-text-font-size-small: var(--moyo-font-size-x-small);
    --moyo-input-help-text-font-size-medium: var(--moyo-font-size-small);
    --moyo-input-help-text-font-size-large: var(--moyo-font-size-medium);

    --moyo-input-help-text-color: var(--moyo-color-neutral-500);

    --moyo-toggle-size: 1rem;

    --moyo-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --moyo-panel-background-color: var(--moyo-color-neutral-0);
    --moyo-panel-border-color: var(--moyo-color-neutral-200);
    --moyo-panel-border-width: 1px;

    --moyo-tooltip-border-radius: var(--moyo-border-radius-medium);
    --moyo-tooltip-background-color: var(--moyo-color-neutral-800);
    --moyo-tooltip-color: var(--moyo-color-neutral-0);
    --moyo-tooltip-font-family: var(--moyo-font-sans);
    --moyo-tooltip-font-weight: var(--moyo-font-weight-normal);
    --moyo-tooltip-font-size: var(--moyo-font-size-small);
    --moyo-tooltip-line-height: var(--moyo-line-height-dense);
    --moyo-tooltip-padding: var(--moyo-spacing-2x-small)
      var(--moyo-spacing-x-small);
    --moyo-tooltip-arrow-size: 4px;

    --moyo-z-index-drawer: 700;
    --moyo-z-index-dialog: 800;
    --moyo-z-index-dropdown: 900;
    --moyo-z-index-toast: 950;
    --moyo-z-index-tooltip: 1000;
  }

  .moyo-scroll-lock {
    overflow: hidden !important;
  }

  .moyo-toast-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: var(--moyo-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .moyo-toast-stack moyo-alert {
    --box-shadow: var(--moyo-shadow-large);
    margin: var(--moyo-spacing-medium);
  }
`;
