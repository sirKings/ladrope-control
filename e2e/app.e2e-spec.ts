import { LadropeControlPage } from './app.po';

describe('ladrope-control App', () => {
  let page: LadropeControlPage;

  beforeEach(() => {
    page = new LadropeControlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
