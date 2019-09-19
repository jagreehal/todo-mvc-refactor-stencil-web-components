import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('todo-filters', () => {
  describe('default behavior', () => {
    let page: E2EPage;
    let element: E2EElement;
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
      <todo-filters></todo-filters>
    `
      });
      element = await page.find('todo-filters');
    });

    it('should be three li elements', async () => {
      const lis = await element.findAll('li');
      expect(lis.length).toBe(3);
    });

    it('should select all by default', async () => {
      const selected = await element.find('a.selected');
      expect(selected.innerText).toBe('All');
    });

    it('clear-completed should not be visible', async () => {
      const clearCompleted = await element.find('clear-completed');
      expect(clearCompleted).toBeNull();
    });
  });

  describe('events', () => {
    let page: E2EPage;
    let element: E2EElement;
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
      <todo-filters any-completed="true"></todo-filters>
    `
      });
      element = await page.find('todo-filters');
    });

    it.skip('clicking on filter emits event', async () => {
      const spy = await page.spyOnEvent('set-filter');
      const link = await element.find('li:nth-child(2)');
      await link.click();
      await page.waitForChanges();

      expect(spy).toHaveReceivedEvent();
    });

    it('clear-completed click emits event', async () => {
      const spy = await page.spyOnEvent('clear-completed');
      const button = await element.find('.clear-completed');
      await button.click();
      await page.waitForChanges();

      expect(spy).toHaveReceivedEvent();
    });
  });

  describe('attribute set', () => {
    let page: E2EPage;
    let element: E2EElement;
    it('should be three li elements', async () => {
      page = await newE2EPage({
        html: `
      <todo-filters filter="active"></todo-filters>
    `
      });
      element = await page.find('todo-filters');
      const selected = await element.find('a.selected');
      expect(selected.innerText).toBe('Active');
    });
    it('clear-completed should be visible', async () => {
      page = await newE2EPage({
        html: `
      <todo-filters any-completed="true"></todo-filters>
    `
      });
      element = await page.find('todo-filters');
      const clearCompleted = await element.find('clear-completed');
      expect(clearCompleted).toBeDefined();
    });
  });
});
