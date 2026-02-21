from django.db import models
from django.contrib.auth.models import User
from transliterate import translit

class Topic(models.Model):
    #CharField(max_length = 25)
    #IntegerField()
    #DateField()
    #DateTimeField()
    #FilePathField()-путь до файла
    cortez_type=(('Типа ключ нужный для джанго','Любое значение '),('бн','бан'),('врбн','временый бан'))
    # def user_directory_path(instanse,filename):
    #     title = str(translit(value = instanse.title,launguage_code='ru',reversed=True))
    #     id=str(instance.id)
    #     return f'topics/{id}_{title}/{filename}' #Это для наведения на картинку чтобы она менялась на другую
    topic_title=models.CharField(max_length = 100 )#Название темы
    topic_views=models.IntegerField()#Просмотры
    topic_topic=models.TextField()#Содержание
    topic_image=models.ImageField()#Картиникa
    # topic_image1=models.ImageField(default='none',upload_to=user_directory_path)#Продолжение измениния картинки при наведении
    # topic_image2=models.ImageField(default='none',upload_to=user_directory_path)
    topic_date=models.DateTimeField()#Время появления темы
    # topic_author=User.username #Автор
    cortez_type=models.CharField(max_length = 100,choices = cortez_type)

    def __str__(self):
        return f'{self.topic_title}'
