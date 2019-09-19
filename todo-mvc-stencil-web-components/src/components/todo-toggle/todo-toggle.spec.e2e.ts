import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('todo-toggle', () => {
  let page: E2EPage;
  let element: E2EElement;

  describe.skip('default behavior', () => {
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
      <todo-toggle></todo-toggle>
    `
      });
      element = await page.find('todo-toggle');
    });
    it('x', () => {
      expect(1).toBe(1);
    });
  });
});
