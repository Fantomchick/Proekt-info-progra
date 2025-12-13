from django.urls import path

from . import views
#добавил привязку к идексу
urlpatterns= [
    path('',views.index,name='index'),
    path('auth/',views.auth,name='auth'),
    path('reg/',views.reg,name='reg'),
]

