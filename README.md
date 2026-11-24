# One Word for Your Wi-Fi — "Fickle"

[![make.fun](https://make.fun/badge.svg)](https://make.fun/competitions/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Competition: One Word for Your Wi-Fi](https://img.shields.io/badge/make.fun-One%20Word%20for%20Your%20Wi--Fi-blue)](https://make.fun/competitions/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

Entry for the make.fun competition **One Word for Your Wi-Fi**
(`u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72`).

## The entry

**Fickle** — one word, six letters.

Home Wi-Fi works fine for a while, then changes its mind for no reason:
full bars one minute, gone the next, back again before you finish
complaining. "Fickle" names that behaviour in a single word a reader
gets instantly. It is funny at once, true to how home Wi-Fi actually
behaves, and a fresher angle than the words everyone reaches for
(slow, buffering, down). It also works as a network name on its own —
which is the point, since the winning word becomes the sponsor's
network name.

## How it works

`main.ts` (Node 22, standard library only) validates the word against
the competition gate — UTF-8 text, 1 to 20 characters, not only white
space, exactly one word — and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) with no trailing
newline. The file is exactly the word, nothing else.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
cat ./out/entry.txt   # Fickle
```

## make.fun

- Competition: https://make.fun/competitions/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
- Prize: $2 for 1st place. Entries close 2026-11-28T11:35:00Z.
- Payout wallet: `8edF9AK4eU3kXXtUjeKeHsj82TzczZsCwfEvU8jaSRrZ`
- Join make.fun with referral code `v0wjehd6`.

## License

MIT — see [LICENSE](LICENSE).
