from abc import abstractproperty
from typing import List, Optional

from pydantic import BaseModel, StrictStr

from .data_chunk import DataChunk
from .task_event import TaskEvent

from .task_type import TaskType


class Task(BaseModel):
    id: StrictStr
    label: StrictStr
    type: TaskType
    events: List[TaskEvent]
    instructions: Optional[None] = None # overwrite in your implementation
    coder: Optional[StrictStr] = None
    data: List[DataChunk]
