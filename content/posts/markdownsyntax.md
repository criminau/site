---
title: "Markdown Syntax - How to use figure with HTML + CSS and tabs"
author: Subversive Theme Author
ShowToc: true
draft: false
date: 2020-11-09T17:44:04+02:00
hidemeta: false
tocopen: false
disableShare: false
cover:
    relative: true
    image: "media/markdown-cover-min.jpg"
    alt: "Markdown Syntax"
    Caption: ""
images: "media/markdown-cover-min.jpg"
keyword: "Markdown syntax, copy button, figure, details, expand, columns, tabs, blockquote, youtube responsive, HTML, CSS, HUGO, hugo authors, gohugo, hugo cms, Markdown"
pdfname: ""
---

This article offers basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS like figure.
<!--more-->

PS: Le document PDF est complet sans modification.
PS [EN]: PDF doc is full, no changes.

[Visualiser la page sans formatage via github](https://raw.githubusercontent.com/criminau/site/master/content/posts/markdownsyntax.md)

# H1

[Le meilleur guide de Syntaxe Markdown](https://www.markdownguide.org/basic-syntax/) trouvé !

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Tabs

{{< tabs "uniqueid" >}}
{{< tab "MacOS" >}}

### MacOS Content

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa protulit, sed sed aere valvis inhaesuro Pallas animam: qui quid, ignes. Miseratus fonte Ditis conubia.

{{< /tab >}}
{{< tab "Linux" >}}
### Linux Content
{{< /tab >}}
{{< tab "Windows" >}}
### Windows Content
{{< /tab >}}
{{< /tabs >}}

## Buttons

{{< button href="https://youtu.be/QRcrsHro6xI" title="Go Home Fucking Tourists" >}}Go Home Fucking Tourists{{< /button >}}

{{< button href="https://github.com/criminau/" title="Contribute button" >}}Contribute{{< /button >}}

## Colunms

{{< columns >}} <!-- begin columns block -->
### Left Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa protulit, sed sed aere valvis inhaesuro Pallas animam: qui quid, ignes. Miseratus fonte Ditis conubia.

<---> <!-- magic separator, between columns -->

### Mid Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat stringit, frustra Saturnius uteroque inter!

<---> <!-- magic separator, between columns -->

### Right Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa protulit, sed sed aere valvis inhaesuro Pallas animam: qui quid, ignes. Miseratus fonte Ditis conubia.
{{< /columns >}}

## Details

{{< details >}}
#### Markdown content

Le CSS ne prendra en charge que les titres en h4 soit 4 #(hashtag).  
La couleur de font est "content" du thème foncé, nommé "dark".  
{{< /details >}}

{{< details "Custom label" >}}
#### Markdown content
Lorem markdownum insigne...
{{< /details >}}

{{< details "Custom Label" "..." >}}
#### Markdown content
Lorem markdownum insigne...
{{< /details >}}

## Blockquote

### Blockquote sample

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.  
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## figure

Figure (image insertion) playing with text !

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


{{< figure src="https://via.placeholder.com/400x280" alt="image" caption="figure-right" class="right" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{{< figure src="https://via.placeholder.com/400x280" alt="image" caption="figure-left" class="left" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{{< figure src="https://via.placeholder.com/1600x800" alt="image" caption="figure-normal (without any classes)" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{{< figure src="https://via.placeholder.com/1600x800" alt="image" caption="figure-big" class="big" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Tables

Table:

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |



| Left-Aligned  | Center Aligned |
| :------------ | :------------: |
| col 3 is      |          $1600 |
| col 2 is      |            $12 |
| zebra stripes |             $1 |



Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Highlight

{{< highlight angular2 >}}

highlight shortcode Here testing angular2

{{< / highlight >}}

[check More here](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode)

## Code Blocks

### Code block with language

```html
<!doctype html>
  <html lang="fr">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
  </html>
```

### Code block without language

```
<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
  </html>
```

### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

### Code block with Hugo's internal highlight and white color

{{< highlight angular2 >}}
localectl set-locale LANG=fr_FR.UTF-8
localectl set-keymap fr
localectl set-x11-keymap fr
reboot
{{< /highlight >}}

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* And another item

### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements

### hr

---

***

___

### abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## youtube

{{< youtube "xuvCYZMWWMw" >}}
{{< youtube "falFFuZEPd4" >}}

## tweeter

**With mobile and some privacy browser.., twitter appear like simple blockquote**  
**If not, appear like twitter want**

{{< tweet 877500564405444608 >}}

## vimeo

{{< vimeo 146022717 >}}

## Ifram PDF

{{< iframepdf gt-metrix-report >}}

## Definition lists.

Cat
: Fluffy animal everyone likes

Internet
: Vector of transmission for pictures of cats

## Link

[Histoire du Béarn](https://gallica.bnf.fr/ark:/12148/bpt6k5772863h/f19.image)
