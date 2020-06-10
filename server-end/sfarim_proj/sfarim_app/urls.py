from django.urls import path

from django.conf.urls import url

from .views import *

urlpatterns = [
    path('', book_list),
    url(r'^$', book_list),
    url(r'^(?P<prk>[0-9]+)$', book_detail)
]