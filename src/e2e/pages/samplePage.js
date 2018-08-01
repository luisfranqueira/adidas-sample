import _ from 'lodash';
import config from 'config';
import locators from './locators/samplePage';
function S4() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
let simpleComment = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

const homePageCommands = {
  assertPageLoad() {
    this.expect.element('@samplePageTitle').to.be.visible.before(3000);
    this.expect.element('@commentTextBoxId').to.be.visible.before(3000);
    this.expect.element('@commentTextBoxRequired').to.be.visible.before(3000);
    this.expect.element('@nameTextBoxId').to.be.visible.before(3000);
    this.expect.element('@nameTextBoxRequired').to.be.visible.before(3000);
    this.expect.element('@emailTextBoxId').to.be.visible.before(3000);
    this.expect.element('@emailTextBoxRequired').to.be.visible.before(3000);
    this.expect.element('@websiteTextBoxId').to.be.visible.before(3000);
  },
  addComment() {
    this.setValue('@commentTextBoxId', simpleComment);
  },
  addEmail() {
    this.setValue('@emailTextBoxId', config.get('server.user.email'));
  },
  addName() {
    this.setValue('@nameTextBoxId', config.get('server.user.name'));
  },
  addWebsite() {
    this.setValue('@websiteTextBoxId', config.get('server.user.url'));
  },
  clickSubmit() {
    this.click('@submitButton');
  },
  assertErroPageEmailError() {
    this.expect.element('@errorBody').to.be.visible.before(3000);
    this.expect.element('@errorMessage').to.be.visible.before(3000);
    this.expect.element('@errorMessage').text.to.equal('ERROR: please enter a valid email address.')
    this.expect.element('@backFromErrorPage').to.be.visible.before(3000);
  },
  goBackFromErrorPage() {
    this.click('@backFromErrorPage');
  },
  assertCommentAuthorName(){
    this.expect.element('@commentAuthorVCard').to.be.visible.before(3000);
    this.expect.element('@commentAuthorVCard').text.to.equal(config.get('server.user.name'))
  },
  assertCommentBody() {
    this.expect.element('@commentBody').to.be.visible.before(3000);
    this.expect.element('@commentBody').text.to.equal(simpleComment);
  }
};

export default {
  commands: [homePageCommands],
  elements: locators,
  url: function () {
    return this.api.launch_url;
  }
};
