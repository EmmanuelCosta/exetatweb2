import { Exetatweb2Page } from './app.po';

describe('exetatweb2 App', function() {
  let page: Exetatweb2Page;

  beforeEach(() => {
    page = new Exetatweb2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
