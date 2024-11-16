from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    # Set the host parameter to '0.0.0.0' to make the Flask app accessible to all IPs
    app.run(host='0.0.0.0', port=5000)
