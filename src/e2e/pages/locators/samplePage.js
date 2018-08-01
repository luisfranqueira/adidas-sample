export default {
  samplePageTitle: {
    selector: 'h1[class="entry-title"]'
  },
  commentTextBoxId: {
    selector: 'textarea[id="comment"]'
  },
  commentTextBoxRequired: {
    selector: '[aria-required="true"]'
  },
  nameTextBoxId: {
    selector: 'input[id="author"]'
  },
  nameTextBoxRequired: {
    selector: '[class="required"]'
  },
  emailTextBoxId: {
    selector: 'input[id="email"]'
  },
  emailTextBoxRequired: {
    selector: '[class="required email"]'
  },
  websiteTextBoxId: {
    selector: 'input[id="url"]'
  },
  submitButton: {
    selector: 'input[name="submit"]'
  },
  errorBody: {
    selector: '[id="error-page"]'
  },
  errorMessage: {
    selector: '//*[@id="error-page"]/p[2]',
    locateStrategy: 'xpath'
  },
  backFromErrorPage: {
    selector: '//*[@id="error-page"]/p[4]/a',
    locateStrategy: 'xpath'
  },
  commentAuthorVCard: {
    selector: '[class="comment-author vcard"]'
  },
  commentBody: {
    selector: '[class="comment-body"]'
  }
}
