/*
Language: Diff
Description: Unified and context diff
Author: Vasily Polovnyov <vast@whiteants.net>
Website: https://www.gnu.org/software/diffutils/
Category: common
*/

/** @type LanguageFn */
export default function(hljs) {
  return {
    name: 'Diff',
    aliases: ['patch'],
    contains: [
      {
        className: 'meta',
        relevance: 10,
        variants: [
          {begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/},
          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/},
          {begin: /^--- +\d+,\d+ +----$/}
        ]
      },
      {                                                                             
         className: "meta-string",                                                  
         variants: [                                                                
           {begin: /^index/, end: /$/ }                                             
         ]                                                                          
      },
      {
        className: 'comment',
        variants: [
          {begin: /Index: /, end: /$/},
          {begin: /={3,}/, end: /$/},
          {begin: /^-{3}/, end: /$/},
          {begin: /^\*{3} /, end: /$/},
          {begin: /^\+{3}/, end: /$/},
          {begin: /^\*{15}$/ },
          {begin: /^diff --git/, end: /$/},
        ]
      },
      {
        className: 'addition',
        begin: /^\+/, end: /$/
      },
      {
        className: 'deletion',
        begin: /^-/, end: /$/
      },
      {
        className: 'addition',
        begin: /^!/, end: /$/
      }
    ]
  };
}
