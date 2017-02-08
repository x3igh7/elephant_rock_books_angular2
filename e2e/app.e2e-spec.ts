import { ElephantrockbooksPage } from './app.po';

describe('elephantrockbooks App', function() {
  let page: ElephantrockbooksPage;

  beforeEach(() => {
    page = new ElephantrockbooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
