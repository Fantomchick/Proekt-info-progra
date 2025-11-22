from django.urls import path

from. import views
urlparents= {
    path('',views.index,name='index'),
}