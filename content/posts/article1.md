---
title: "Article1"
author: subversive.eu
ShowToc: true
draft: true
hidemeta: false
tocopen: false
disableShare: false
categories:
 - Démocratie
date: 2020-11-03T17:44:04+02:00
cover: "https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png"
---

I will show you some extras about Markdown, css, and shortcode.
There is backup of simple tricks too.

<!--more-->

Example post for demonstration.

## Introduction {#introduction}

See [raw article](https://raw.githubusercontent.com/subversive-eu/hugo-subversive/exampleSite/content/posts/example.md)

## Image

{{< figure src="/media/logo.png" alt="image" caption="coucou" class="no-class" >}}

{{< figure src="/media/roman300AD.png" alt="image" caption="roman empire" class="no-class" >}}

It's better no ??

Let's check more !


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


{{< figure src="https://via.placeholder.com/400x280" alt="image" caption="figure-right" class="right" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{{< figure src="https://via.placeholder.com/400x280" alt="image" caption="figure-left" class="left" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< figure src="https://via.placeholder.com/1600x800" alt="image" caption="figure-normal (without any classes)" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{{< figure src="https://via.placeholder.com/1600x800" alt="image" caption="figure-big" class="big" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## PostMeta

I added this to my personnal website :

> I was thinking about not using sample-btn css.

```html
      <!--- I add some download options + printer option -->
      &nbsp;·&nbsp;
      <button class="sample-btn">
      <a name="Télécharger" href="/pdf/{{ .Title }}.pdf" target="_blank" rel="noopener noreferrer" download>{{ i18n "pdf" }}</a>
      </button>&nbsp;·&nbsp;<button class="sample-btn">
      <a name ="Imprimer" href="javascript:if(window.print)window.print()">{{ i18n "print" }}</a>
      </button>&nbsp;·&nbsp;
```

* Do not forget to add i18n translation for all languages

## youtube

{{< youtube "8IZ9Cqi2rGM" >}}

## tweeter

* With mobile, Tweeter appear simple blockquote.

{{< tweet 877500564405444608 >}}

## vimeo

{{< vimeo 146022717 >}}

## Instagram

* there is no way with facebook ...

## Blockquote hard

Normal quote:
{{< blockquote >}}
  This is a simple quote.
{{< /blockquote >}}

Quote with author
{{< blockquote author="Author2" >}}
  This is a quote with only an Author named Author2.
{{< /blockquote >}}

Quote with author and source
{{< blockquote author="Author3" source="Source" >}}
  This is a quote from Author3 and source "source."
{{< /blockquote >}}

Quote with author and link
{{< blockquote author="Author4" link="https://www.google.com" >}}
  This is a quote from Author4 and links to https://www.google.com.
{{< /blockquote >}}

Quote with author, link and title
{{< blockquote author="Author5" link="https://www.google.com" title="Google" >}}
  This is a quote from Author5 and links to https://www.google.com with title "Google."
{{< /blockquote >}}

Quote with author and a link longer than 32 characters, string is first cut at 32 characters then everything after the last forward slash is removed
{{< blockquote author="Author6" link="https://twitter.com/CryptoGangsta/status/716427930126196737" >}}
  This is a quote from Author5 and links to https://twitter.com/CryptoGangsta/status/716427930126196737 which is longer than 32 characters.
  <br>And this is a new line in the quote with the HTML br tag.
{{< /blockquote >}}

---

## Footer hugo theme

```html
    <span>Powered by <a href="https://gohugo.io/" rel="noopener noreferrer" target="_blank">Hugo️️</a>️</span>
    <span>&middot;</span>
    <span>Theme️ <a href="https://git.io/hugopapermod" rel="noopener" target="_blank">PaperMod</a></span>
```

---

## Conclusion

Do not use Instagram ? I hope will work on soon.
