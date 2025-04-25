from typing import List, Optional

from pydantic import BaseModel, StrictStr

from src.models import TaskInstructions
from .data_chunk import DataChunk
from .task_event import TaskEvent

from .task_type import TaskType

class Task(BaseModel):
    id: StrictStr
    label: StrictStr
    type: TaskType
    events: List[TaskEvent]
    instructions: Optional[TaskInstructions] = None
    coder: Optional[StrictStr] = None
    data: List[DataChunk]
