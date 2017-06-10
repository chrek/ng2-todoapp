import { Ng2TodoappPage } from './app.po';

describe('ng2-todoapp App', () => {
  let page: Ng2TodoappPage;

  beforeEach(() => {
    page = new Ng2TodoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
