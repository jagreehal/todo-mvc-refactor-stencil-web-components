import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('todo-list', () => {
  let page: E2EPage;
  let element: E2EElement;

  describe.skip('default behavior', () => {
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
      <todo-list></todo-list>
    `
      });
      element = await page.find('todo-list');
    });
    it('x', () => {
      expect(1).toBe(1);
    });
  });
});
