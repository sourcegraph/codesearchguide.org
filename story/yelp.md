# How Yelp uses code search

Yelp uses [Sourcegraph](https://sourcegraph.com) for code search.

Yelp's engineering blog post [Winning the Hackathon with Sourcegraph](https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html) (by [Mark Larah](https://twitter.com/mark_larah), a Yelp engineer, and others) explains how they started using Sourcegraph and how they use it:

> Visualizing how code is used across the organization is a vital part of our engineers’ day-to-day workflow - and we have a *lot* of code to search through! This blog post details our journey of adopting Sourcegraph at Yelp to help our engineers maintain and dig through the tens of gigabytes of data in our git repos!
>
> ...
> 
> Sourcegraph is conveniently distributed as a docker image, so we were able to get a proof-of-concept running quickly and share it out with a small group of people. The feedback was positive! After using it regularly for a few weeks, we felt that the code browsing experience had been improved significantly and we pushed on to try and roll it out to the rest of Yelp!
>
> ...
>
> [Code intelligence](https://docs.sourcegraph.com/code_intelligence) features such as Go-to-Definition and Find References are heavily-used features that enable developers to understand the plethora of microservices and libraries in our code base. When making large changes, Sourcegraph is the way to discover how your code is being called throughout the rest of the code base. Sourcegraph has also been helpful for onboarding new hires and introducing them to the code base.
>
> Sourcegraph has proven to be one of the most useful tools for making mass code migrations and deprecations. A quick search can help scope out the magnitude of the change and the difficulty of implementing it, while also providing an easy way to track the progress of long-running migrations and deprecations.
>
> --- [Yelp engineering blog: Winning the Hackathon with Sourcegraph](https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html)

Yelp ran a survey of developers to see how they liked Sourcegraph:

> We surveyed developers on how they liked Sourcegraph compared to other code search/viewing tools we were using, and the results were heavily favored towards Sourcegraph. 70% of developers rated Sourcegraph as very good, and 51% percent of developers were already using Sourcegraph exclusively as their preferred code analysis tool. As a result of this feedback, we decided to make Sourcegraph the singular supported tool at Yelp for code search and viewing! --- [Yelp engineering blog: Winning the Hackathon with Sourcegraph](https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html)

In the same blog post, Yelp shared a chart of code search daily active users over time, which shows that usage grew consistently over time:

<img src="https://engineeringblog.yelp.com/images/posts/2019-11-01-winning-the-hackathon-with-sourcegraph/stats.jpg" alt="Daily active users of Sourcegraph at Yelp">

*Chart: Daily active users of Sourcegraph at Yelp*

Here's a photo from Yelp's hackathon where they first set up Sourcegraph:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Our engineers loved <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a> so much that we decided to make it the singular supported tool at Yelp for <a href="https://twitter.com/hashtag/codesearch?src=hash&amp;ref_src=twsrc%5Etfw">#codesearch</a> and viewing 🤩: <a href="https://t.co/RT41Vi5XuB">https://t.co/RT41Vi5XuB</a> <a href="https://t.co/udCFsQ19I6">pic.twitter.com/udCFsQ19I6</a></p>&mdash; Yelp Engineering (@YelpEngineering) <a href="https://twitter.com/YelpEngineering/status/1191460849162113024?ref_src=twsrc%5Etfw">November 4, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>