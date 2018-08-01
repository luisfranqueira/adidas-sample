import _ from 'lodash';
import config from 'config';
import locators from './locators/homePage';

const homePageCommands = {
  assertPageLoad() {
    this.expect.element('@homePageTopMenuItem').to.be.visible.before(5000);
  },
  openSamplePage() {
    this.expect.element('@samplePageBottomMenuItem').to.be.visible.before(5000);
    this.click('@samplePageBottomMenuItem');
  }
};

export default {
  commands: [homePageCommands],
  elements: locators,
  url: function () {
    return this.api.launch_url;
  }
};
