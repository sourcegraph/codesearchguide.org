# How code search is used

Why do developers search code? What higher-level tasks does code search help with?

The categorization here is a rough attempt to answer these questions. As with any taxonomy, it's imperfect. Once you start using code search, you'll likely find yourself using it frequently (12x/day on average, according to [Google's study](story/google.md)) for many different tasks. You might just start thinking of code search as a way to answer questions throughout the day, or as an extension of your brain.

## Use cases

### Understanding code (and dev onboarding) {#dev-onboarding}

Devs spend most of their time reading and understanding code, not writing code. Dev onboarding (when you switch to a new project/team/company) is an especially acute instance of needing to understand code.

Understanding code means several things, which code search tools can help with:

- Being able to form a clear mental model of the overall system (i.e., knowing the various parts and how they relate)
- Knowing where the code is or being able to find it
- Knowing what dependencies there are on the code (i.e., what would be the impact of changing the code)
- Knowing what the code depends on (i.e., internal/external libraries used)
- Knowing why the code was written as such

### Code reuse

The best code is the code you *don't* need to write---assuming, of course, that you can easily discover existing code to reuse and assess its quality and suitability.

Devs writing **application code** can use a code search tool to:

- Discover existing code to reuse ("Has anyone written a library to do ___?")
- Assess the quality and suitability of code to reuse ("Is it widely used? Is it tested? Is it maintained? Etc.")
- Find real-world usage examples and patterns ("How do I do ___?")

Just as important, code search *also* helps devs writing **library code**:

- Understand usage patterns of their libraries (to plan future releases and deprecations)
- Find patterns of duplicated or problematic code (to plan the creation of new libraries or APIs)
- Measure the impact of their libraries (to justify their team's investment)

### Finding and fixing vulnerabilities

Security is a property of an entire system, not a single project, and it requires constant readiness to react quickly to new kinds of threats. Code search tools work across the entire codebase and help you:

- Find everywhere affected by a novel vulnerability (especially when the vulnerability is in your internal code or otherwise too complex for existing security scanners to automatically detect it)
- Fix the problem everywhere (or at least track the progress of the fix automatically without needing to resort to manual spreadsheets or lists)
- Proactively identify bad security practices in code throughout the codebase

### Incident response

When your service goes down, you need to figure out what happened and who else can help. Those answers are likely to exist in the code. Code search tools help you quickly:

- Find recent code changes related to certain topics or areas of the codebase
- Locate the source of an error message or exception
- Trace cross-service dependencies and API calls
- See code owners and documentation
- View other code metadata from tools for error logging, observability, deployment, etc.

## Others

A Google study identified [5 categories of responses to "What question are you trying to answer [with code search]?"](story/google.md):

- Example code needed (How)
- Exploring or reading code (What)
- Code localization (Where)
- Determine impact (Why)
- Metadata (Who and When)

A Facebook talk gave [5 use cases for code search](story/facebook.md):

- Changing code
- Exploring code
- Refactoring code
- Understanding code
- Debugging code

## Analogy to web search

Suppose someone had never heard of Google (or any other web search engine), and they asked you, "What do you use Google for?" How would you answer that question?

One way is to think of your last few Google searches. You tell them, "Well, I used Google to look up [Abraham Lincoln's birthday](https://www.google.com/search?q=abraham+lincoln%27s+birthday), a pasta marinara recipe, and the directions to a restaurant." The person walks away confused, thinking that Google is a tool for doing a few random things: looking up famous people's birthdays, finding recipes, and getting directions.

Instead, you might tell them, "It's a way to quickly answer any kind of question." The person would probably still walk away confused, since that's quite vague.

In reality, Google and other web search engines are so widely used that virtually nobody seriously asks "What do you use Google for?" New computer users are guided to web search engines gradually in many ways, from their operating system's search bars and assistant features, to their web browser's default homepages. It's universally accepted that web search engines are a necessary and standard part of using a computer.

Code search hasn't yet achieved that level of adoption and normalcy, but that seems to be changing in recent years.