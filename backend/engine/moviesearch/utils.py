import http.client
import json

def get_latest(page):
    conn = http.client.HTTPSConnection("api.themoviedb.org")
    payload = "{}"
    conn.request("GET", "/3/trending/movie/day?api_key=07972cec22c8bbb2d2511fb7e46f670f&page="+str(page), payload)
    res = conn.getresponse()
    data = res.read()
    return json.loads(data.decode("utf-8"))

def get_query(page,query):

	conn = http.client.HTTPSConnection("api.themoviedb.org")

	payload = "{}"
	query=query.replace(" ","%20")
	conn.request("GET", "/3/search/movie?include_adult=true&page="+page+"&query="+query+"&language=en-US&api_key=07972cec22c8bbb2d2511fb7e46f670f", payload)

	res = conn.getresponse()
	data = res.read()
	print(data.decode("utf-8"))
	return json.loads(data.decode("utf-8"))

def get_details(page,movieId):

	conn = http.client.HTTPSConnection("api.themoviedb.org")
	payload = "{}"
	query=query.replace(" ","%20")
	conn.request("GET", "/3/search/movie?include_adult=true&page="+page+"&query="+query+"&language=en-US&api_key=07972cec22c8bbb2d2511fb7e46f670f", payload)
	res = conn.getresponse()
	data = res.read()
	return json.loads(data.decode("utf-8"))

def get_all_detail(movieId,kind):
	conn = http.client.HTTPSConnection("api.themoviedb.org")
	payload = "{}"
	conn.request("GET", "/3/movie/"+str(movieId)+"/"+kind+"?api_key=07972cec22c8bbb2d2511fb7e46f670f", payload)
	res = conn.getresponse()
	data = res.read()
	return json.loads(data.decode("utf-8"))
