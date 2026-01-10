from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
#рендеринг индекса
def index(request):
    try:
        context = {'username': request.user.username}
        return render(request,"index.html",context)
    except AttributeError as e:
        return render(request,"index.html")

@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        print("logout test")
        logout(request)
        return JsonResponse({'status':'success'})

def auth(request):
    if request.method == 'POST':
        nickname = request.POST.get('nickname')
        password = request.POST.get('password')
        #\n-это перенос строки
        print("Ник: ",nickname,'\n',"Пароль: ",password,sep='')        
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
    return render(request,"onas.html")
def history_web(request):
    return render(request,"history-web.html")
def interesting(request):
    return render(request,"interesting.html")
