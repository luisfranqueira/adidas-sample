import config from 'config';

describe('Sample Page', () => {
  let homePage;
  let samplePage;

  beforeEach((client, done) => {
    homePage = client.page.homePage();
    samplePage = client.page.samplePage();
    homePage.navigate();
    done();
  });

  afterEach((client, done) => {
    client.end(() => done());
  });

  it('should open Sample Page', () => {
    homePage.assertPageLoad();
    homePage.openSamplePage();
    samplePage.addComment();
    samplePage.addName();
    samplePage.addWebsite();
    samplePage.clickSubmit();
    samplePage.assertErroPageEmailError();
    samplePage.goBackFromErrorPage()
    samplePage.addEmail();
    samplePage.clickSubmit();
    samplePage.assertCommentAuthorName();
    samplePage.assertCommentBody();
  });
});
