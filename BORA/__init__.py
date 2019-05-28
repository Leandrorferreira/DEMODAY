import dj_database_url

from BORA.settings import *

DEBUG = True
TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = [
    'localhost',
    '.herokuapp.com'
]

SECRET_KEY = '$7*9)5_wz#n5$931z!du!+896dz@gu(dv*=ss-)f7dzsp%q4i_'

db_from_env = dj_database_url.config()
DATABASES['default'].update(db_from_env)

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'