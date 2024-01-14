from flask import Blueprint
from api.models import db, Podcasts, Episodes, Transcripts

transcript_command = Blueprint('transcript', __name__)

@transcript_command.cli.command("add")
def add_transcript():

    print("Add new podcast transcript\n-=-=-=-=-=-=-=-=")
    podcasts = Podcasts.query.all()
    print("All podcasts")
    for i in podcasts:
        print(f"[{i.id}] {i.name}")

    podcast_id = input("Choose podcast ID: ")
    episodes = Episodes.query.filter_by(podcast_id=podcast_id).all()
    print(f"All episodes from podcast {podcast_id}")
    for i in episodes:
        print(f"[{i.id}] {i.name}")
    episode_id = input("Choose episode ID: ")
    summary = input("Summary: ")
    transcript_file = input("Transcript file: ")
    
    transcript = open(transcript_file, "r", encoding="UTF-8")

    new_transcript = Transcripts(episode_id=episode_id, summary=summary, transcript=transcript.read())
    new_transcript.save_to_db()
    transcript.close()
    print("New transcript added")
