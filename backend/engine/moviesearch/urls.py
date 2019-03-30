from . views import latestMovie,queryMovie,movieDetail,movieKeyword
from django.conf.urls import include,url

urlpatterns = [
    url('latestmovie/$',latestMovie.as_view(),name='latest'),
    url('querymovie/$',queryMovie.as_view(),name='query'),
    url('moviedetail/$',movieDetail.as_view(),name='moviedetails'),
    url('moviekeyword/$',movieKeyword.as_view(),name='moviedetails'),
]
