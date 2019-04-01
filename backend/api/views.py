from rest_framework import routers, viewsets
from api.serializers import TaskSerializer
from api.models import Task

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('task_id')
    serializer_class = TaskSerializer


# override onSave, onUpdate, onDelete? django signal?