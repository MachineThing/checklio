import requests

from django.shortcuts import render

def index(request):
    page = requests.get('http://localhost:8080')

    return render(request, 'index.html', {'node': page.text})