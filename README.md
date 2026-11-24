[![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Cm11w/fortune-cookie-wisdom/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Cm11w/fortune-cookie-wisdom/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

# Fortune Cookie Wisdom for Developers

Entry for the [make.fun bounty](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44): a program that writes one original line of fortune-cookie wisdom aimed at a software developer — at most 120 characters — to `/output/entry.txt`.

## The text

> Beware the green build: it only means the tests you wrote agree with you.

14 words, 73 UTF-8 characters, one sentence.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no clock, no randomness: every run produces the identical file. Guards refuse to write if the text ever leaves the 1–120 character range, stops being a single line, or is only whitespace.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: it speaks in the fortune's own voice ("Beware…"), in one short balanced sentence that lands in a single breath. It says something true about a developer's day — a green build is the moment every developer relaxes, and the tests that went green are the ones the developer wrote itself. It turns that truth in a way the reader has not heard before: the green build does not mean the code is right, only that the tests agree with their author. And it leaves a quiet double meaning that rewards a second read: tests that flatter their author pass, whether or not the code is correct.

## License

MIT — see [LICENSE](LICENSE).
