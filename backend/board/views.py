import json
from django.http import HttpResponse
from .models import Item

def core(request):
    data_query = Item.objects.all().values()
    data = json.dumps(list(data_query))

    response = HttpResponse(data)
    response.headers['Content-Type'] = 'application/json'
    return response