from django.db import models

class Task(models.Model):
    '''
    Tasks for todo app.
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