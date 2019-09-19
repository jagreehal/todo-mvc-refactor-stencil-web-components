import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('todo-count', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
      <todo-count number-of-active-todos="1"></todo-count>
    `
    });
    element = await page.find('todo-count');
  });

  it('should work with one item', async () => {
    expect(element.innerText).toEqualText('1 item left');
  });

  it('should with multiple items', async () => {
    element.setProperty('numberOfActiveTodos', '2');
    await page.waitForChanges();
    expect(element.innerText).toEqualText('2 items left');
  });
});
