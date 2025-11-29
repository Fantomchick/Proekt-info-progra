from django.shortcuts import render
#рендеринг индекса
def index(request):
    return render(request,"index.html")
