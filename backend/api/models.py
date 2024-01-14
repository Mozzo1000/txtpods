from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()

class Transcripts(db.Model):
    __tablename__ = "transcripts"
    id = db.Column(db.Integer, primary_key=True)
    episode_id = db.Column(db.Integer, db.ForeignKey("episodes.id"))
    summary = db.Column(db.String, nullable=True)
    transcript = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

class TranscriptsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Transcripts

class Episodes(db.Model):
    __tablename__ = "episodes"
    id = db.Column(db.Integer, primary_key=True)
    podcast_id = db.Column(db.Integer, db.ForeignKey("podcasts.id"))
    name = db.Column(db.String, nullable=False)
    order = db.Column(db.Integer, nullable=False)
    source_url = db.Column(db.String, nullable=False)
    release_date = db.Column(db.String, nullable=False)
    runtime_min = db.Column(db.Integer, nullable=False)
    transcript = db.relationship("Transcripts", lazy="dynamic")

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

class EpisodesSchema(ma.SQLAlchemyAutoSchema):
    transcript = ma.List(ma.Nested(TranscriptsSchema(only=("id",))))
    class Meta:
        model = Episodes

class Podcasts(db.Model):
    __tablename__ = "podcasts"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    genre = db.Column(db.String, nullable=False)
    poster_url = db.Column(db.String, nullable=True)
    language = db.Column(db.String, nullable=False)
    episodes = db.relationship("Episodes")

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()


class PodcastsWithEpisodesSchema(ma.SQLAlchemyAutoSchema):
    episodes = ma.Nested(EpisodesSchema(), many=True)
    class Meta:
        model = Podcasts

class PodcastsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Podcasts
