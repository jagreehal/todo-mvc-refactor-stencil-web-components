import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe.skip('todo-item', () => {
  let page: E2EPage;
  let element: E2EElement;

  describe('default behavior', () => {
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
      <todo-item></todo-item>
    `
      });
      element = await page.find('todo-item');
    });
    it('x', () => {
      expect(1).toBe(1);
    });
  });
});
