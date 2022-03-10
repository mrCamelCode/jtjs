import { Tree } from '@nrwl/devkit';

/**
 * Simple workspace generator that modifies the output of some libs in the dist folder in ways that I can't
 * find to just config.
 */
export default async function (tree: Tree, schema: any) {
  const filePath = 'dist/libs/core/theme/package.json';

  try {
    if (tree.exists(filePath)) {
      const fileContents = tree.read(filePath, 'utf-8');

      tree.write(filePath, fileContents.replace(/index/gim, 'styles').replace(/\.js/gim, '.css'));

      console.log('Successfully updated core-theme package.json');
    } else {
      throw new Error('Could not find package.json of the core-theme lib.');
    }
  } catch (error) {
    console.error(
      `Encountered error while trying to run fix-lib-output workspace generator: ${error}`
    );
  }
}
