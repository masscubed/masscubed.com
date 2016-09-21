---
title: The Travelling Lost Cat Poster Problem
date: 2016-09-21 00:39:00 +10:00
categories:
- Editorial
subtitle: Learn one of the most famous computer science problems of all time— without
  a single line of code!
author: Carlos Melegrito
image: https://hd.unsplash.com/photo-1447969025943-8219c41ea47a
imageSource: Unsplash
imageSourceURL: https://unsplash.com/search/cat?photo=C7OHGQYtvxg
cover: true
---

Why Computer Science? Because it's the future. No, I'm serious— a decade from now, computer science is [expected to be in the primary school curriculum](https://theconversation.com/an-education-for-the-21st-century-means-teaching-coding-in-schools-42046). Pretty soon the next-generation millenials (if they're still called millenials then) will know more about these problems in their younger ages than you do right now. So you've got a lot of catching up to do, if you want to keep hip and cool with the youngsters!

I'll start this off like any familiar math problem: with a situational dilemma. Don't worry, this'll be exciting— and I promise I won't bore you. Are you ready? Here we go.

Suppose you're walking around campus to distribute posters of your lost cat. Say you've got a full stack of A4s in your bag and a roll of tape, and you want to place them on the doors of every lecture theatre— just to let people know you really do miss your cat. Also suppose, that all your friends are away that day, nobody's willing to help you put the posters up, it takes quite a bit of time to travel around specific paths around campus, and you've got a lab to get to in an hour. Hectic.

So what to do? You have a few options.

## Option 1

Intuitively, you could just fast-walk around campus (you gotta act cool, after all) through a circuit of all the closest lecture theatres around you. Essentially, just keep posting the posters up until you run out of time. This is a great solution if you're the kinda person who prefers to act before you think. 

But the thing is, you don't end up putting all the posters you originally intended, and you have to make sure that your path from lecture theature to lecture theatre brings you to your lab before you run out of time. It's not very efficient— and you know you can do better than that!

## Option 2

Solution two: plan it out a little. What if you visualised all the possible paths that visited every single lecture theatre, and pick the best one out of them all? It definitely sounds simple. But then you pick up a copy of the campus map, and realise there are so many ways from lecture theatre to lecture theatre. Perhaps if you only picked the shortest paths between lecture theatres?

Well, it won't work, because if you're good at math, you've now probably realised that if we have *n* lecture theatres, there are at least *n!* paths between each of them. Even if there are just 12 lecture theatres, you'd have to visualise 479,001,600 possible choices of paths. *Nope nope nope nope nope*.

![FullSizeRender.jpg](/uploads/FullSizeRender.jpg)

Such lecture theatres. Many paths.

## Option 3

The next option? Play it like chess. Not literally, but work through the problem like you would decide your next move in a game of chess. How? Start off with your current position: what are the closest lecture theatres to you? Which path to the closest lecture theatres will take the minimal amount of time? Then, imagine yourself at that next lecture theatre. Imagine the closest lecture theatres to that one. Which paths are better? Did visiting that path save you time, or could you have picked the other path which saves you more time later?

So many questions!— but the goal here is you just imagine yourself taking a particular path, and eliminating options based on what you think may take too long. Here's the thing though: this may sound smart, but it's actually not. If you did this in the most efficient way, it would still take you at least *n²* the amount of visualisations, where *n* is the number of lecture theatres. But *12²* at 144 is better than 400 million options.

## The Answer

Okay, so you're now probably itching for a faster solution. What do you think is the fastest way to do this? In fact, I'll let you think about this one for now— so don't try and read the next part until you've guessed a possible answer at least.

Done? Okay, so here goes. I'll figuratively turn to the back of the book for the answers just for you. Are you ready for it? Are you sure? Make sure you're sitting down when you read this, because this one's a *doozy*. The answer: there is no faster way to do this. Yup. Insane.

Let's examine our three solutions in more, computer science terms. Our first solution was essentially a naive, *greedy* way to do it. That is, to just pick what we think is the best path and if we run out of time, that's okay— we at least got some posters up. Not enough exposure for our dear little kitty however.

The second solution is termed the *brute force* approach. That is, to think of every permutation and just pick the best one. Though we do get to consider every possible path around campus, it's not necessarily a fast way to do it. That is, even if you got a computer to crunch this problem and generate all possible paths and get it to spit it out to you, it would take a tremendous amount of time. You'd probably be dead before the computer would even reach an answer given the realistic amount of lecture theatres on campus. But at least you'll join your cat, together lost in eternity!

The third solution is a bit more smart— in fact, it is almost the same way the world's best chess grandmasters play chess. In computer science terms, it's called using a little bit of [*backtracking*](https://web.archive.org/web/20070317015632/http://www.cse.ohio-state.edu/~gurari/course/cis680/cis680Ch19.html#QQ1-51-128) and [*dynamic programming*](http://stackoverflow.com/questions/1065433/what-is-dynamic-programming) (a.k.a. using previous solutions to affect your choices). It's definitely a lot faster than generating all permutations, but it's still no faster once you have to crunch the data for a whole lot of lecture theatres. All in all however, this is probably the fastest known way to do it.

![paths.jpg](/uploads/paths.jpg)

This entire problem is also known as the [*Travelling Salesman Problem*](https://www.wired.com/2013/01/traveling-salesman-problem/) in computer science, and the same situation can be generalised into a whole lot more real-world problems. For example, delivering parcels, scheduling flight patterns, and even just navigating a map. It's one of the most famous (perhaps, notoriously infamous) problems in computer science because it's a dilemma that's entirely dependent on the given input and the type of solution it requires.

But hey, even if you didn't get to put up all the posters, you at least learned a little bit about computer science! Oh hold on— what's that mysterious black figure next to your lab class? Ah, it's your cat!

<div class="footnotes">
<p>The <a href="https://unsplash.com/search/cat?photo=C7OHGQYtvxg">above cat picture</a> is from Unsplash and is used under a royalty-free license.</p>

</div>