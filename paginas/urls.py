from django.contrib import admin
from django.urls import path
from .views import IndexView, SobreView, SiteView

urlpatterns = [
    path('', IndexView.as_view(), name='inicio'),
    path('sobre/', SobreView.as_view(), name='sobre'),
    path('site/', SiteView.as_view(), name='site'),
]