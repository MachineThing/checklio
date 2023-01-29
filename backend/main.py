import json
import secrets
from flask import Flask, request

app = Flask(__name__)

items = [{'value': 'Hello, world!', 'checked': False, 'id': secrets.token_urlsafe(16)}]

@app.route('/api', methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def get_data():
    # HTTP Method usage:
    # GET       - Get items
    # POST      - Add new todo
    # PUT       - Modify todo (Major change)
    # PATCH     - Modify todo (Minor change)
    # DELETE    - Delete todo
    if request.method == 'GET':
        return items
    if request.method == 'POST':
        data = json.loads(request.data.decode('utf-8'))['title']
        items.append({'value': data, 'checked': False, 'id': secrets.token_urlsafe(16)})
        print(items)
        return {'status': 'success'}

if __name__ == '__main__':
    app.run(debug=True)