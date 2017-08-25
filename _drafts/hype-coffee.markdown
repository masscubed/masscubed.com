---
title: A Comprehensive Measure of the Hype Levels of On-Campus Coffee
date: 2017-08-24 17:35:00 +10:00
---

The time has finally come, dear  members of MASS^3. The time has come for there to be a comprehensive review of the hype level of the numerous coffee shops dotted around campus. Fortunately, I have been rigorously testing (along side my noble co-reviewer Liam Azara) the various cafes on campus. It has been an eye-opening semester thus far, very caffeinated and full of both great and terrible coffee, but we have come out of it victorious.

## Coffee-Hype Index (CHI)

Alongside testing the coffee I have worked to develop this measure of coffee hype. I will now take you through how I got there.

Let us first introduce the variable for CHI:

![chi.png](/uploads/chi.png)

To start off with the basics, most scales use some sort of rating out of ten, so we will do the same. So now CHI is equal to the sum of my rating and Liam's rating:

![chirsrl.png](/uploads/chirsrl.png)

However, this is not enough. The hype felt when drinking a cup of coffee is inversely proportional to the amount of hard earned cash one had to drop in order to acquire it, so adding a variable for the price we get:

![chirsrlp.png](/uploads/chirsrlp.png)

Now comes the time variables. The coffee shops around campus are fairly spread out, so the time it takes to get to them must be taken into account as the longer it takes to get to the cafe, the more annoyance is spawned to counteract the hype, so we must subtract a variable to take this into account. Now as there are no coffee shops right next to the common room (unfortunately) we wont use the absolute time, but the standard deviation of the time it takes to get to the cafes from the mean time. Thus we get:

![chirsrlpsigT.png](/uploads/chirsrlpsigT.png)

On the topic of time, the coffee, to my great sadness, does not arrive instantly when I order it. So the time between ordering and receiving the coffee is treated in the same way as time taken to get to the cafe:

![chirsrlpsigTsigt-404847.png](/uploads/chirsrlpsigTsigt-404847.png)

Finally, the last thing that must be considered is personal preference. More accurately how much someone cares about the price, or the time. Therefore, let's add two more variables that are unique to each person that describe how much their personal hype is affected:

![chirsrlpsigTsigtvar-580f3b.png](/uploads/chirsrlpsigTsigtvar-580f3b.png)

And there we have it. The formula used to quantify the hype of the coffee offered around campus!

## Methodology