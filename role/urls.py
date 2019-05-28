from django.contrib import admin
from django.urls import path, include
from role import views

app_name = 'role'

urlpatterns = [
    path('interests/', views.user_interests, name='user_interests'),
    path('options/', views.user_options, name='user_options'),
    path('roles/', views.user_roles, name='user_roles'),
    path('map/', views.map_option, name='map_option'),
]
