import os


def getOtherNodes():
    nodes = []
    try:
        nodes.append(os.environ['NODE_1_ADDRESS'])
    except:
        pass
    try:
        nodes.append(os.environ['NODE_2_ADDRESS'])
    except:
        pass
    
    return nodes


#def propagate_changes():
#    '''
#    Function will propagate changes to other nodes.
#    '''
#    nodes = getOtherNodes()
#    # access other backend adderesses
#    for node in nodes:
#        # define a methods
#        url = node + '/api/tasks/'
#        r = requests.get('https://api.github.com/user')
#        r.status_code
#        r.headers['content-type']
#
#        pass
