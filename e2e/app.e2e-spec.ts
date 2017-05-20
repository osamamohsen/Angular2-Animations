import { Angular2animationPage } from './app.po';

describe('angular2animation App', () => {
  let page: Angular2animationPage;

  beforeEach(() => {
    page = new Angular2animationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
