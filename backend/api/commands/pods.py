from flask import Blueprint
from api.models import db, Podcasts

pods_command = Blueprint('pods', __name__)

@pods_command.cli.command("add")
def add_podcast():
    print("Add new podcast\n-=-=-=-=-=-=-=-=")
    name = input("Name: ")
    description = input("Description: ")
    genre = input("Genre: ")
    language = input("Language: ")
    poster_url = input("Poster URL: ")
    
    new_pod = Podcasts(name=name, description=description, genre=genre, language=language, poster_url=poster_url)
    new_pod.save_to_db()
    print("New podcast added")