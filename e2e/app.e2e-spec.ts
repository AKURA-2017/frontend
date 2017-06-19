import { RevEngineFrontendPage } from './app.po';

describe('rev-engine-frontend App', () => {
  let page: RevEngineFrontendPage;

  beforeEach(() => {
    page = new RevEngineFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
