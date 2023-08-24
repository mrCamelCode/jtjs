import { Tree } from '@nx/devkit';

/**
 * Simple workspace generator that modifies the output of some libs in the dist folder in ways that I can't
 * find to just config.
 */
export default async function (tree: Tree, schema: any) {
  const filePath = 'dist/libs/core/theme/package.json';

  try {
    if (tree.exists(filePath)) {
      const fileContents = tree.read(filePath, 'utf-8');

      if (fileContents) {
        const fileLines = fileContents.split('\n');

        const closingBracketLineIndex = fileLines.lastIndexOf('}');

        if (closingBracketLineIndex > -1) {
          fileLines[closingBracketLineIndex - 1] += ',';
          // Insert the style property before the last line. The style property lets a stylesheet include the package and know where
          // to pull it from.
          fileLines.splice(
            closingBracketLineIndex,
            0,
            `\t"style": "./index.esm.css"`
          );

          tree.write(filePath, fileLines.join('\n'));
        } else {
          throw new Error(
            "Could not find closing bracked in core-theme's package.json. Please make sure the file is formatted correctly."
          );
        }
      }

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
