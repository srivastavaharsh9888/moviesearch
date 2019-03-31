from django.db import models
from django.contrib.postgres.fields import JSONField, ArrayField

        

class Movie(models.Model):
	movieId=models.IntegerField(default=0)
	keywords=JSONField(blank=True,null=True,default=dict())
	alternate_titles=JSONField(blank=True,null=True,default=dict())
	detail=JSONField(blank=True,null=True,default=dict())
	cast_crew=JSONField(blank=True,null=True,default=dict())
	added=models.DateTimeField(auto_now_add=True)

#Logic is to check the timeadded and if the time added is grreater the 12hrs then update 
#the database else serve the same content. 