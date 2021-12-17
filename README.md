# 👷🏻‍♂️ Check Issue Reference

![](https://img.shields.io/github/workflow/status/actions-cool/check-issue-ref/CI?style=flat-square)
[![](https://img.shields.io/badge/marketplace-check--issue--ref-blueviolet?style=flat-square)](https://github.com/marketplace/actions/check-issue-ref)
[![](https://img.shields.io/github/v/release/actions-cool/check-issue-ref?style=flat-square&color=orange)](https://github.com/actions-cool/check-issue-ref/releases)

## 🚀 How to use?

```yml
name: Check Issue Reference

on:
  issues:
    types: [opened]

jobs:
  check-reference:
    runs-on: ubuntu-latest
    steps:
      - uses: actions-cool/check-issue-ref@v1
        id: check

      - run: echo ref ${{ steps.check.outputs.result }}
```

### outputs

- `result`
  - `0`: no ref
  - other number: the issue open ref

## ⚡ Feedback

You are very welcome to try it out and put forward your comments. You can use the following methods:

- Report bugs or consult with [Issue](https://github.com/actions-cool/check-issue-ref/issues)
- Submit [Pull Request](https://github.com/actions-cool/check-issue-refe/pulls) to improve the code of `check-issue-ref`

也欢迎加入 钉钉交流群

![](https://github.com/actions-cool/resources/blob/main/dingding.jpeg?raw=true)

## Changelog

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](./LICENSE)

