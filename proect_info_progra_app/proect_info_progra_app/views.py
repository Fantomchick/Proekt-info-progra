from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.http import JsonResponse
from .models import Topic
from django.views.decorators.csrf import csrf_exempt
#рендеринг индекса
def index(request):
    try:
        context = {'username': request.user.username}
        return render(request,"index.html",context)
    except AttributeError as e:
        return render(request,"index.html")

def auth(request):
    if request.method == 'POST':
        username = request.POST.get('nickname')
        password = request.POST.get('password')
        #\n-это перенос строки
        print("Ник: ",username,'\n',"Пароль: ",password,sep='')
        # Авторизация здесь ищется зарегистрированого пользователя
        user=authenticate(request,username=username,password=password)
        if user is not None: #Если пользователь есть
            print('yes')
            login(request, user )
            JsonResponse({'status' : 'success'})  
        else:
            print('no')
            JsonResponse({'status' : 'error'})    
    return render(request,"auth.html")
def reg(request):
    if request.method == 'POST':
        username = request.POST.get('nickname')
        password = request.POST.get('password')
        email = request.POST.get('email')
        cod_email= request.POST.get('codEmail')
        password_proverka = request.POST.get('passwordProverka')
        user=User.objects.create_user(username,email,password)
        login(request, user)
        #\n-это перенос строки
        print("Ник: ",username,'\n',"Пароль: ",password,"Почта",email,'\n',"Код",cod_email,'\n',"Пароль проверка",password_proverka,sep='')
        return JsonResponse({'status':'success'})

    return render(request,"reg.html")

def onas(request):
    try:
        context = {'username': request.user.username}
        return render(request,"onas.html",context)
    except AttributeError as e:
        return render(request,"onas.html")    

def history_web(request):
    try:
        context = {'username': request.user.username}
        return render(request,"history-web.html",context)
    except AttributeError as e:
        return render(request,"history-web.html")    

def interesting(request):
    try:
        context = {'username': request.user.username}
        return render(request,"interesting.html",context)
    except AttributeError as e:
        return render(request,"interesting.html")    

def logout_view(request):
    logout(request)
    return redirect('index')

def forum(request):
    try:
        topic = Topic.objects.all()
        context = {
            'topic': topic,
            'username': request.user.username
        }
        return render(request,"forum.html",context)
    except AttributeError as e:
        return render(request,"forum.html") 
def topic_template(request, id):
    # try:
        topic = Topic.objects.get(id = id)
        
        # for i in range(0, len(topic.topic_topic) ):
        #     if ord(topic.topic_topic[i]) == 13:
        #         topic.topic_topic = topic.topic_topic[i] + '</p>'
        #         topic.topic_topic = topic.topic_topic[i]  + '<p>'
        
        # topic.topic_topic = '<p>' + topic.topic_topic + '</p>'
        topics = topic.topic_topic.split('\r\n')
        # print(topic.topic_topic[335])
        # print(ord(topic.topic_topic[335]))

        for i in range(0, len(topics), 2):
            topics[i] = '<p>' + topics[i] + '</p>'
        print(topics)
        print(topics[0])

        context= { 
            'username': request.user.username,
            'topic' : topic,
            'topics' : topics
        }     
        return render(request,"topic-template.html",context)        
    # except:
    #     return render(request,"topic-template.html")     
    
