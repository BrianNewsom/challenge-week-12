# Challenge Week 12 Submission Template

# Reddit Data Challenges

## Challenge 1

[image](reddit/ch1.png)

## Challenge 2

I find it interesting that with each comment, the flair and flair text is stored in the json object.  This seems like it could provide some interesting information about a commenter, it might even be interesting to analyze how these change over time for a single user.  When I did a findOne(), I got back a flair_text of "Do you even quest, bro? [scaper since 2004] . . . " which is a pretty gamer nerdy tag, and could provide interesting insights.

## Challenge 3

The possibilities with this dataset are huge because of the sheer magnitude of data.  You could learn about how people comment, do sentiment analysis, do some sort of intelligence analysis based upon sentence structure used in different subreddits, or try and create the perfect comment (a fusion of the most upvoted).

## Challenge 4

As mentioned above, you could learn a lot with NLP to learn how the Reddit community types, how supportive they are of each other, or how many people are just trolls. With some complex analysis you could figure out what they are interested in by using the most upvoted comments, there are so many options.

## Challenge 5

[Link to Code or pasted code]
[Answer]

## Challenge 6

[What does this change about our analysis?]

## Challenge 7

[How would you change your conclusions?]

## Challenge 8

[Bias in answer]

## Challenge 9

 * Only popular subreddits included
 * No private subreddits included
 * Filtered for bad words
 * Generally the reddit community is heavily slated towards tech so the data should not be applied to anything but the reddit community

## Challenge 10

Proving the bias that only comments with 10 or more upvotes would be quite simple. Doing a count of those matching less than 10 vs. 10 or greater should be 0 for the first and the count of all the comments for the second.  If not 0 you could do probabilistic analysis to determine if there is any skew in either direction.

# Yelp and Weather 

## Challenge 1
db.prec.aggregate([{"$match":{"DATE":{$regex:/20100425/}}},{"$group":{"_id":null,"total_precip":{"$sum":"$HPCP"}}}])
{ "_id" : null, "total_precip" : 62 }
62/100ths of an in.
[image](weather/cp1.png)

## Challenge 2

> db.norm.aggregate([{"$match":{"DATE":{$regex:/20100425/}}},{"$group":{"_id":null,"Avg Wind Speed: ":{"$avg":"$HLY-WIND-AVGSPD"}}}])
{ "_id" : null, "Avg Wind Speed: " : 92.70833333333333 }
9.27 mph.

## Challenge 3

> db.all.aggregate([{"$match":{"type":"business","city":"Madison"}},{"$group":{"
_id":null,"Reviews in Madison: ":{"$sum":"$review_count"}}}])
{ "_id" : null, "Reviews in Madison: " : 34410 }
34410 reviews

## Challenge 4

> db.all.aggregate([{"$match":{"type":"business","city":"Las Vegas"}},{"$group":
{"_id":null,"Reviews in Vegas: ":{"$sum":"$review_count"}}}])
{ "_id" : null, "Reviews in Vegas: " : 577550 }
577,550 reviews

## Challenge 5

> db.all.aggregate([{"$match":{"type":"business","city":"Pheonix"}},{"$group":{"
_id":null,"Reviews in Pheonix: ":{"$sum":"$review_count"}}}])
{ "_id" : null, "Reviews in Pheonix: " : 16 }
16 reviews

## Challenge 6 [BONUS]

[Code]
[Answer]



