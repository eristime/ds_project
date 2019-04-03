import requests
from django.db import models
from .utils import getOtherNodes

class Task(models.Model):
    '''
    Task-model for distributed todo-application.
    When tasks are saved or deleted, notify also other nodes.
    '''

    FIRST = 1
    SECOND = 2
    THIRD = 3

    PRIORITIES = (
        (FIRST, 1),
        (SECOND, 2),
        (THIRD, 3)
    )

    task_id = models.AutoField(primary_key=True, help_text='Task unique id')
    description = models.CharField(max_length=280, help_text='Max 280 char description of the task')
    priority = models.PositiveSmallIntegerField(choices=PRIORITIES, blank=True, null=True, help_text='Optional priority stamp from 1 to 3') 
    completed = models.BooleanField(default=False, help_text='Marks task completed')


    def __str__(self):
        return str(self.task_id) + ' - ' + str(self.description)


    #def save(self, *args, **kwargs):
    #    print('onsave')
    #    nodes = getOtherNodes()
    #    print('nodes', nodes)
#
    #    # check if task set completed and put completed to other nodes
    #    
    #    print('task exists', Task.objects.filter(task_id=self.task_id))
    #    if not Task.objects.filter(task_id=self.task_id):
    #        print('post')
    #        data = {
    #            'task_id': self.task_id,
    #            'description': self.description,
    #            'completed': self.completed,
    #        }
    #        for node in nodes:
    #            url = '{}/api/tasks/'.format(node)
    #            print('request', url)
    #            r = requests.post(url, data)
    #            print('post r.status_code', r.status_code)
#
    #    #elif self.completed != Tasks.objects.get(task_id=self.task_id):
    #    else:
    #        print('put')
    #        data = {
    #            'description': self.description,
    #            'completed': self.completed
    #        }
    #        for node in nodes:
    #            url = '{}/api/tasks/{}/'.format(node, self.task_id)
    #            print('request', url)
    #            r = requests.put(url, data)
    #            print('r.status_code', r.status_code)
    #
    #    super().save(*args, **kwargs)

