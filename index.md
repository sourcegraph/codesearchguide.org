# Code search

<aside class="warning">The code search guide is <abbr title="Work in progress">WIP</abbr>. Want to <a href="https://github.com/sourcegraph/codesearchguide.org">contribute</a>?</aside>

This guide has information about code search from around the internet and from interviews with devs who use code search.

Many devs initially don't think of "code search" as something they need (beyond what their code host, editor, or `grep` offers). But many other devs use a code search tool frequently. The goal of this guide is to explain why and how those devs use their code search tool.

You can think of it as a complete explanation for why people like [patio11](https://twitter.com/patio11/status/1086112277659451392) love code search:

> I intend to boot up a livegrep [code search] instance on the first day of every startup for the rest of my life. It borders on miraculous. ... (It's also ~100X faster than trying to search GitHub, in my experience, and significantly faster than `grep`.) --- [@patio11 on Twitter](https://twitter.com/patio11/status/1086112277659451392)

Many [code search tools](tools.md) exist. This guide is about code search in general, not any single product. As an analogy, think of it like a guide that explains version control in general, not *just* Git.

> *Author's note from [@sqs](https://slack.org):* I love code search and can't imagine coding without it. You may consider me biased because I am a cofounder of [Sourcegraph](https://sourcegraph.com), a code search company. I'm trying hard to be neutral and include [contributions and comments](https://github.com/sourcegraph/codesearchguide.org) from many other devs. Also, my love for code search is genuine (otherwise, why would I have started Sourcegraph?).

This entire guide is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) (see [full source](https://github.com/sourcegraph/codesearchguide.org)).

## What is code search?

A tool that's separate from, but integrated with, your code host and editor that lets you search, navigate, and understand all code. Usually this means your own code, your organization's code, the code of projects you depend on and that depend on your code, and any other code that's relevant to you.
