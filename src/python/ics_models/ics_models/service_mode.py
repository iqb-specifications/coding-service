from enum import Enum

class ServiceMode(str, Enum):
    TRAIN_CODE = 'train+code'
    DIRECT = 'direct'
