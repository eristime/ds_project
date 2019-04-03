import requests
from rest_framework import routers, viewsets
from api.serializers import TaskSerializer
from api.models import Task
from .utils import getOtherNodes


class TaskViewSet(viewsets.ModelViewSet):
    '''
    Propagates the changes on resources to other nodes in the network.
    '''
    queryset = Task.objects.all().order_by('task_id')
    serializer_class = TaskSerializer


    def perform_create(self, serializer):
        '''
        Propagate POST requests.
        '''
        serializer.save()
        nodes = getOtherNodes()

        data = {
            'description': serializer.validated_data.get('description'),
            'priority': serializer.validated_data.get('priority'),
            'completed': serializer.validated_data.get('completed'),
        }

        for node in nodes:
            url = '{}/api/propagate_tasks/'.format(node)
            print('POST: ', url)
            r = requests.post(url, data)
            print('request status', r.status_code)


    def perform_update(self, serializer):
        '''
        Propagate PUT requests.
        '''
        task = serializer.save()
        nodes = getOtherNodes()

        data = {
            'description': task.description,
            'priority': task.priority,
            'completed': task.completed,
        }

        for node in nodes:
            url = '{}/api/propagate_tasks/{}/'.format(node, task.task_id)
            print('PUT: ', url)
            r = requests.put(url, data)
            print('request status', r.status_code)


    def perform_destroy(self, instance):
        '''
        Propagate delete request.
        '''
        nodes = getOtherNodes()

        for node in nodes:
            url = '{}/api/propagate_tasks/{}/'.format(node, instance.task_id)
            print('DELETE: ', url)
            r = requests.delete(url)
            print('request status', r.status_code)

        instance.delete()


class PropagateTaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('task_id')
    serializer_class = TaskSerializer
