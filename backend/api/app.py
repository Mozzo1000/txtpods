from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from api.models import db, ma
from api.config import DevConfig, ProdConfig
import os
from api.commands.db import db_command
from api.commands.pods import pods_command
from api.commands.episode import episode_command
from api.commands.transcript import transcript_command
from api.routes.podcasts import podcasts_endpoint

app = Flask(__name__)
CORS(app)
if os.environ.get("FLASK_DEBUG") == "1":
    app.config.from_object(DevConfig)
else:
    app.config.from_object(ProdConfig)
db.init_app(app)
ma.init_app(app)
migrate = Migrate(app, db)

# Commands
app.register_blueprint(db_command)
app.register_blueprint(pods_command)
app.register_blueprint(episode_command)
app.register_blueprint(transcript_command)

# API routes
app.register_blueprint(podcasts_endpoint)


@app.route("/")
def index():
    return {
        "name": "txtpods-api",
        "version": "0.1.0"
    }