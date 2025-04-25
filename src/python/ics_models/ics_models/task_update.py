from pydantic import BaseModel, StrictStr
from typing import Optional

from .task_type import TaskType

class TaskUpdate(BaseModel):
    label: Optional[StrictStr] = None
    type: Optional[TaskType] = None
    instructions: Optional[None] = None
    coder: Optional[StrictStr] = None
