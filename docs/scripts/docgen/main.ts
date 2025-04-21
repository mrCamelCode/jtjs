import { writeFile } from 'fs/promises';
import { dirname, join, resolve } from 'path';
import typedoc from 'typedoc';
import { MdDocumentationWriter } from './md-writer.service';
import { TypedocToMdPageProcessor } from './typedoc-to-md-page-processor';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  await Promise.all(
    ['browser', 'data', 'event', 'networking', 'react', 'view'].map(async (lib) => {
      const app = await typedoc.Application.bootstrap({
        entryPoints: [resolve(__dirname, '../../../', `libs/${lib}/lib/index.ts`)],
        tsconfig: resolve(__dirname, '../../../', `libs/${lib}/tsconfig.json`),
      });

      const project = await app.convert();

      if (project) {
        const mdProcessor = new TypedocToMdPageProcessor();
        const mdWriter = new MdDocumentationWriter();

        const outDir = join('src', 'content', 'docs', 'api', lib.replace('jtjs-', ''));

        await mdWriter.outputToMd(
          await mdProcessor.produce(
            project,
            lib === 'react' ? (_input, subject) => subject.name.endsWith('Props') : undefined
          ),
          outDir
        );

        const libName = `@jtjs/${lib}`;
        await writeFile(
          join(outDir, 'index.md'),
          `---
title: '${libName}'
description: Landing page for ${libName} API docs.
prev: false
next: false
---

In this section you'll find \`${libName}\`'s complete API, documented for your perusing pleasure.

These API docs are generated from source using output from [TypeDoc](https://www.npmjs.com/package/typedoc), a super handy library. A big thank you to them for all their hard work. You should check out the project!
        `
        );
      }
    })
  );
}

main().catch((error) => {
  console.error(`Docs failed to generate: ${error}`);
});
