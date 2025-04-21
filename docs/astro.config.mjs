// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'JTJS',
      social: [
        {
          href: 'https://github.com/mrCamelCode/jtjs',
          icon: 'github',
          label: 'GitHub',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Introduction',
          autogenerate: { directory: 'introduction' },
        },
        {
          label: 'Modules',
          autogenerate: { directory: 'modules' },
        },
        // {
        //   label: 'Guides',
        //   autogenerate: { directory: 'guides' },
        // },
        {
          label: 'API',
          autogenerate: { directory: 'api', collapsed: true },
        },
      ],
    }),
  ],
});
