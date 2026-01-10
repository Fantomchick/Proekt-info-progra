from django.urls import path

from . import views
#добавил привязку к идексу
urlpatterns= [
    path('',views.index,name='index'),
    path('auth/',views.auth,name='auth'),
    path('reg/',views.reg,name='reg'),
    path('onas/',views.onas,name='onas'),
    path('history-web/',views.history_web,name='history-web'),
    path('interesting/',views.interesting,name='interesting'),
    path('logout/',views.logout_view,name='logout')
]

