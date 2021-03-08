REST api notes
--------------

REST is short for REpresentational State Transfer. Its an archhitectural style for designing API's.
REST is relatively recent, and is governed by a couple of rules. (there are others e.g. SOAP)

* Use HTTP request verbs. *
* Use a specific pattern of routes and endpoint URLs *

The Verbs. - GET, POST, PUT, PATCH(new), DELETE

CRUD (get - read) (post - create) (put, patch - update) (delete - delete)

Difference between put & patch
put - update an entire entry, new bike
patch - update just a piece of data, wheel of bike

Restful routing - rules

depending on verb you're either getting 
/articles  /articles/jack-bauer

when you update an article/rest with a PUT request, 
if you don't supply all the values you loose some of the original values, 
you replace them with what's supplied. Note mongoose overrides the specific 
mongo behaviour for this. 
