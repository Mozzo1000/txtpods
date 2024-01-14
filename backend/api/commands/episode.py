from flask import Blueprint
from api.models import db, Podcasts, Episodes

episode_command = Blueprint('episode', __name__)

@episode_command.cli.command("add")
def add_episode():
    print("Add new podcast episode\n-=-=-=-=-=-=-=-=")

    podcasts = Podcasts.query.all()
    print("All podcasts")
    for i in podcasts:
        print(f"[{i.id}] {i.name}")

    podcast_id = input("Choose podcast ID: ")

    name = input("Name: ")
    order = input("Order: ")
    release_date = input("Release date: ")
    runtime = input("Runtime (minutes): ")
    source_url = input("Source URL: ")

    new_episode = Episodes(podcast_id=podcast_id, name=name, order=order, release_date=release_date, runtime_min=runtime, source_url=source_url)
    new_episode.save_to_db()
    print("New episode added")

    """
    name = input("Name: ")
    description = input("Description: ")
    genre = input("Genre: ")
    language = input("Language: ")
    poster_url = input("Poster URL: ")
    
    new_pod = Podcasts(name=name, description=description, genre=genre, language=language, poster_url=poster_url)
    new_pod.save_to_db()
    """

    #id = db.Column(db.Integer, primary_key=True)
    #podcast_id = db.Column(db.Integer, db.ForeignKey("podcasts.id"))
    #name = db.Column(db.String, nullable=False)
    #order = db.Column(db.Integer, nullable=False)
    #source_url = db.Column(db.String, nullable=False)
    #release_date = db.Column(db.String, nullable=False)
    #runtime_min = db.Column(db.Integer, nullable=False)