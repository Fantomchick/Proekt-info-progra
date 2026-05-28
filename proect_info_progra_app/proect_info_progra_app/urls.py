from django.urls import path

from . import views
from django.conf import settings
from django.conf.urls.static import static
#добавил привязку к идексу
urlpatterns= [
    path('',views.index,name='index'),
    path('account/',views.account,name='account'),
    path('auth/',views.auth,name='auth'),
    path('verify/',views.verify,name='verify'),
    path('email/',views.email,name='email'),
    path('reg/',views.reg,name='reg'),
    path('onas/',views.onas,name='onas'),
    path('history-web/',views.history_web,name='history-web'),
    path('interesting/',views.interesting,name='interesting'),
    path('logout/',views.logout_view,name='logout'),
    path('forum/<str:themes_type>',views.forum,name='forum'),
    path('forum/topic/<int:id>/',views.topic_template,name='topic-template'),
    path('forum/topic/<int:id>/comment-creating/',views.comment_creating, name='comment_creating'),
     path('forum/topic/<int:id>/comment-deleting/', views.comment_deleting, name='comment_deleting'),
     
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


