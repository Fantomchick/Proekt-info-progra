from django.db import models
from django.contrib.auth.models import User

class Topic(models.Model):
    #CharField(max_length = 25)
    #IntegerField()
    #DateField()
    #DateTimeField()
    #FilePathField()-путь до файла
    cortez_type=(('Типа ключ нужный для джанго','Любое значение '),('бн','бан'),('врбн','временый бан'))
    topic_title=models.CharField(max_length = 100 )#Название темы
    topic_views=models.IntegerField()#Просмотры
    topic_topic=models.TextField()#Содержание
    topic_image=models.ImageField()#Картинки
    topic_date=models.DateTimeField()#Время появления темы
    # topic_author=User.username #Автор
    cortez_type=models.CharField(max_length = 100,choices = cortez_type)

    def __str__(self):
        return f'{self.topic_title}'
