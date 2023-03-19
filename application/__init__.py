from flask import Flask
import os

APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE = os.path.join(APP_PATH, 'application/templates')
STATIC = os.path.join(APP_PATH, 'application/static')

def create_app():
    app = Flask(__name__, template_folder=TEMPLATE,static_folder=STATIC)

    with app.app_context():
        from .views import views
        app.register_blueprint(views, url_prefix='/')

    return app

