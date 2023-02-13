from django.http import HttpResponse

def core(request):
    response = HttpResponse('[{\"hello\": \"world\"}]')
    response.headers['Content-Type'] = 'application/json'
    return response