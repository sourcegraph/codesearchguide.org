# How Stripe uses code search

Stripe uses [Livegrep](https://github.com/livegrep/livegrep) for code search (according to the tweets cited below).

Patrick McKenzie (a.k.a. patio11, who works at Stripe) on onboarding for new Stripe engineers:

> Your engineering spin up will have showed you a slide deck listing a number of places to search for things, probably most importantly livegrep (how did I work before this) ... Large sprawling codebases are intrinsically hard to navigate but we try to keep it refactored and organized enough to reason about. You should be able to find e.g. “what happens when someone signs up” in under 15 minutes w/ no knowledge but Ruby. (I did on day one.) --- [@patio11 on Twitter](https://twitter.com/patio11/status/1407695169491669000)

Patrick McKenzie (patio11) on how he answers questions about Stripe's codebase:

> When folks ask me a question about our codebase internally I try to
>
> a) answer the question
>
> b) say "If I were trying to find the answer to that question with our tools, here's my entry point, here's the search query, and here's my mental heuristic for why I'd click on result #3"
>
> This is trying to thread the needle on always, always being happy to give responsive answers to questions while also increasing people's ability to self-serve on them in the future.
>
> Since it's publicly available, let me mention that the most common tool I use for answering these questions is [livegrep](https://github.com/livegrep/livegrep) and that I intend to boot up a livegrep instance on the first day of every startup for the rest of my life.
>
> It borders on miraculous.
>
> "What's livegrep do?" Instantly grep all code at your company from a web interface, with it producing the relevant files, contextual snippets, and links to the full version in GitHub/GHE/etc.
> 
> It's blaaaaaazing fast, too, even across our Very Materially Sized codebase.
>
> Importantly, because livegrep functions through a web interface, you don't need to have the right repository checked out to very quickly answer questions about it.
> 
> (It's also ~100X faster than trying to search GitHub, in my experience, and significantly faster than grep.)
>
> --- [@patio11 on Twitter](https://twitter.com/patio11/status/1086113318769647616)

More nice words about livegrep code search at Stripe:

> [Someone else asks: "What is your absolute favorite developer tool you use?"] I get unreasonable utility out of livegrep. --- [@patio11 on Twitter](https://twitter.com/patio11/status/904702102231855104)

> At Stripe, I use Livegrep everyday and it's brilliant for tracing how some code actually works through layers of abstractions and far-ranging parts of the codebase. It's a game-changing tool that every software engineer should get to enjoy. --- [@FeifanZ](https://twitter.com/FeifanZ/status/1187164899165650944)

> Livegrep exists, which you can get for yourself (and should, today, it is amazing). You can grep substantially every line of code for every repository in a browser with X0 millisecond response time. Forget a function signature or commonly used pattern? 2 seconds of typing. --- [@patio11 on Twitter](https://twitter.com/patio11/status/1100178076355313665)

> I will install livegrep the first day of every project for the rest of my life. --- [@patio11 on Twitter](https://twitter.com/patio11/status/1407697474458767371)

> I love our internal systems, annoyingly for the purpose of this tweet including Trade Secret Internal App (TM) which I retroactively wish I had had at every company in my career and will certainly implement at every future one, because every software company should have it. [Someone else asks: "Is it better git repo search?"] That's not a trade secret; we use livegrep. (Which is amazing.) --- [@patio11 on Twitter](https://twitter.com/patio11/status/1095442374229032960)