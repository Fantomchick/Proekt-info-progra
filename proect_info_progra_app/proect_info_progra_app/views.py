import random
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.http import JsonResponse,HttpResponse
from .models import Topic, EmailDigest
from django.views.decorators.csrf import csrf_exempt
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
#рендеринг индекса
def index(request):
    try:
        context = {
            'username': request.user.username,
            }
        return render(request,"index.html",context)
    except AttributeError as e:
        return render(request,"index.html")

def account(request):
    try:
        if request.method == 'POST':
            email = request.POST.get('email')
            password = request.POST.get('password')
            nickname = request.POST.get('nickname')
            username = nickname       
            print("Ник: ",username,'\n',"Пароль: ",password,"Почта",email,'\n',sep='')
            return JsonResponse({'status':'success'})
        return render(request,'account.html')
    except AttributeError:
        return HttpResponse("<h1>401 Unauthorized</h1>",status=401)
@csrf_exempt
def auth(request):
    if request.method == 'POST':
        username = request.POST.get('nickname_auth')
        password = request.POST.get('password_auth')
        user=authenticate(request,username=username,password=password)
        if user is not None:
            login(request, user )
            return JsonResponse({'status':'success'}) 
        else:
            login(request, user )
            return JsonResponse({'status':'error'})  
    return render(request)
@csrf_exempt
def verify(request):
    if request.method == 'POST' and request.POST.get('email'):

        try:
            email = request.POST.get('email')
            validate_email(email)
            print('Получилось взять имейл: ', email)
        except ValidationError:
            return JsonResponse({'status': 'error', 'message' :'Неправильно ввёден адрес почты'}, status=400)


        if User.objects.filter(email=email).exists():
            return JsonResponse({'status': 'error', 'message' :'Пользователь с такой почтой уже есть'}, status=400)

        code = str(random.randint(1000, 9999))
        
        request.session['verification_code'] = code
        request.session['verifying_email'] = email
        print(code)
        
        try:
            send_mail(
                'Код подтверждения регистрации',
                f'Ваш код: {code}',
                'iskkab2000@yandex.ru',#пока нет почты так как локалка
                [email],
                fail_silently=False,
            )
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message' :str(e)}, status=500)
@csrf_exempt
def email(request):
    if request.method == 'POST' and request.POST.get('email_job'):
        
        try:
            email = request.POST.get('email_job')
            validate_email(email)
            print('Получилось взять имейл: ', email)
        except ValidationError:
            return JsonResponse({'status': 'error', 'message' : 'Неправильно ввёден адрес почты'}, status=400)
        
        if User.objects.filter(email=email).exists():
            return JsonResponse({'status': 'error', 'message':'Пользователь с такой почтой уже есть'}, status=400)
        
        send_mail(
            "Полезная рассылка",
            "Вы будете получать полезную рассылку о полезных продуктах.",
            'iskkab2000@yandex.ru',
            [email],
            fail_silently=False,
        )

        email_digest = EmailDigest(email = email)
        email_digest.save()

        return JsonResponse({'status': 'success', 'message' : 'Отправлено'})
    return JsonResponse({'status' : 'error', 'message' : 'Метод не разрешён. Только POST.'}, status=405)

@csrf_exempt
def reg(request):   
    if request.method == 'POST':
        username = request.POST.get('nickname')
        password = request.POST.get('password')
        password_email= request.POST.get('passwordEmail')
        session_code = request.session.get('verification_code')
        email = request.session.get('verifying_email')
        print("Код",password_email,'\n',"Код c почты",session_code,sep='')
        if not session_code or password_email!= session_code:
            return JsonResponse({'status': 'error', 'message' :'Неверный код подтверждения'}, status=400)
        
        try:
            user=User.objects.create_user(username,email,password)
            login(request, user)
            del request.session['verification_code']
            print("Ник: ",username,'\n',"Пароль: ",password,"Почта",email,'\n',"Код",password_email,'\n',"Код c почты",session_code,'\n',sep='')
            return JsonResponse({'status': 'success', 'message' :'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message' : 'Ошибка при создании'}, status=500)

    return render(request)

def onas(request):
    flag=1
    context={
        'flag_onas':flag,
    }
    try:
        context = {'flag_onas':flag,'username': request.user.username}
        return render(request,"onas.html",context)
    except AttributeError as e:
        return render(request,"onas.html",context)    

def history_web(request):
    flag=1
    context={
        'flag_history_web':flag,
    }    
    try:
        context = {'flag_history_web':flag,'username': request.user.username}
        return render(request,"history-web.html",context)
    except AttributeError as e:
        return render(request,"history-web.html",context)    

def interesting(request):
    flag=1
    context={
        'flag_interesting':flag,
    }    
    try:
        context = {'flag_interesting':flag,'username': request.user.username}
        return render(request,"interesting.html",context)
    except AttributeError as e:
        return render(request,"interesting.html",context)    

def logout_view(request):
    logout(request)
    return redirect('index')

def forum(request, themes_type):
    try:
        type_name = ''
        if themes_type == "all":
            topic = Topic.objects.all()
        else:    
            topic = Topic.objects.filter(themes_type = themes_type)
            topic_type = Topic.themes_types
            print(topic_type)
            for tp in topic_type:
                if tp[0] == themes_type:
                    type_name = str(tp[1])
                    break
        flag = 1
        context = {
            'flag_auth': flag,
            'topic_list': topic,
            'type_name' : type_name,
            'username': request.user.username
        }
        return render(request,"forum.html",context)
    except AttributeError as e:
        return render(request,"forum.html") 
def topic_template(request, id):
    topic = Topic.objects.get(id = id)
    flag=1
    # Код для абзацев

    # topics = ''
    # print(type(topics))
    # topics = topic.topic_topic.split('\r\n')
    # # print(topic.topic_topic[335])
    # # print(ord(topic.topic_topic[335]))

    # for i in range(0, len(topics), 2):
    #     topics[i] = '<p>' + topics[i] + '</p>'
    # topics1=''
    # for i in range(0, len(topics), 2):
    #     topics1=topics1 + topics[i]         
    # # print(topics)
    # # print(topics[0])
    # # print(topics1)
    # topics = str(topics1)
    # print('test topics: ', topics)
    # print(type(topics))

    context= {
        'flag_auth': flag, 
        'username': request.user.username,
        'topic' : topic,
    }     
    return render(request,"topic-template.html", context)        
    # except:
    #     return render(request,"topic-template.html")     
    
