import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .models import Item

# Note: this view shouldn't be csrf_exempt in the final product
@csrf_exempt
def core(request):
    # HTTP Method usage:
    # GET       - Get items
    # POST      - Add new item
    # PUT       - Modify item (Major change)
    # PATCH     - Modify item (Minor change)
    # DELETE    - Delete item

    if request.method == 'GET':
        data_query = Item.objects.all().values()
        data = json.dumps(list(data_query))

        response = HttpResponse(data)
        response.headers['Content-Type'] = 'application/json'
        return response
    
    elif request.method == 'PATCH':
        input_data = json.loads(request.body.decode())
        
        items = Item.objects.filter(id=input_data['id'])
        if len(items) == 1:
            edit_item = items[0]
            edit_item.checked = input_data['checked']
            edit_item.save()

            return HttpResponse(json.dumps({'status': 'success'}))
        else:
            # TODO Give error message
            pass

    elif request.method == 'POST':
        # Note: request.POST doesn't work here
        input_data = json.loads(request.body.decode())

        new_item = Item(
            value = input_data['title']
        )
        new_item.save()

        return HttpResponse(json.dumps({'status': 'success'}))