import os

class Config:
    CSRF_ENABLED = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "postgresql://admin:password@localhost/txtpods")

class ProdConfig(Config):
    FLASK_ENV = "production"
    DEBUG = False
    TESTING = False

class DevConfig(Config):
    FLASK_ENV = "development"
    DEBUG = True
    TESTING = True

class TestingConfig(DevConfig):
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory"