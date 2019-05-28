from django.contrib import admin
from django.urls import path, include
from home import views

app_name = 'home'

urlpatterns = [
    path('', views.home, name='index'),
    path('contato', views.contato, name='contato'),
    path('sobre', views.sobre, name='sobre'),
    path('notFound', views.notFound, name='notfound'),
]