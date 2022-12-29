from flask import Flask

app = Flask(__name__)

@app.route('/api')
def get_data():
    return {
        'Name': 'Mason Fisher',
        'Color': 'Yellow'
    }

if __name__ == '__main__':
    app.run(debug=True)