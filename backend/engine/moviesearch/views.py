from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework import generics
from .utils import get_latest,get_query,get_all_detail,get_details

class latestMovie(APIView):
    def get(self,request,*args,**kwargs):
        page=self.request.query_params.get("page")
        latest_movie=get_latest(page)
        return Response(latest_movie,status=status.HTTP_200_OK)

class queryMovie(APIView):

	def get(self,request,*args,**kwargs):
		page=self.request.query_params.get("page")
		query=self.request.query_params.get("query")
		query_result=get_query(page,query)
		return Response(query_result,status=status.HTTP_200_OK)

class movieDetail(APIView):

	def get(self,request,*args,**kwargs):
		page=self.request.query_params.get("page")
		movieId=self.request.query_params.get("movieId")
		detail=get_details(page,movieId)
		return Response(detail,status=status.HTTP_200_OK)

class movieKeyword(APIView):

	def get(self,request,*args,**kwargs):
		movieId=self.request.query_params.get("movieId")
		kind=self.request.query_params.get("type")
		movie_keyword=get_all_detail(movieId,kind)
		return Response(movie_keyword,status=status.HTTP_200_OK)
