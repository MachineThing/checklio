import json
from flask import Flask, request
import item

app = Flask(__name__)

items = [item.item("Hello, world!")]

@app.route('/api/', methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
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
        items.append(item.item(data))
        print(items)
        return {'status': 'success'}

if __name__ == '__main__':
    app.run(debug=True)