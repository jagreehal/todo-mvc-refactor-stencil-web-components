import { configure, addDecorator, addParameters } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withViewport } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  options: {
    hierarchyRootSeparator: /\|/
  }
});

addDecorator(withKnobs);
addDecorator(withA11y);
// addDecorator(withActions);
// addDecorator(withViewport);

configure(
  require.context('../src/components', true, /.stories.(tsx|mdx)$/),
  module
);
