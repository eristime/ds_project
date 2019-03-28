from rest_framework import routers, viewsets
from api.serializers import TaskSerializer
from api.models import Task

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
