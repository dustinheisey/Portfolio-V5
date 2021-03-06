;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    141: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        i = a.n(n),
        M = a(153),
        l = a.n(M),
        r = a(154),
        c = a(151),
        m = a(173),
        g = a.n(m),
        s = a(174),
        d = a.n(s),
        u = a(175),
        o = a.n(u),
        j = a(176),
        N = a.n(j)
      t.default = function(e) {
        return i.a.createElement(
          r.a,
          null,
          i.a.createElement(
            'main',
            { className: 'contact padding-lg' },
            i.a.createElement(l.a, {
              title: 'Contact Us | Dallas Web Design',
              meta: [
                {
                  name: 'description',
                  content:
                    "Contact Us Today! Fill out the included form and I'll reach out to you ASAP!"
                }
              ]
            }),
            i.a.createElement(
              c.c,
              { name: 'contact-text' },
              i.a.createElement('h2', null, 'Get in Touch'),
              i.a.createElement(
                'p',
                { className: 'text-sm' },
                "Ready to move forward? Not sure and have some questions? Send me a message and prefered method of contact. I'll reach out ASAP to help!"
              )
            ),
            i.a.createElement(
              c.c,
              {
                name: 'contact-social',
                classes: 'align-l justify-c height-p-lg'
              },
              i.a.createElement(
                'div',
                { className: 'display-f' },
                i.a.createElement('img', {
                  src: o.a,
                  alt: 'Github',
                  className: 'margin-r-sm height-v-xsm'
                }),
                i.a.createElement(
                  'a',
                  {
                    href: 'https://github.com/dustinheisey',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'text-md margin-sm color-d hover-color-m cursor-p'
                  },
                  'Github'
                )
              ),
              i.a.createElement(
                'div',
                { className: 'display-f' },
                i.a.createElement('img', {
                  src: N.a,
                  alt: 'LinkedIn',
                  className: 'margin-r-sm height-v-xsm'
                }),
                i.a.createElement(
                  'a',
                  {
                    href: 'https://www.linkedin.com/in/heisey-dustin/',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'text-md margin-sm color-d hover-color-m cursor-p'
                  },
                  'LinkedIn'
                )
              ),
              i.a.createElement(
                'div',
                { className: 'display-f justify-l align-c' },
                i.a.createElement('img', {
                  src: g.a,
                  alt: 'Phone Number',
                  className: 'margin-r-sm height-v-xsm'
                }),
                i.a.createElement(
                  'a',
                  {
                    href: 'tel:+4697189783',
                    className:
                      'text-md margin-sm color-d hover-color-m cursor-p'
                  },
                  '(352) 459-8464'
                )
              ),
              i.a.createElement(
                'div',
                { className: 'display-f justify-l align-c' },
                i.a.createElement('img', {
                  src: d.a,
                  alt: 'Email Address',
                  className: 'margin-r-sm height-v-xsm'
                }),
                i.a.createElement(
                  'a',
                  {
                    href: 'mailto:hello@dustinheisey.com',
                    className: 'text-md margin-sm color-d'
                  },
                  'hello@dustinheisey.com'
                )
              )
            ),
            i.a.createElement(
              c.b,
              { name: 'contact-form', className: 'padding-sm' },
              i.a.createElement(
                'form',
                {
                  name: 'contact',
                  method: 'POST',
                  action: '/success/',
                  'data-netlify': 'true',
                  'data-netlify-honeypot': 'bot-field',
                  className:
                    'display-f direction-c align-l justify-sb margin-tb-md width-p-lg'
                },
                i.a.createElement('input', {
                  type: 'hidden',
                  name: 'form-name',
                  value: 'contact'
                }),
                i.a.createElement(
                  'p',
                  { hidden: !0 },
                  i.a.createElement(
                    'label',
                    null,
                    'Don’t fill this out: ',
                    i.a.createElement('input', { name: 'bot-field' })
                  )
                ),
                i.a.createElement(
                  'div',
                  {
                    className:
                      'display-f direction-c justify-sa width-p-lg margin-b-sm'
                  },
                  i.a.createElement(
                    'label',
                    { htmlFor: 'name', className: 'text-sm margin-tb-sm' },
                    'Name'
                  ),
                  i.a.createElement('input', {
                    type: 'text',
                    name: 'name',
                    autoComplete: 'name',
                    className: 'border-r-sm bg-f width-p-lg'
                  })
                ),
                i.a.createElement(
                  'div',
                  {
                    className:
                      'display-f direction-c justify-sa width-p-lg margin-b-sm'
                  },
                  i.a.createElement(
                    'label',
                    { htmlFor: 'email', className: 'text-sm margin-tb-sm' },
                    'Email'
                  ),
                  i.a.createElement('input', {
                    type: 'email',
                    name: 'email',
                    autoComplete: 'email',
                    className: 'border-r-sm bg-f width-p-lg'
                  })
                ),
                i.a.createElement(
                  'div',
                  {
                    className:
                      'display-f direction-c justify-sa width-p-lg margin-b-sm'
                  },
                  i.a.createElement(
                    'label',
                    { htmlFor: 'email', className: 'text-sm margin-tb-sm' },
                    'Phone - ',
                    i.a.createElement('em', null, 'Optional')
                  ),
                  i.a.createElement('input', {
                    type: 'phone',
                    name: 'phone',
                    autoComplete: 'tel',
                    className: 'border-r-sm bg-f width-p-lg'
                  })
                ),
                i.a.createElement(
                  'div',
                  {
                    className:
                      'display-f direction-c justify-sa width-p-lg margin-b-sm'
                  },
                  i.a.createElement(
                    'label',
                    { htmlFor: 'message', className: 'text-sm margin-tb-sm' },
                    'Message'
                  ),
                  i.a.createElement('textarea', {
                    id: 'message',
                    name: 'message',
                    rows: '6',
                    className: 'border-r-sm bg-f width-p-lg'
                  })
                ),
                i.a.createElement(
                  'button',
                  {
                    type: 'submit',
                    className:
                      'border-r-md bg-p-d padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l margin-tb-sm'
                  },
                  i.a.createElement(
                    'p',
                    { className: 'color-l margin-z' },
                    'Send'
                  )
                )
              )
            )
          )
        )
      }
    },
    147: function(e, t, a) {
      'use strict'
      a(148)
      var n = a(0),
        i = a.n(n),
        M = a(149)
      t.a = function(e) {
        var t = e.external,
          a = e.link,
          n = e.text,
          l = e.classes
        return t
          ? i.a.createElement(
              'a',
              {
                className:
                  'border-r-md padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-i align-c justify-l cursor-p grow outline-n border-n color-l cursor-p text-md ' +
                  (void 0 !== l ? l : 'bg-p-d'),
                href: a,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              n
            )
          : i.a.createElement(
              M.Link,
              { to: a },
              i.a.createElement(
                'button',
                {
                  className:
                    'border-r-md padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l cursor-p text-md ' +
                    (void 0 !== l ? l : 'bg-p-d')
                },
                n
              )
            )
      }
    },
    150: function(e, t, a) {
      e.exports =
        a.p + 'static/dustin-heisey-8191a1bbdb8cc4bd0814b542630819a9.svg'
    },
    151: function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return d
      }),
        a.d(t, 'c', function() {
          return o
        }),
        a.d(t, 'b', function() {
          return j
        }),
        a.d(t, 'd', function() {
          return u
        })
      var n = a(6),
        i = a.n(n),
        M = a(47),
        l = a.n(M),
        r = (a(148), a(152), a(0)),
        c = a.n(r),
        m = a(147),
        g = a(150),
        s = a.n(g),
        d = function(e) {
          var t = e.name,
            a = e.classes,
            n = e.children
          return c.a.createElement(
            'section',
            {
              className: (void 0 !== t ? t : '') + ' ' + (void 0 !== a ? a : '')
            },
            n
          )
        },
        u = function(e) {
          var t = e.img,
            a = e.title,
            n = e.text,
            i = e.textColor,
            M = e.btnText,
            l = e.btnLink,
            r = e.btnColor,
            g = e.external,
            s = e.orientation,
            d = e.classes
          return c.a.createElement(
            'section',
            {
              className:
                'border-r-lg bg-l shadow margin-tb-lg t-margin-n project ' +
                (0 === s ? 'project-left ' : 'project-right') +
                ' ' +
                (void 0 !== d ? d : '') +
                ' '
            },
            c.a.createElement('img', {
              src: t,
              alt: a,
              className:
                'project-image width-p-lg border-r-tl-lg border-r-tr-lg ' +
                (0 === s
                  ? 'd-border-r-tl-lg d-border-r-tr-n d-border-r-bl-lg'
                  : 'd-border-r-tr-lg d-border-r-tl-n d-border-r-br-lg')
            }),
            c.a.createElement(
              'div',
              { className: 'project-text width-p-lg padding-lg' },
              c.a.createElement(
                'h2',
                { className: 'margin-b-md ' + (void 0 !== i ? i : '') },
                a
              ),
              c.a.createElement(
                'p',
                { className: 'text-md margin-b-md color-m' },
                n
              ),
              c.a.createElement(m.a, {
                text: M,
                link: l,
                classes: r,
                external: g
              })
            )
          )
        },
        o = function(e) {
          var t = e.name,
            a = e.classes,
            n = e.children
          return c.a.createElement(
            'section',
            {
              className:
                'border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg ' +
                (void 0 !== t ? t : '') +
                ' ' +
                (void 0 !== a ? a : '')
            },
            n
          )
        },
        j = function(e) {
          var t = e.name,
            a = e.classes,
            n = e.children
          return c.a.createElement(
            'section',
            {
              className:
                'border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg d-padding-lg t-padding-sm ' +
                (void 0 !== t ? t : '') +
                ' ' +
                (void 0 !== a ? a : '')
            },
            n
          )
        }
      c.a.Component
    },
    152: function(e, t, a) {
      var n = a(22).f,
        i = Function.prototype,
        M = /^\s*function ([^ (]*)/
      'name' in i ||
        (a(14) &&
          n(i, 'name', {
            configurable: !0,
            get: function() {
              try {
                return ('' + this).match(M)[1]
              } catch (e) {
                return ''
              }
            }
          }))
    },
    173: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBmaWxsPSIjMDA0NTljIiBkPSJNNDE2IDE5MmMwLTg4LjQtOTMuMS0xNjAtMjA4LTE2MFMwIDEwMy42IDAgMTkyYzAgMzQuMyAxNC4xIDY1LjkgMzggOTItMTMuNCAzMC4yLTM1LjUgNTQuMi0zNS44IDU0LjUtMi4yIDIuMy0yLjggNS43LTEuNSA4LjdTNC44IDM1MiA4IDM1MmMzNi42IDAgNjYuOS0xMi4zIDg4LjctMjUgMzIuMiAxNS43IDcwLjMgMjUgMTExLjMgMjUgMTE0LjkgMCAyMDgtNzEuNiAyMDgtMTYwem0xMjIgMjIwYzIzLjktMjYgMzgtNTcuNyAzOC05MiAwLTY2LjktNTMuNS0xMjQuMi0xMjkuMy0xNDguMS45IDYuNiAxLjMgMTMuMyAxLjMgMjAuMSAwIDEwNS45LTEwNy43IDE5Mi0yNDAgMTkyLTEwLjggMC0yMS4zLS44LTMxLjctMS45QzIwNy44IDQzOS42IDI4MS44IDQ4MCAzNjggNDgwYzQxIDAgNzkuMS05LjIgMTExLjMtMjUgMjEuOCAxMi43IDUyLjEgMjUgODguNyAyNSAzLjIgMCA2LjEtMS45IDcuMy00LjggMS4zLTIuOS43LTYuMy0xLjUtOC43LS4zLS4zLTIyLjQtMjQuMi0zNS44LTU0LjV6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIEZyZWUgNS4xLjEgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKEljb25zOiBDQyBCWSA0LjAsIEZvbnRzOiBTSUwgT0ZMIDEuMSwgQ29kZTogTUlUIExpY2Vuc2UpCi0tPg=='
    },
    174: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDA0NTljIiBkPSJNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40eiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBGcmVlIDUuMS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tCkxpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKQotLT4='
    },
    175: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDA0NTljIiBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=='
    },
    176: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDA0NTljIiBkPSJNNC45OCAzLjVjMCAxLjM4MS0xLjExIDIuNS0yLjQ4IDIuNXMtMi40OC0xLjExOS0yLjQ4LTIuNWMwLTEuMzggMS4xMS0yLjUgMi40OC0yLjVzMi40OCAxLjEyIDIuNDggMi41em0uMDIgNC41aC01djE2aDV2LTE2em03Ljk4MiAwaC00Ljk2OHYxNmg0Ljk2OXYtOC4zOTljMC00LjY3IDYuMDI5LTUuMDUyIDYuMDI5IDB2OC4zOTloNC45ODh2LTEwLjEzMWMwLTcuODgtOC45MjItNy41OTMtMTEuMDE4LTMuNzE0di0yLjE1NXoiLz48L3N2Zz4='
    }
  }
])
//# sourceMappingURL=component---src-pages-contact-js-50e5847b133fac3469ad.js.map
