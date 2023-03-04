import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .models import Item

# Note: this view shouldn't be csrf_exempt in the final product
@csrf_exempt
def core(request):
    if request.method == 'GET':
        data_query = Item.objects.all().values()
        data = json.dumps(list(data_query))

        response = HttpResponse(data)
        response.headers['Content-Type'] = 'application/json'
        return response
    elif request.method == 'POST':
        # Note: request.POST doesn't work here
        input_data = json.loads(request.body.decode())

        new_item = Item(
            value = input_data['title']
        )
        new_item.save()

        return HttpResponse(json.dumps({'status': 'success'}))