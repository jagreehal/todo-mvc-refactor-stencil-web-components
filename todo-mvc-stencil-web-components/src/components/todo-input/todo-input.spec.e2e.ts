import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('todo-input', () => {
  let page: E2EPage;
  let element: E2EElement;

  describe('default behavior', () => {
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
      <todo-input></todo-input>
    `
      });
      element = await page.find('todo-input');
    });
    it('x', () => {
      expect(1).toBe(1);
    });
  });
});
