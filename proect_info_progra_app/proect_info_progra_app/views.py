from django.shortcuts import render
#рендеринг индекса
def index(request):
    return render(request,"index.html")

def auth(request):
    if request.method == 'POST':
        nickname = request.POST.get('nickname')
        password = request.POST.get('password')
        #\n-это перенос строки
        print("Ник: ",nickname,'\n',"Пароль: ",password,sep='')
    return render(request,"auth.html")
def reg(request):
    return render(request,"reg.html")