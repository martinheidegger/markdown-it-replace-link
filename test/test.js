'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');
var expect = require('chai').expect;
var fs = require('fs');

describe('markdown-it-replace-link', function() {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true,
    replaceLink: function (link, env, token) {
      if (token.type === 'image') {
        return 'image/' + link
      }
      if (link === 'a') {
        return env.x + link;
      }
      return "http://me.com/" + link;
    }
  }).use(require('../'));
  generate(path.join(__dirname, 'fixtures/toc.txt'), md);

  it("Passes on env", function (done) {
    var html = md.render(fs.readFileSync(path.join(__dirname, 'fixtures/env.txt'), 'utf-8'), {
      x: 'test/'
    })
    expect(html).to.equal("<p><a href=\"test/a\">Hello</a></p>\n");
    done();
  });
});
