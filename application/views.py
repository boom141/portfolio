from flask import Blueprint,render_template,redirect,url_for
import os

views = Blueprint("views", __name__)

@views.route('/')
def index():
    return render_template('about.html')

@views.route('/skills')
def skills():
    return render_template('skills.html')

@views.route('/request_images')
def request_images():
    sample_images = os.listdir('./application/static/web_sample')
    return sample_images


@views.route('/request_videos')
def request_videos():
    sample_videos = os.listdir('./application/static/videos')
    return sample_videos


@views.route('/projects')
def projects():
    return render_template('projects.html')

