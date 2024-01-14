from flask import Blueprint, jsonify, Response, request
from api.models import db, Podcasts, PodcastsSchema, Episodes, Transcripts, PodcastsWithEpisodesSchema, TranscriptsSchema
from feedgen.feed import FeedGenerator
import os

podcasts_endpoint = Blueprint('podcasts', __name__)

@podcasts_endpoint.route("/v1/podcasts", methods=["GET"])
def get_podcasts():
    podcasts_schema = PodcastsSchema(many=True)
    podcasts = Podcasts.query.all()
    return jsonify(podcasts_schema.dump(podcasts))

@podcasts_endpoint.route("/v1/podcasts/<id>", methods=["GET"])
def get_podcast(id):
    podcasts_schema = PodcastsWithEpisodesSchema()
    podcasts = Podcasts.query.filter_by(id=id).first()
    return jsonify(podcasts_schema.dump(podcasts))

@podcasts_endpoint.route("/v1/podcasts/<id>/episodes/<e_id>/transcript", methods=["GET"])
def get_podcast_transcript(id, e_id):
    transcript_schema = TranscriptsSchema()
    transcripts = Transcripts.query.filter_by(episode_id=e_id).first()
    return jsonify(transcript_schema.dump(transcripts))

@podcasts_endpoint.route("/v1/podcasts/<id>/rss", methods=["GET"])
def get_podcast_rss(id):
    include_transcript = request.args.get('include_transcript')

    podcast = Podcasts.query.filter_by(id=id).first()
    episodes = Episodes.query.filter_by(podcast_id=id).all()

    fg = FeedGenerator()
    fg.id("podcasts test-id")
    fg.title(f"{podcast.name} RSS feed")
    fg.description(f"{podcast.description}")
    fg.link(href='http://example.com', rel='alternate')

    for i in episodes:
        transcript = Transcripts.query.filter_by(episode_id=i.id).first()
        fe = fg.add_entry()
        fe.id(str(i.id))
        fe.title(i.name)
        fe.link(href=f"{os.environ.get('API_HOST')}/v1/podcasts/{podcast.id}/episodes/{i.id}/rss", rel='alternate')
        if include_transcript == "true":
            fe.description(transcript.transcript)
        else:
            fe.description(transcript.summary)

    return Response(fg.rss_str(pretty=True), mimetype="application/rss+xml")

